import { useState, useEffect } from 'react';

const useTypewriter = (texts, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        // Typing
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        // Switch direction
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          // Pause before deleting
          setTimeout(() => {}, 1000);
        } else {
          // Move to next text
          setCurrentIndex((currentIndex + 1) % texts.length);
          setCharIndex(0);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, charIndex, isDeleting, texts, speed]);

  return displayText;
};

export default useTypewriter;
