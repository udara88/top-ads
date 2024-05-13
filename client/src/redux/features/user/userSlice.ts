import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signInProps, signUpFormProps, User } from "@/lib/types";
import { signIn, createUser,getUser } from "@/lib/api/userApi";
import { stat } from "fs";


const { user, accessToken, refreshToken } =
  localStorage.getItem("user") !== null &&
  JSON.parse(localStorage.getItem("user") || "");

  

type UserState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string  | null;
  loading: boolean;
  error: null |  string;
  success:null | string;
};

const initialState: UserState = {
  user: user || null,
  accessToken: accessToken || "",
  refreshToken: refreshToken || "",
  loading: false,
  error: null,
  success:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearAllMessage:(state) =>{
      state.error = null;
      state.loading = false;
      state.success = null;
  },

      logout:(state)=>{
         localStorage.clear()
         state.user = null;
         state.accessToken = null;
         state.refreshToken = null;
         state.loading = false;
         state.success = null;
         state.error = null;
         
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        signInAsync.fulfilled,
        (state, action: PayloadAction<signInProps | null>) => {
          console.log(action.payload?.user)
          const user = {
            user: action.payload?.user || null,
            accessToken: action.payload?.accessToken || "",
            refreshToken: action.payload?.refreshToken || "",
          };
          state.user = user.user;
          state.accessToken = user.accessToken;
          state.refreshToken = user.refreshToken;
          state.loading = false;
          state.success =  `${user.user?.firstname}  ${user.user?.lastname} signed in`;

          localStorage.setItem("user", JSON.stringify(user));
        }
      )

      .addCase(signInAsync.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signUpAsync.pending, (state) => {
        state.loading = true;
        
      })

      .addCase(signUpAsync.fulfilled, (state,action:PayloadAction<any>) => {
      
        state.loading = false;
        state.error = "";
        state.success = action.payload.message ;
      })
      .addCase(signUpAsync.rejected, (state,action:PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
     
  },
});

//action
export const signInAsync = createAsyncThunk(
  "signInAsync",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const { data, error } = await signIn(email, password);
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }

      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const signUpAsync = createAsyncThunk(
  "signUpAsync",
  async (formData: signUpFormProps, thunkAPI) => {
    try {
      const { data, error } = await createUser(formData);
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCurrentUserAsync = createAsyncThunk(
  "getUserAsync",
  async(email:string,thunkAPI)=>{
    try {
      
      const { data, error } = await getUser(email)
      if (error) {
        return thunkAPI.rejectWithValue(error);
      }
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

export const {clearAllMessage,logout} =  userSlice.actions;
export default userSlice.reducer;
