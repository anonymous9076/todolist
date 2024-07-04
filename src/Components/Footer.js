import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>

    <div className='footerhead'>
      <h1>BDS</h1>
      <p>Logistics</p>
      </div>
      
      <div className='footerinput'>
       <h2>Sign Up For Our Newsletter</h2>
        <input type='email' placeholder='Email Address'></input>
      </div>

    <div className='footerbody'>
      <div className='listsectionfooter'>
        <ul>
          <h2>Services</h2>
          <li>Warehouse</li>
          <li>Truckload</li>
          <li>Ocean</li>
          <li>Air</li>
          <li>Parcel</li>
          
        </ul>
      </div>

      <div className='listsectionfooter'>
        <ul>
          <h2>Industries</h2>
          <li>Food/Grocery</li>
          <li>Healthcare</li>
          <li>Automoives</li>
          
        </ul>
      </div>

      <div className='listsectionfooter'>
        <ul>
          <h2>Career</h2>
          <li>freight Agents</li>
          <li>diversity & Inclusion</li>
          
          
        </ul>
      </div>

      <div className='listsectionfooter'>
        <ul>
          <h2>Contact</h2>
          <li>GM Tower Mohali</li>
          <li>+91 789789 7777</li>
          <li>Facebook</li>
          <li>Whatsapp</li>
          <li>Instagram</li>
          
        </ul>
      </div>

    </div>
    <div className='footerend'>
      @2024 BDS logistics, LLC
      </div>
    </div>
  )
}

export default Footer

