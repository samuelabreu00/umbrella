import React from 'react'
import "./ButtonAgendarWhite.css"

export const ButtonAgendarWhite = ({name}) => {
  return (
    <>
    
        <a target='blank'  className='buttonAgendar' href="https://api.whatsapp.com/send?phone=5585984669372">{name}</a>

    </>
  )
}
