import React from 'react'
import Image from "next/image"
import Img from "../../public/carrousel1.jpg"

const Card = (props) => {
  return (
    <div className='card'>
        <Image src={Img} alt="Image Card" sizes="fill"></Image>
        <div className='info'>
            <h1>COTO</h1>
            <h3>20% 15% 10%</h3>
            <span>A 0,75km</span>
        </div>

         <style jsx>{`
            .card{
                width: 300px;
                height:350px;
                border: 1px solid grey;
                border-radius:5px;
            }
            .info{
                height: 150px ;
                padding: 15px;
            }
            
            
        `}</style>

    </div>
  )
}

export default Card