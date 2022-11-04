import React from 'react'
import './Login.css';
import { useState } from 'react';
export default function Login() 
{
 const [input1,changestate] = useState({usrname:"",passwrd:""})
 console.log("-->",input1)

 const SetLogin =(event) =>
 {
  console.log(event.target.value)
  const name=event.target.name
  const value=event.target.value
  changestate({...input1,[name]:value})
 }

const SetLoginSubmit=(event)=>
{
  event.preventDefault()
  console.log(input1)
}

  return (
    <>
    <div className='Login'>
       
    <div className='back'>
    <h1><center>LOGIN</center></h1>
    <div className='inputs'>
        <center>
        <form onSubmit={SetLoginSubmit}>
           Username: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="usrname" onChange={SetLogin} placeholder="Enter Ur username"/> <br></br><br></br>
           Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="password " name="passwrd" onChange={SetLogin} placeholder='Enter Ur password'></input><br></br><br></br><br></br>
           <button type="submit" className='log' >Login in</button>
           <button className='sign'>Sign Up</button>
        </form>
        </center>
    </div>

    </div>
    
    </div>
    </>
  )
}
