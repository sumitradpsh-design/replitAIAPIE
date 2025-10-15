import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Target, Award } from "lucide-react";

/**
 * BadgeReward Component
 * 
 * Displays achievement badges that kids earn!
 * Each badge has:
 * - An icon (trophy, star, target, etc.)
 * - A colorful background
 * - The badge name
 * - Locked or unlocked state
 * 
 * Kids love collecting these as they progress!
 */

interface BadgeRewardProps {
  name: string;
  icon: 'trophy' | 'star' | 'target' | 'award';
  color: string;
  isUnlocked: boolean;
}

export default function BadgeReward({ name, icon, color, isUnlocked }: BadgeRewardProps) {
  const icons = {
    trophy: Trophy,
    star: Star,
    target: Target,
    award: Award,
  };
  
  const Icon = icons[icon];

  return (
    <div className="flex flex-col items-center gap-2" data-testid={`badge-${name.toLowerCase().replace(/\s/g, '-')}`}>
      <div
        className={`relative w-20 h-20 rounded-full flex items-center justify-center border-4 transition-all ${
          isUnlocked
            ? `border-${color} ${color} animate-pulse-glow`
            : 'border-muted bg-muted/20 opacity-50'
        }`}
        style={isUnlocked ? { borderColor: color, backgroundColor: color } : {}}
        data-testid={`icon-container-${name.toLowerCase().replace(/\s/g, '-')}`}
      >
        <Icon className={`w-10 h-10 ${isUnlocked ? 'text-white' : 'text-muted-foreground'}`} />
      </div>
      <span className={`text-sm font-semibold text-center ${isUnlocked ? 'text-foreground' : 'text-muted-foreground'}`} data-testid={`text-badge-${name.toLowerCase().replace(/\s/g, '-')}`}>
        {name}
      </span>
    </div>
  );
}
