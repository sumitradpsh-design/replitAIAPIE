import WordMatchCard from '../WordMatchCard';
import { useState } from 'react';

export default function WordMatchCardExample() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-4 p-4 max-w-md">
      <WordMatchCard
        word="Perro"
        emoji="🐕"
        isFlipped={isFlipped}
        isMatched={false}
        onClick={() => setIsFlipped(!isFlipped)}
      />
      <WordMatchCard
        word="Gato"
        emoji="🐱"
        isFlipped={true}
        isMatched={false}
        onClick={() => console.log('Card clicked')}
      />
      <WordMatchCard
        word="Casa"
        emoji="🏠"
        isFlipped={true}
        isMatched={true}
        onClick={() => console.log('Matched card clicked')}
      />
    </div>
  );
}
