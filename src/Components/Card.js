import React, { useEffect } from 'react'
import './Card.css'
import AOS from 'aos'
function Card({img,name,msg}) {

  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div>
      <div className="card" data-aos="fade-right" data-aos-duration="1200" >
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{msg}</p>
          </div>
        <img src={img} className="card-img-top" alt="..."/>
      </div>
    </div>
  )
}

export default Card
