import React from 'react'

const Title = (props) => {
  return (
    <>
        <h1 className='title'>{props.title}</h1>

        <style jsx>{`
            .title{
                margin:0;
                padding:0;
            }
        `}</style>
    </>
  )
}

export default Title