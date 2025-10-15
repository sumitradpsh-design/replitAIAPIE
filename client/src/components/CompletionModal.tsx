import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import StarDisplay from "./StarDisplay";
import { PartyPopper } from "lucide-react";

/**
 * CompletionModal Component
 * 
 * Shows a celebration when a level is completed!
 * 
 * Displays:
 * - Congratulations message
 * - Stars earned (with animation!)
 * - Celebration emoji
 * - Buttons to continue or replay
 */

interface CompletionModalProps {
  isOpen: boolean;
  stars: number;
  onContinue: () => void;
  onReplay: () => void;
  onNextLevel?: () => void;
  hasNextLevel?: boolean;
}

export default function CompletionModal({ isOpen, stars, onContinue, onReplay, onNextLevel, hasNextLevel }: CompletionModalProps) {
  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md" data-testid="modal-completion">
        <div className="flex flex-col items-center gap-6 py-6">
          {/* Celebration icon */}
          <div className="text-6xl animate-bounce-gentle" data-testid="emoji-celebration">
            🎉
          </div>

          {/* Congratulations message */}
          <div className="text-center">
            <h2 className="text-3xl font-display font-bold mb-2" data-testid="text-congrats">
              Amazing Job!
            </h2>
            <p className="text-muted-foreground" data-testid="text-message">
              You completed the level!
            </p>
          </div>

          {/* Stars earned */}
          <StarDisplay stars={stars} size="large" animated />

          {/* Action buttons */}
          <div className="flex flex-col gap-3 w-full">
            {hasNextLevel && onNextLevel && (
              <Button
                onClick={onNextLevel}
                className="w-full"
                data-testid="button-next-level"
              >
                🚀 Next Level
              </Button>
            )}
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={onReplay}
                className="flex-1"
                data-testid="button-replay"
              >
                Replay
              </Button>
              <Button
                onClick={onContinue}
                className="flex-1"
                data-testid="button-continue"
              >
                {hasNextLevel ? 'Back to Levels' : 'Continue'}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
