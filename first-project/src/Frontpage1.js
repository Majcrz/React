import React from 'react'
import './Frontpage1.css'

export default function Frontpage1() {
  return (
    <>
    <nav class="navbar navbar-expand-lg ">
  <a class="navbar-brand" href="#">Facebook</a>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
 
    <ul class="navbar-nav">

      <li class="nav-item active">
        
        <a class="nav-link" href="#"><font color="white">Profile</font></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"><font color="white">Home</font></a>
      </li>
      <li>
        <div className='circle'>
        <a href="#"><font color="white"><i class="fa fa-user-circle" aria-hidden="true"></i></font></a>
        </div>
      </li>
      <li>
        <div className='message'>
        <a href="#"><font color="white"><i class="fa fa-envelope" aria-hidden="true"></i></font></a>
        </div>
      </li>
      <li>
        <div className='notification'>
        <a href="#"><font color="white"><i class="fa fa-bell" aria-hidden="true"></i></font></a>
        </div>
      </li>
      <li>
        <div className='pic'>
        <a href="#"><img src='https://thumbs.dreamstime.com/b/passport-20639414.jpg' width="30px;"></img></a>
        </div>
      </li>
</ul>

</div>

     <form class="form">
      <div className='box'>
     <i class="fa fa-search" aria-hidden="true"></i>
      <input class="form" type="search" placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search for friend,post or video"/>
    </div>
    </form> 

</nav>
    
    
    
    </>
  )
}
