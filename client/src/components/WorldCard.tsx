import { Card } from "@/components/ui/card";
import { Lock } from "lucide-react";

/**
 * WorldCard Component
 * 
 * This component displays a clickable card for each language world.
 * Each world has:
 * - A colorful background with a gradient (visual appeal for kids)
 * - An emoji flag representing the language
 * - The language name
 * - A lock icon if the world is not unlocked yet
 * 
 * Props explained:
 * - name: The name of the language (e.g., "Spanish")
 * - flag: An emoji representing the country (e.g., "🇪🇸")
 * - color: Background gradient color for the card
 * - isLocked: Whether this world is unlocked (true = locked, false = unlocked)
 * - onClick: Function that runs when the card is clicked
 */

interface WorldCardProps {
  name: string;
  flag: string;
  color: string;
  isLocked: boolean;
  onClick: () => void;
}

export default function WorldCard({ name, flag, color, isLocked, onClick }: WorldCardProps) {
  return (
    <Card
      onClick={!isLocked ? onClick : undefined}
      className={`relative overflow-hidden rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
        isLocked ? 'opacity-60 cursor-not-allowed' : 'hover-elevate active-elevate-2'
      }`}
      style={{ background: color }}
      data-testid={`card-world-${name.toLowerCase()}`}
    >
      {/* Lock icon overlay for locked worlds */}
      {isLocked && (
        <div className="absolute top-4 right-4">
          <Lock className="w-8 h-8 text-white" data-testid="icon-lock" />
        </div>
      )}
      
      {/* Flag emoji - large and centered */}
      <div className="text-6xl mb-4 text-center" data-testid={`text-flag-${name.toLowerCase()}`}>
        {flag}
      </div>
      
      {/* Language name */}
      <h3 className="text-2xl font-display font-bold text-white text-center" data-testid={`text-name-${name.toLowerCase()}`}>
        {name}
      </h3>
    </Card>
  );
}
