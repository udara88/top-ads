"use client"
import { getAccessTokenAsyc } from '@/redux/features/user/userSlice'
import {useAppDispatch } from "@/hooks/useTypedSelector";


 const useRefreshToken  =  () => {
  const dispatch = useAppDispatch();
  const refresh = ()=>{
    
    dispatch(getAccessTokenAsyc());
  }
 return refresh
  
}

export default useRefreshToken;