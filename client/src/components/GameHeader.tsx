import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, Heart } from "lucide-react";

/**
 * GameHeader Component
 * 
 * The top bar shown during games and levels!
 * 
 * Shows:
 * - Back button to return to previous screen
 * - Current stars collected
 * - Lives/hearts remaining (for some game modes)
 * - Level or world name
 */

interface GameHeaderProps {
  title: string;
  stars: number;
  lives?: number;
  onBack: () => void;
}

export default function GameHeader({ title, stars, lives, onBack }: GameHeaderProps) {
  return (
    <div className="sticky top-0 z-50 bg-background border-b p-4" data-testid="header-game">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Back button */}
        <Button
          size="icon"
          variant="ghost"
          onClick={onBack}
          data-testid="button-back"
        >
          <ArrowLeft className="w-6 h-6" />
        </Button>

        {/* Title */}
        <h2 className="text-xl font-display font-bold" data-testid="text-title">
          {title}
        </h2>

        {/* Stats (stars and lives) */}
        <div className="flex items-center gap-4">
          {/* Stars collected */}
          <div className="flex items-center gap-1" data-testid="display-stars">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold" data-testid="text-stars">{stars}</span>
          </div>

          {/* Lives (if provided) */}
          {lives !== undefined && (
            <div className="flex items-center gap-1" data-testid="display-lives">
              <Heart className="w-5 h-5 fill-red-500 text-red-500" />
              <span className="font-semibold" data-testid="text-lives">{lives}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
