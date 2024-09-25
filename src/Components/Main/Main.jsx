import React from 'react'
import './Main.css'
import Img1 from '../../images/hero-desktop.jpg'
import Img2 from '../../images/logo.svg'
import Img3 from '../../images/icon-arrow.svg'
import { useState } from 'react'
// import Toaster from '../../Components/Notifications/Toaster'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const Main = () => {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleChanges = (e) => {
        setEmail( prevState => ({
          ...prevState, [e.target.name]: e.target.email
        }));
        setError({});
    }

    const validate = (email) => {
        const error = {}
        if (!email) {
            error.email = 'This field is required';
          } else if (!emailRegex.test(email)) {
            error.email = 'Invalid email address';
          }

          return error;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const error = validate(email)
        setError(error)
        
        if(Object.keys(error).length === 0){
          console.log(email)
        //   localStorage.setItem("userMail",  JSON.stringify(email));
        //   setSuccess('Registration successful!')
        }
      }

  return (
    <div className='main'>
      <img src={Img1} alt="hero-desktop" className="female"/>
      <div className="content">
        <img src={Img2} alt="logo" className="logo"/>
        <article>
          <h1><span class="plural">WE'RE</span> COMING SOON</h1>
          <p>Hello fellow shoppers! We're currently building our new fashion store. 
          Add your email below to stay up-to-date with announcements and our launch deals.</p>
        </article>
        
        <form id="form" onSubmit={handleSubmit}>
            <div className="email">
                <input 
                name="email" 
                type="text" 
                placeholder="Email Address"
                value={email}
                onChange={handleChanges}
                />
                <button type="submit"><img src={Img3} alt="icon-arrow" className="arrow"/></button> 
                <span id="error">{error.email}</span>
            </div>
        </form>
        {

        }
      </div>
    </div>
  )
}

export default Main