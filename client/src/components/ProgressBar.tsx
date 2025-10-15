/**
 * ProgressBar Component
 * 
 * Shows how much progress a child has made!
 * 
 * Features:
 * - A colorful bar that fills up as you progress
 * - Smooth animations when the bar grows
 * - Shows percentage or custom label
 * - Different colors for different contexts (learning, mastery, etc.)
 */

interface ProgressBarProps {
  progress: number;
  max?: number;
  color?: string;
  label?: string;
  showPercentage?: boolean;
}

export default function ProgressBar({ 
  progress, 
  max = 100, 
  color = '#4ECDC4', 
  label,
  showPercentage = true 
}: ProgressBarProps) {
  const percentage = (progress / max) * 100;

  return (
    <div className="w-full" data-testid="progress-bar">
      {/* Label and percentage */}
      {(label || showPercentage) && (
        <div className="flex justify-between mb-2 text-sm">
          {label && <span className="font-semibold" data-testid="text-progress-label">{label}</span>}
          {showPercentage && <span className="text-muted-foreground" data-testid="text-progress-percentage">{Math.round(percentage)}%</span>}
        </div>
      )}
      
      {/* Progress bar container */}
      <div className="w-full bg-muted rounded-full h-4 overflow-hidden" data-testid="container-progress">
        {/* Filled portion */}
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${percentage}%`,
            background: `linear-gradient(90deg, ${color}, ${color}dd)`,
          }}
          data-testid="fill-progress"
        />
      </div>
    </div>
  );
}
