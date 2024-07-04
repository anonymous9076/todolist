import React, { useEffect } from 'react'
import './Home.css'
import Card from '../Components/Card'
import AOS from 'aos'

function Home() {

  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className='home'>
      <div className='slide1'>
        <h1 data-aos="fade-down" data-aos-duration="1000"><b>BDS</b> Logistics</h1>
        <p data-aos="fade-up" data-aos-duration="1200"> "Delivering Excellence, One Mile at a Time. BDS: Your Global Logistics Partner for Truckload, Warehouse, Air, Ocean, and Parcel Solutions."</p>
      </div>
      <h1 className='title2'>SERVICES We Are Offering !</h1>
      <div className='slide2'>

      <div className="container">
        <div className="row"  data-aos="fade-up" data-aos-duration="1000">
          <img src="https://static.vecteezy.com/system/resources/previews/036/053/698/non_2x/ai-generated-semi-truck-driving-on-highway-with-digital-connectivity-and-data-streams-concept-free-photo.jpeg" alt="" className="col-md-6" />
          <div className="textDiv col-md-6">
            <h1 data-aos="fade-right" data-aos-duration="1200" className="mb-5">Truckload </h1>
            <p data-aos="fade-right" data-aos-duration="1200">" BDS offers full truckload services, ensuring your goods are transported efficiently and cost-effectively. Our fleet is equipped to handle various cargo types, providing reliable and timely deliveries."</p>
          </div>
        </div>
        <div className="row mt-5"  data-aos="fade-up" data-aos-duration="1000">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBu6hftzm4N3Mjtkogd_1QeyOX4in4velc6Q&s" alt="" className="col-md-6" />
          <div className="textDiv col-md-6">
            <h1 data-aos="fade-right" data-aos-duration="1200" className="mb-5">Warehouse</h1>
            <p data-aos="fade-right" data-aos-duration="1200">" Our state-of-the-art warehousing solutions provide secure storage for your products. With advanced inventory management systems, we ensure your goods are always accounted for and ready for distribution"</p>
          </div>
        </div>
        <div className="row mt-5" data-aos="fade-up" data-aos-duration="1000">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfSi0rWsRWEaN47c00MX5X5D66lqgXfv3OA&s" alt="" className="col-md-6" />
          <div className="textDiv col-md-6">
            <h1 data-aos="fade-right" data-aos-duration="1200" className="mb-5">Ocean</h1>
            <p data-aos="fade-right" data-aos-duration="1200">"BDS offers comprehensive ocean freight services for large, international shipments. We handle everything from container loading to customs clearance, ensuring a smooth and cost-effective transit."</p>
          </div>       
        </div>
        <div className="row mt-5" data-aos="fade-up" data-aos-duration="1000">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1L2amgC-nnp28hXfoWXMfSdIWDucR2wR5YQ&s" alt="" className="col-md-6" />
          <div className="textDiv col-md-6">
            <h1 data-aos="fade-right" data-aos-duration="1200" className="mb-5">Air</h1>
            <p data-aos="fade-right" data-aos-duration="1200">" For time-sensitive shipments, BDS provides fast and reliable air freight services. Our global network ensures your goods reach their destination quickly and safely, regardless of the distance."</p>
          </div>
        </div>
        <div className="row mt-5" data-aos="fade-up" data-aos-duration="1000">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdPar1PQhJCyT4jLkW1cP3iXCT8J_eWeyw7Q&s" alt="" className="col-md-6" />
          <div className="textDiv col-md-6">
            <h1 data-aos="fade-right" data-aos-duration="1200" className="mb-5">Parcel</h1>
            <p data-aos="fade-right" data-aos-duration="1200">"Our parcel delivery service is designed for smaller shipments that require quick and efficient handling. With real-time tracking and multiple delivery options, we make sure your packages arrive on time, every time."</p>
          </div>          
        </div>
      </div>
    </div>
     

      <div className='slide3'>
        <div className='slide3-bg'>
          <h1 data-aos="fade-down" data-aos-duration="1000">Our Happy Clients !</h1>
          <div className='card-container'>
            <Card
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgKypns8w1ZNHVi6yXkSYVIbQaEu8jA61mWA&s"
            name="Tushar Kumar"
            msg="The efficiency and reliability of BDS have transformed our logistics operations—highly recommended!"
            ></Card>
            <Card
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3y57UiiFjXekX3W0sY-B-DOhDAZN-UHdv3Q&s"
            name="Aman Valia"
            msg="Thanks to BDS, our international shipments are seamless and stress-free. Exceptional service and support!"
            ></Card>
             <Card
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQjy2hHQ0KoyGkvFSBZCxk2LDD11ZkKL5Iw&s"
            name="Anmol Mainn"
            msg="BDS's warehousing and delivery solutions have greatly improved our supply chain management. Couldn't be happier!"
            ></Card>
          </div>
        </div>
      </div>

      <div className='slide4' data-aos="fade-up" data-aos-duration="1200">
        <ul>
          <li>
            <h1>24k+</h1>
            <p>Team Members</p>
          </li>
          <li>
            <h1>50K+</h1>
            <p>Carriers </p>
          </li>
          <li>
            <h1>250k+</h1>
            <p>Sites </p>
          </li>
          <li>
            <h1>10M+</h1>
            <p>Shipments Managed</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home