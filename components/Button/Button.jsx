import React from 'react'

const Button = (props) => {
  return (
    <div className='btn'>
        {props.msg}

        <style jsx>{`
            .btn{
              border: 2px solid rgb(72, 130, 184);;
              border-radius: 15px;  
              padding: 10px 15px;
              color: rgb(72, 130, 184);
              font-weight: bold;
            }
        `}</style>
    </div>
  )
}

export default Button