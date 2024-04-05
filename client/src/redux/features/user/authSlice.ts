import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signUpFormProps, User } from "@/lib/types";
import { createUser } from "@/lib/api/userApi";


type InitialState = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: any;
};

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: {},
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers:(builder) =>{
    builder
    .addCase(signupAsync.pending,(state)=>{
        state.loading = true;

    })
    .addCase(signupAsync.fulfilled,(state,action)=>{
        state.user = action.payload.user
        state.loading = false;
        state.isAuthenticated = true;
        state.error = null;
      
        localStorage.setItem("user",action.payload.user)

    })

    .addCase(signupAsync.rejected,(state,action)=>{
         state.error = action.payload
    })
  }
});

export const signupAsync = createAsyncThunk(
  "signupAsync",
  async (user: signUpFormProps) => {
    const response:any = await createUser(user);
    return response;
  }
);


export default auth.reducer;
