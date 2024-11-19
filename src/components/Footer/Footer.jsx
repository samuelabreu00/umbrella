import React from 'react'
import './Footer.css'
import imgLogo from '../../assets/logoHeader.png'

export const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <>
        <footer>
            <img src={imgLogo} alt="" />
            <p>&copy; {currentYear} Umbrella. Todos os direitos reservados. </p>
        </footer>
    </>
  )
}
