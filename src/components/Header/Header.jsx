import React, { useEffect } from 'react'
import './Header.css'
import Logo from "../../assets/logoHeader.png"
import { ButtonAgendarWhite } from '../ButtonAgendarWhite/ButtonAgendarWhite'
import { NavLink, Link, useLocation} from 'react-router-dom'

export const Header = () => {
  
  
  const location = useLocation();

  const isUmbrellaClubPage = location.pathname === '/club';

  useEffect(() => {
    const hamburguer = document.querySelector(".hamburguer");
    const navMenu = document.querySelector(".nav-menu");
  
    const handleHamburguerClick = () => {
      hamburguer.classList.toggle("active");
      navMenu.classList.toggle("active");
    };
  
    const handleDocumentClick = (e) => {
      if (
        navMenu.classList.contains("active") &&
        !navMenu.contains(e.target) &&
        !hamburguer.contains(e.target)
      ) {
        navMenu.classList.remove("active");
        hamburguer.classList.remove("active");
      }
    };
  
    const handleScroll = () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        hamburguer.classList.remove("active");
      }
    };
  
    if (hamburguer) {
      hamburguer.addEventListener("click", handleHamburguerClick);
    }
  
    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("scroll", handleScroll);
  
    return () => {
      if (hamburguer) {
        hamburguer.removeEventListener("click", handleHamburguerClick);
      }
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => {
    const hamburguer = document.querySelector(".hamburguer");
    const navMenu = document.querySelector(".nav-menu");
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
  };

  return (
    <header className={`header ${isUmbrellaClubPage ? 'transparent' : ''}`}>
        <div className="container-header">
            <Link to='/' > <img src={Logo} alt="Logo"/></Link>
            <nav className='nav-menu'>
                <ul >
                    <li>
                      <NavLink 
                        to='/sobre' 
                        onClick={closeMenu}
                        className={({ isActive }) => isActive ? "active-link" : ""}
                      >
                        Quem somos
                      </NavLink>
                    </li>
                    <span></span>
                    <li>
                      <NavLink 
                        to='/nosprocure' 
                        onClick={closeMenu}
                        className={({ isActive }) => isActive ? "active-link" : ""}
                      >
                        Quando devo procurar a Umbrella?
                      </NavLink>
                    </li>
                    <span></span>
                    <li>
                      <NavLink 
                        to='/serviçosempresariais' 
                        onClick={closeMenu}
                        className={({ isActive }) => isActive ? "active-link" : ""}
                      >
                        Serviços Empresariais
                      </NavLink>
                    </li>
                    <span></span>
                    <li>
                      <NavLink 
                        to='/club' 
                        onClick={closeMenu}
                        className={({ isActive }) => isActive ? "active-link" : ""}
                      >
                        Umbrella Club
                      </NavLink>
                    </li>
                    <ButtonAgendarWhite name='Agendar minha consulta' />
                </ul>
            </nav>
            <div className="container-hamburguer">
              <div className="hamburguer">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
        </div>
    </header>
  );
}
