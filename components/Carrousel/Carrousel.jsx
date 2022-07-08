import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import Img from "../../public/carrousel1.jpg"
import style from "../../styles/Carrousel.module.css"

const Carrousel = () => {
  return (
    <div className="slider">
        <Image src={Img} alt="Carrousel" layout='responsive' height={500} quality={100}></Image>

        <div>

        </div>

        <ul className='points'>
          <li> </li>
          <li> </li>
          <li> </li>
        </ul>

        <style jsx>{`
          .points{
            display:flex;
            position:relative;
            top:-50px;
            left: 50%;
          }
        `}</style>

    </div>
  )
}

export default Carrousel