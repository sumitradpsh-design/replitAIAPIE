import { Card } from "@/components/ui/card";
import { Lock, Star } from "lucide-react";

/**
 * LevelCard Component
 * 
 * This shows a single level in a world with:
 * - The level number (1, 2, 3, etc.)
 * - Stars earned (0-3 stars based on performance)
 * - Lock icon if the level is not unlocked yet
 * 
 * How stars work:
 * - 0 stars: Level not completed yet
 * - 1 star: Completed with basic score
 * - 2 stars: Good performance
 * - 3 stars: Perfect score!
 */

interface LevelCardProps {
  levelNumber: number;
  stars: number;
  isLocked: boolean;
  onClick: () => void;
}

export default function LevelCard({ levelNumber, stars, isLocked, onClick }: LevelCardProps) {
  return (
    <Card
      onClick={!isLocked ? onClick : undefined}
      className={`relative rounded-3xl p-6 transition-all duration-300 ${
        isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover-elevate active-elevate-2 hover:scale-105'
      }`}
      data-testid={`card-level-${levelNumber}`}
    >
      {/* Lock icon for locked levels */}
      {isLocked && (
        <div className="absolute top-3 right-3">
          <Lock className="w-6 h-6 text-muted-foreground" data-testid="icon-lock" />
        </div>
      )}
      
      {/* Level number - big and bold */}
      <div className="text-4xl font-display font-bold text-center mb-4" data-testid={`text-level-${levelNumber}`}>
        {levelNumber}
      </div>
      
      {/* Stars display - showing earned stars */}
      <div className="flex justify-center gap-1" data-testid={`stars-level-${levelNumber}`}>
        {[1, 2, 3].map((starNum) => (
          <Star
            key={starNum}
            className={`w-6 h-6 ${
              starNum <= stars
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-muted'
            }`}
            data-testid={`star-${starNum}-level-${levelNumber}`}
          />
        ))}
      </div>
    </Card>
  );
}
