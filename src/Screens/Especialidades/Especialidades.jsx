import React from 'react'
import './Especialidades.css'
import iconPsicologia from '../../assets/iconPsicologia.png'
import iconPsiquiatria from '../../assets/iconPsiquiatria.png'
import iconNutrição from '../../assets/iconNutrição.png'

export const Especialidades = () => {
  return (
    <>
    <section className="especialidades">
        <div className="containerEspecialidades">
            <h1>Especialidades</h1>

            <div className="itensEspecialidade">
                <div className="content">
                    <div className="box">
                        <img src={iconPsicologia} alt="" />
                        <h2>Psicologia</h2>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ratione amet placeat omnis. Rerum officia necessitatibus ducimus quia velit doloremque quisquam neque, corporis sequi, distinctio adipisci corrupti expedita, reprehenderit dolorem.</p>
                </div>
                

                <div className="content">
                    <div className="box">
                        <img src={iconPsiquiatria} alt="" />
                        <h2>Psiquiatria</h2>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ratione amet placeat omnis. Rerum officia necessitatibus ducimus quia velit doloremque quisquam neque, corporis sequi, distinctio adipisci corrupti expedita, reprehenderit dolorem.</p>
                </div>

                <div className="content">
                    <div className="box">
                        <img src={iconNutrição} alt="" />
                        <h2>Nutrição</h2>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ratione amet placeat omnis. Rerum officia necessitatibus ducimus quia velit doloremque quisquam neque, corporis sequi, distinctio adipisci corrupti expedita, reprehenderit dolorem.</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
