import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signInProps, signUpFormProps, User } from "@/lib/types";
import { signIn } from "@/lib/api/userApi";
import { useAppSelector } from "@/hooks/useTypedSelector";



type UserState = {
  user: User | null ;
  accessToken:string;
  refreshToken:string;
  loading:boolean;
  error:null | string
};

const initialState: UserState = {
  user: null,
  accessToken:"",
  refreshToken:"",
  loading:false,
  error:null

};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers:(builder) =>{
    builder
    .addCase(signInAsync.pending,(state)=>{
        state.loading = true;

    })
    .addCase(signInAsync.fulfilled,(state,action:PayloadAction<signInProps|null>)=>{ 
      const user   = {
        user: action.payload?.user || null,
        accessToken:action.payload?.accessToken || "",
        refreshToken:action.payload?.refreshToken || ""
      }
        state.user = user.user ;
        state.accessToken = user.accessToken ;
        state.refreshToken = user.refreshToken;
        state.loading = false;
        state.error = null;

        localStorage.setItem("user",JSON.stringify(user))
    })

    .addCase(signInAsync.rejected,(state,action:PayloadAction<any>)=>{
         state.loading = false; 
         state.error = action.payload
         
    })
  }
});

//action
export const signInAsync = createAsyncThunk(
  "signInAsync",
  async ({email,password}:{email:string,password:string},thunkAPI) => {
   try {
    const {data,error} = await signIn(email,password);
    if(error){
      return thunkAPI.rejectWithValue(error)
      
    }
   
    return data;
   } catch (error:any) {
    return thunkAPI.rejectWithValue(error)
   }
  }
);


 export default userSlice.reducer;
