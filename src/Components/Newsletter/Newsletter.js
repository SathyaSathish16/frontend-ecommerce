import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on Your Email</h1>
        <p>Subscribe to our Newsletter and stay updated</p>
      <div>
        <input type='email' placeholder='Your Email ID'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
