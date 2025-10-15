import BottomNav from '../BottomNav';
import { useState } from 'react';

export default function BottomNavExample() {
  const [activeTab, setActiveTab] = useState<'worlds' | 'play' | 'journal' | 'profile'>('worlds');

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground">Active tab: {activeTab}</p>
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
