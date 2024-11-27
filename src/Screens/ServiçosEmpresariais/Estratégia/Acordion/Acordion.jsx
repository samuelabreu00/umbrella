import React, { useState, useRef } from 'react';
import './acordion.css';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

function Acordion({ titulo, texto }) {
  const [showText, setShowText] = useState(false);
  const answerRef = useRef(null);

  const toggleText = () => {
    setShowText((prevShowText) => !prevShowText);
  };

  return (
    <div className={`question-answer ${showText ? 'show-text' : ''}`}>
      <div className="question">
        <h2 className="title-question">{titulo}</h2>
        <button className="question-btn" onClick={toggleText}>
          {showText ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <div ref={answerRef} className="answer">
        <p>{texto}</p>
      </div>
    </div>
  );
}

export default Acordion;
