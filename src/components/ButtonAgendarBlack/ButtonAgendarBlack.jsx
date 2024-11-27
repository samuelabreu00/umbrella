import React from 'react'
import "./ButtonAgendarBlack.css"

export const ButtonAgendarBlack = ({name}) => {
  return (
    <>
    
        <a target='blank'  className='buttonAgendarBlack' href="https://api.whatsapp.com/send?phone=5585984669372">{name}</a>

    </>
  )
}