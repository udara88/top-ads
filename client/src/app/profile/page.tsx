"use client"
import useAxiosPrivate from '@/hooks/useAxiosPrivate';
import { getUser } from '@/lib/api/userApi'
import { User } from '@/lib/types';
import React,{useEffect} from 'react'

const Profile = () => {
  const axiosPrivate = useAxiosPrivate();

  useEffect( () => {
    const fetchUser = async () => {
      const {data} = await axiosPrivate.get<User>(`/users/getuser?email=udarawickramasinghe88@gmail.com`)
      if(data){
        console.log(data)
      }
    }
    fetchUser()

  },[])
  return (
    <div>Users</div>
  )
}

export default Profile