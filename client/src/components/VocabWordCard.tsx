import { Card } from "@/components/ui/card";
import { Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * VocabWordCard Component
 * 
 * Displays a vocabulary word with its translation!
 * 
 * Features:
 * - Shows the word in the target language
 * - Shows the English translation
 * - Has a speaker button to hear pronunciation
 * - Colorful emoji to make it memorable
 */

interface VocabWordCardProps {
  word: string;
  translation: string;
  emoji: string;
  onSpeak: () => void;
}

export default function VocabWordCard({ word, translation, emoji, onSpeak }: VocabWordCardProps) {
  return (
    <Card className="rounded-2xl p-4 hover-elevate" data-testid={`card-vocab-${word.toLowerCase()}`}>
      <div className="flex items-center gap-4">
        {/* Emoji visual */}
        <div className="text-4xl" data-testid={`emoji-${word.toLowerCase()}`}>
          {emoji}
        </div>
        
        {/* Word and translation */}
        <div className="flex-1">
          <h4 className="text-xl font-display font-bold" data-testid={`text-word-${word.toLowerCase()}`}>
            {word}
          </h4>
          <p className="text-sm text-muted-foreground" data-testid={`text-translation-${word.toLowerCase()}`}>
            {translation}
          </p>
        </div>
        
        {/* Speaker button */}
        <Button
          size="icon"
          variant="ghost"
          onClick={onSpeak}
          data-testid={`button-speak-${word.toLowerCase()}`}
        >
          <Volume2 className="w-5 h-5" />
        </Button>
      </div>
    </Card>
  );
}
