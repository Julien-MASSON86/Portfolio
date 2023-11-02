import React, { useEffect, useState } from 'react';
import './TypingAnimation.css';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const fullName = "Bienvenue moi c'est Julien ..."; // Remplacez par votre nom

  const animateText = () => {
    let currentIndex = 0;

    const timer = setInterval(() => {
      setText(fullName.slice(0, currentIndex));
      currentIndex += 1;

      if (currentIndex > fullName.length) {
        clearInterval(timer);
        setTimeout(() => {
          setText('');
          animateText(); // Réinitialise l'animation
        }, 6000); // Effacez le texte après 1 seconde et réinitialisez l'animation
      }
    }, 100); // Vitesse de dactylographie (100 ms par caractère)
  };

  useEffect(() => {
    animateText();
  }, []);

  return (
    <div className="typing-animation">
      <h1 className='text-secondary'>{text}</h1>
    </div>
  );
};

export default TypingAnimation;
