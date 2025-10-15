import CompletionModal from '../CompletionModal';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function CompletionModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 flex items-center justify-center min-h-[400px]">
      <Button onClick={() => setIsOpen(true)}>
        Show Completion Modal
      </Button>
      <CompletionModal
        isOpen={isOpen}
        stars={3}
        onContinue={() => {
          console.log('Continue clicked');
          setIsOpen(false);
        }}
        onReplay={() => {
          console.log('Replay clicked');
          setIsOpen(false);
        }}
      />
    </div>
  );
}
