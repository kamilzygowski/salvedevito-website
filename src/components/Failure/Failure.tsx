import React from 'react'
import "./Failure.scss"
import image from "../../assets/failure.webp"

interface FailureProps{
    message: string
}
const Failure = ({message}: FailureProps) => {
  return (
    <div className='Failure'>
        <img src={image} alt=""/>
        <h2>Failure</h2>
        <p>{message}</p>
    </div>
  )
}

export default Failure