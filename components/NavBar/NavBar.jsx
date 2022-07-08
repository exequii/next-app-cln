import Image from 'next/image'
import React from 'react'
import Hamburger from "../../public/hamburger.png"
import ClubLN from "../../public/clubln.png"
import Bell from "../../public/bell.svg"
import Heart from "../../public/heart.svg"

const NavBar = () => {
  return (
    <div className='navbar'>
      <div>
        <Image src={Hamburger} alt="hamburguer icon" className='icon' width={30} height={30}></Image>
        <Image src={ClubLN} alt="logo la nacion" className='icon' width={60} height={40}></Image>
      </div> 

      <div className='d-flex'>
        <div id="searcher">
          <input type="text" placeholder='Buscar un comercio..'></input>
          <input type="text" placeholder='Ingresa una ubicacion..'></input>
        </div>
        <div className='search'>
          <i className="bi bi-search white"></i>
        </div>
      </div>

      <div id="icons">
        <i className="bi bi-bell white"></i>
        <i className="bi bi-heart white"></i>
        <i className="bi bi-emoji-laughing white"></i>
      </div>
        


        <style jsx>{`
          .navbar{
              background-color: rgb(0,0,0,0.7);
              height: 60px;
              width: 100%;
              position: fixed;
              top:0;
              left:0;
              display: flex;
              justify-content: space-between;
              align-items:center;
              z-index: 1;
          }

          .navbar div{
            padding: 0px 15px;
          }

          .search{
            background-color: rgb(72, 130, 184);
            border-radius: 15px 15px 15px 15px;
            padding: 0 !important;
            height: 33px;
            width: 33px;
            display:flex;
            align-items: center;
            justify-content:center;
            margin-left: 10px;
          }

          #searcher{
            border: 1px solid grey;
            border-radius: 15px 15px 15px 15px
          }

          #searcher input{
            background-color: transparent;
            padding: 8px 45px 8px 10px;
            border: none;
          }

          #searcher input:first-child{
            border-right: 1px solid grey !important; 
          }

          #searcher input::placeholder{
            color: grey;
          }


          #icons i{
            width: 33px;
            height: 33px;
            padding:0 !important;
            margin-left: 10px;
          }

          `}
        </style>
    </div>
  )
}

export default NavBar