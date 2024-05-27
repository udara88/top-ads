"use client"
import UseRefreshToken from '@/hooks/useRefreshToken'
import { getUser } from '@/lib/api/userApi'
import React,{useEffect} from 'react'

const Profile = () => {

  useEffect( () => {
    const fetchUser = async () => {
      const {data,error} = await getUser('udarawickramasinghe88@gmail.com')
      if(data){
        console.log(data)
      }
      
      if(error){
        console.log(error)
      }
    }
    fetchUser()

  },[])
  return (
    <div>Users</div>
  )
}

export default Profile