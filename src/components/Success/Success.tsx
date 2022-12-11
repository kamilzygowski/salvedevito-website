import React from 'react'
import "./Success.scss"
import image from "../../assets/success.webp"

interface SuccessProps{
    message: string
}
const Success = ({message}: SuccessProps) => {
  return (
    <div className='Success'>
        <img src={image} alt=""/>
        <h2>Success</h2>
        <p>{message}</p>
    </div>
  )
}

export default Success