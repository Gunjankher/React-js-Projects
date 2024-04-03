// take a logut form the auth form appwrite
// navigate 
// dispatch 
// 

import React, { useState } from 'react'
import authservice from '../appwrite/auth'
import {useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import {Button,Input , Logo} from './index'
import { Link , useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'


function SignUp() {

const dispatch = useDispatch()
const navigate = useNavigate()
const [error , SetError] = useState("")
const {register , handleSubmit} = useForm()


const create = async(data)=>{
SetError("")

try {
    
 const userData = await authservice.createAccount(data)
 if(userData){
    const userData = await authservice.getCurrentUser()
    if(userData) dispatch(login(userData))
    navigate("/")
 }

} catch (error) {
    SetError(error.message)
}


}
  return (
    <div>SignUp

<form
onSubmit={handleSubmit(create)}

></form>
<Input
label = "email :"
placeholder = "Enter your Email"
type = "email"
{...register("email",{
required : true,
validate :{
    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
    "Email address must be a valid address",
}

})}
/>

<Input
label = "password"
placeholder = "Enter your password"
type = "password"
{...register ("password",{
required : true

})}



/>



    </div>
    
  )
}

export default SignUp