import React from 'react'
import './Main.css'
import Img1 from '../../images/hero-desktop.jpg'
import Img3 from '../../images/icon-arrow.svg'
import { useState } from 'react'
import Toaster from '../Notifications/Toaster'

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const Main = () => {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const [success, setSuccess] = useState('')

    const handleChanges = (e) => {
        setEmail(e.target.value);
        setError({});
    }

    const validate = (email) => {
        const red = document.getElementsByClassName('email')
        const error = {}
        if (!email || !emailRegex.test(email)) {
            error.email = 'Please provide a valid email';
            // red.classList.add('border');
        } 
          // red.classList.remove('border');
          return error;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const error = validate(email)
        setError(error)
        
        if(Object.keys(error).length === 0){
          setSuccess('Stay tunned for announcements and launch deals');
          setTimeout(() => {
            window.location.reload();
          }, 3000);
          console.log(email);
        }
      }

  return (
    <div className='main'>
      <img src={Img1} alt="hero-desktop" className="female"/>
      <div className="content">
        <article>
          <h1><span className="plural">WE'RE</span> COMING SOON</h1>
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
                <button type="submit" className='btn'><img src={Img3} alt="icon-arrow" className="arrow"/></button> 
            </div>
                <span id="error">{error.email}</span>
        </form>
        {success? <Toaster successMsg={success}/>
          : 
          <></>
        }
      </div>
    </div>
  )
}

export default Main