import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userSlice from './features/user/userSlice'
export const store = configureStore({
   reducer:{
    user:userSlice
   },

  

},)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
