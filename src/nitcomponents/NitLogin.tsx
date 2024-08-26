//import React from 'react'
import '../css/login.css'

export default function NitLogin() {
  return (
    <div>
<div className="container h-80">
<div className="row align-items-center h-100">
    <div className="col-3 mx-auto">
        <div className="text-center">
            <img  width="150px" height="200px"
            id="profile-img" className="rounded-circle profile-img-card" src="https://i.imgur.com/6b6psnA.png" />
            <p id="profile-name" className="profile-name-card"></p>
            <form  className="form-signin">
                
            
                <input type="password" name="password" id="inputPassword" className="form-control form-group" placeholder="password" required />
                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">enter</button>
            </form>
        </div>
    </div>
</div>
</div>




    </div>
  )
}
