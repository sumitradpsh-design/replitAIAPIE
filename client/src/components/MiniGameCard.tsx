import { Card } from "@/components/ui/card";
import { Shuffle, Type, Mic } from "lucide-react";

/**
 * MiniGameCard Component
 * 
 * Displays different types of mini-games kids can play!
 * 
 * Game types:
 * - 'match': Word matching memory game
 * - 'build': Sentence building puzzle
 * - 'speak': Pronunciation challenge
 * 
 * Each game has a unique icon and fun tilt effect!
 */

interface MiniGameCardProps {
  type: 'match' | 'build' | 'speak';
  title: string;
  color: string;
  onClick: () => void;
}

export default function MiniGameCard({ type, title, color, onClick }: MiniGameCardProps) {
  const icons = {
    match: Shuffle,
    build: Type,
    speak: Mic,
  };

  const Icon = icons[type];

  return (
    <Card
      onClick={onClick}
      className="relative rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover-elevate active-elevate-2 hover:-rotate-1"
      style={{ background: color }}
      data-testid={`card-game-${type}`}
    >
      {/* Game icon */}
      <div className="flex justify-center mb-3">
        <Icon className="w-12 h-12 text-white" data-testid={`icon-game-${type}`} />
      </div>
      
      {/* Game title */}
      <h3 className="text-xl font-display font-bold text-white text-center" data-testid={`text-game-${type}`}>
        {title}
      </h3>
    </Card>
  );
}
