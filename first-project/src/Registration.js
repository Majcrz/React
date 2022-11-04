import React from 'react'
import './Registration.css'
import { useState } from 'react'

export default function Registration() {
  const[inputs,changeinput] = useState({username:"",password:"",date:"",email:"",country:""})
  console.log("-->",inputs)
  
  
  
   const SetRegister = (event) =>
   {
    const name=event.target.name
    console.log(event.target.value)
    const value=event.target.value
    changeinput({...inputs,[name]:value})
   }
  
const SetSubmit = (event) =>
{
  event.preventDefault()
  console.log(inputs)
}

  return (
    <>
    <div className='Registration'>
    <div className='back1'>
    <h1><center>REGISTRATION</center></h1>
    <div className='inputs'>
        <center>
        <form onSubmit={SetSubmit}>
           Username: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="username" placeholder="Enter Ur username" onChange={SetRegister}/>  <br></br><br></br>
           Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" name="password" placeholder='Enter Ur password' onChange={SetRegister}></input><br></br><br></br><br></br>
           DOB:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="date" name="date" onChange={SetRegister}></input><br></br><br></br><br></br>
           Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="email" name="email" placeholder='Enter Ur Email' onChange={SetRegister}></input><br></br><br></br><br></br>
          <div className='city'>Country:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select id="" name="country" onChange={SetRegister}><option selected>India</option><option>Australia</option><option>Japan</option><option>China</option></select></div><br></br><br></br><br></br>
          <button type="submit" className='sub'>Submit</button>
        </form>
        </center>
    </div>
</div>
    </div>

    </>
  )
  

  }