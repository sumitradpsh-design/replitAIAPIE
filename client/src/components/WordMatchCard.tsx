import { Card } from "@/components/ui/card";
import { useState } from "react";

/**
 * WordMatchCard Component
 * 
 * This is a flip card used in the word matching game.
 * It shows:
 * - An emoji/image on the front
 * - A word on the back when flipped
 * 
 * How it works:
 * - Click the card to flip it and see the word
 * - The card rotates with a 3D flip animation
 * - Used in memory matching games where kids match pairs
 */

interface WordMatchCardProps {
  word: string;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
}

export default function WordMatchCard({ word, emoji, isFlipped, isMatched, onClick }: WordMatchCardProps) {
  return (
    <div
      className="relative w-full aspect-square cursor-pointer"
      onClick={onClick}
      data-testid={`card-word-${word.toLowerCase()}`}
    >
      <div
        className={`w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped || isMatched ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Front of card - shows emoji */}
        <Card
          className={`absolute inset-0 rounded-2xl flex items-center justify-center text-6xl [backface-visibility:hidden] ${
            isMatched ? 'opacity-50' : 'hover-elevate active-elevate-2'
          }`}
        >
          <span data-testid={`emoji-${word.toLowerCase()}`}>❓</span>
        </Card>
        
        {/* Back of card - shows word and emoji */}
        <Card
          className={`absolute inset-0 rounded-2xl flex flex-col items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)] ${
            isMatched ? 'bg-green-100 border-green-400' : ''
          }`}
        >
          <div className="text-4xl mb-2" data-testid={`emoji-back-${word.toLowerCase()}`}>{emoji}</div>
          <div className="text-xl font-display font-semibold" data-testid={`text-word-${word.toLowerCase()}`}>{word}</div>
        </Card>
      </div>
    </div>
  );
}
