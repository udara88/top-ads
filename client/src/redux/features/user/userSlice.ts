// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { signUpFormProps, User } from "@/lib/types";
// import { createUser } from "@/lib/api/userApi";
// import { string } from "zod";
// import { isNullOrUndefined } from "util";


// type InitialState = {
//   user: User | null;
//   isAuthenticated: boolean;
//   loading: boolean;
//   error:string;
//   token:string;
// };

// const initialState: InitialState = {
//   user: null,
//   isAuthenticated: false,
//   loading: false,
//   error:"",
//   token:""
// };

// const auth = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers:(builder) =>{
//     builder
//     .addCase(signupAsync.pending,(state)=>{
//         state.loading = true;

//     })
//     .addCase(signupAsync.fulfilled,(state,action:PayloadAction<string>)=>{
//       console.log(action.payload)
//         state.user = null;
//         state.loading = false;
//         state.isAuthenticated = false;
//         state.error = "";
      

//     })

//     .addCase(signupAsync.rejected,(state,action)=>{
//         console.log(action)
//          state.error = action.payload as string
//          state.loading = false
         
//     })
//   }
// });

// // export const signupAsync = createAsyncThunk(
// //   "signupAsync",
// //   async (user: signUpFormProps,thunkAPI) => {
// //    try {
// //     const {data,error} = await createUser(user);
   
// //     if(error){
// //       return thunkAPI.rejectWithValue(error)
// //     }
// //     return data;
   
// //    } catch (error:any) {
// //     return thunkAPI.rejectWithValue(error)
// //    }
// //   }
// // );


// export default auth.reducer;
