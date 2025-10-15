import { Star } from "lucide-react";

/**
 * StarDisplay Component
 * 
 * Shows the stars earned in a level or activity.
 * Stars appear with a fun animation when earned!
 * 
 * How to use:
 * - Pass the number of stars earned (0-3)
 * - Stars will be filled in gold color
 * - Empty stars appear in gray
 * - Size can be customized (small, medium, large)
 */

interface StarDisplayProps {
  stars: number;
  maxStars?: number;
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
}

export default function StarDisplay({ stars, maxStars = 3, size = 'medium', animated = false }: StarDisplayProps) {
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16',
  };

  return (
    <div className="flex gap-2 justify-center" data-testid="display-stars">
      {Array.from({ length: maxStars }).map((_, index) => (
        <Star
          key={index}
          className={`${sizeClasses[size]} transition-all duration-300 ${
            index < stars
              ? `fill-yellow-400 text-yellow-400 ${animated ? 'animate-star-collect' : ''}`
              : 'text-muted'
          }`}
          data-testid={`star-${index + 1}`}
        />
      ))}
    </div>
  );
}
