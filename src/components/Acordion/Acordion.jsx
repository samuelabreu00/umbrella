import React from 'react';
import './Acordion.css';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

function Acordion({ titulo, texto, isActive, onClick }) {
  return (
    <div className={`question-answer ${isActive ? 'show-text' : ''}`}>
      <div className="question">
        <h2 className="title-question">{titulo}</h2>
        <button className="question-btn" onClick={onClick}>
          {isActive ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      {isActive && (
        <div className="answer">
          <p>{texto}</p>
        </div>
      )}
    </div>
  );
}

export default Acordion;
