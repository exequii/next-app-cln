import React from 'react'
import Button from '../Button/Button'
import Card from '../Card/Card'
import Title from '../Title/Title'

const Slider = (props) => {
  return (
    <div className='slider'>

        <div className='d-flex space-between'>
            <div>
                <Title title={props.title}></Title>
                {
                    props.subtitle !== "" ? 
                    <p>{props.subtitle}</p>
                    :
                    <></>
                }

            </div>
            <div>
                <Button msg={props.button}></Button>
            </div>
        </div>

        <div className='d-flex space-around'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>

        <style jsx>{`
            .slider{
                width: 100%;
                height: 500px;
                display:flex;
                flex-direction:column;
                padding: 50px;
            }
            
            p{
                margin:0;
            }
            .slider div{
                padding: 10px 0px;
            }
            
        `}</style>
    </div>
  )
}

export default Slider