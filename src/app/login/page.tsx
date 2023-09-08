"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { Axios } from 'axios';

const LoginPage = () => {
  // user details
  const [user,setUser] = useState({
    email:"",
    password:"",
    username:""
  })



  return (
    <h1 className='text-2xl text-green-400'>LoginPage update</h1>
  )
}

export default LoginPage