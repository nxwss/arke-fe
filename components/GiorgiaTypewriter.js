import React, { useState, useEffect } from 'react';

const GiorgiaTypewriter = ({
  texts,
  typingDelay = 150,
  erasingDelay = 50, // Valore ridotto per aumentare la velocità di cancellazione
  newTextDelay = 2000
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index >= texts.length) return; // Se abbiamo superato il numero di testi, non fare niente.

    if (subIndex === texts[index].length + 1 && !reverse) {
      // Se abbiamo finito di scrivere il testo, inizia a cancellare dopo un ritardo
      setTimeout(() => setReverse(true), newTextDelay);
      return;
    }

    if (subIndex === 0 && reverse) {
      // Se abbiamo cancellato tutto il testo, passa alla prossima stringa
      setReverse(false);
      setIndex((index + 1) % texts.length);
      return;
    }

    // Gestione della digitazione e cancellazione
    const timeout = setTimeout(() => {
      setSubIndex(currentSubIndex => currentSubIndex + (reverse ? -1 : 1));
    }, reverse ? erasingDelay : typingDelay);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, typingDelay, erasingDelay, newTextDelay]);

  return (
    <h1 className="movingGiorgiaGradientText font-bold hero-title py-3">
      <span className='movingGiorgiaGradientText'>Il mondo fa schifo a riconoscere</span> {texts[index].substring(0, subIndex)}
      <span className="cursor">|</span>
    </h1>
  );
};


export default GiorgiaTypewriter;
