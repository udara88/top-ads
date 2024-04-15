import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import userSlice from './features/user/userSlice'
export const store = configureStore({
   reducer:{
    user:userSlice
   },

  

},)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector
