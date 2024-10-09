import React from 'react'
import './Problem.modules.css'

import { TbClockBolt } from "react-icons/tb";
import { FaLightbulb } from "react-icons/fa6";
import { BsFillPuzzleFill } from "react-icons/bs";

const Problem = () => {
  return (
    <div className='problem-container'>
        <h2>Resolvendo o seu problema!</h2>
        
        <div className="boxes-container">
            <div className="problem-box">
                <TbClockBolt />
                <h3>Rápido</h3>
            </div>
            <div className="problem-box">
                <FaLightbulb />
                <h3>Eficaz</h3>
            </div>
            <div className="problem-box">
                <BsFillPuzzleFill />
                <h3>Resolutivo</h3>
            </div>
        </div>

    </div>
  )
}

export default Problem