import React, { useEffect } from 'react'
import "./RegistrationForm.css"
import { useState } from 'react'
import { useAuthContext } from '../../../contexts/auth'


export default function RegistrationForm({setUserLoggedIn}) {
  const {signupUser, user}= useAuthContext()

  const [registrationForm, setRegistrationForm] = useState({email:"", userName:"", firstName:"", lastName:"", password:"", confirm:""})
  const [passwordsMatch, setPasswordsMatch] = useState(null)
  const handleOnInputChange = (event) => {
    setRegistrationForm({ ...registrationForm, [event.target.name]: event.target.value })
    console.log(registrationForm)
  }

  const handleOnRegistrateUser = (user) => {
      signupUser(user)
  }
  const checkPasswords = (registrationForm) => { 
    console.log("passwords check", registrationForm.password, registrationForm.confirm)
    if(registrationForm.password ==='' && registrationForm.confirm === ''){
      return false
    }
    else if (registrationForm.password === registrationForm.confirm) {
      setPasswordsMatch(null)
      return true
    } else {
      return false
    }

}

  return (
        <form className='registration-form'>

            <div className='input-field'>
            <span className = "input-title">Email</span>
            <input className='form-input' placeholder = "type email" name = "email" type = "email" value = {registrationForm.email} onChange={handleOnInputChange} ></input>
            </div>
            <div className='input-field'>
            <span className = "input-title">Username</span>
            <input className='form-input' placeholder = "type username" name = "userName" type = "text"  value = {registrationForm.userName} onChange={handleOnInputChange}></input>
            </div>
            <div className='input-field'>
            <span className = "input-title">First Name</span>
            <input className='form-input' placeholder = "type first name" name = "firstName" type = "text"  value = {registrationForm.firstName} onChange={handleOnInputChange}></input>
            </div>
            <div className='input-field'>
            <span className = "input-title">Last Name</span>
            <input className='form-input' placeholder = "type last name" name = "lastName" type = "text" value = {registrationForm.lastName} onChange={handleOnInputChange} ></input>
            </div>
            <div className='input-field'>
            <span className = "input-title">Password</span>
            <input className='form-input' placeholder = "type password" name = "password" type = "password" value = {registrationForm.password} onChange={handleOnInputChange}></input>
            </div>
            <div className='input-field'>
            <span className = "input-title">Confirm </span>
            <input className='form-input' placeholder = "confirm password" name = "confirm" type = "password" onChange={handleOnInputChange}></input>
            </div>
            {passwordsMatch === false?<span className='invalid-message'>password mismatch</span>:null}
            <button className='submit-registration' type = "button" onClick={() => {
              if(checkPasswords(registrationForm)) {
                setUserLoggedIn(true)
                handleOnRegistrateUser(registrationForm)
              } else {setPasswordsMatch(false)}
            }}>Create Account</button>

        </form>
  )
}
