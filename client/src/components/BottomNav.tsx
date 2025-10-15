import { Button } from "@/components/ui/button";
import { Globe, Play, BookOpen, User } from "lucide-react";

/**
 * BottomNav Component
 * 
 * The navigation bar at the bottom of the screen!
 * Makes it easy to switch between different sections.
 * 
 * Sections:
 * - Worlds: Choose a language world to explore
 * - Play: Start playing levels and games
 * - Journal: See your learning progress
 * - Profile: View your character and settings
 */

interface BottomNavProps {
  activeTab: 'worlds' | 'play' | 'journal' | 'profile';
  onTabChange: (tab: 'worlds' | 'play' | 'journal' | 'profile') => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'worlds' as const, icon: Globe, label: 'Worlds' },
    { id: 'play' as const, icon: Play, label: 'Play' },
    { id: 'journal' as const, icon: BookOpen, label: 'Journal' },
    { id: 'profile' as const, icon: User, label: 'Profile' },
  ];

  return (
    <nav className="sticky bottom-0 bg-card border-t" data-testid="nav-bottom">
      <div className="flex justify-around items-center p-2 max-w-6xl mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <Button
              key={tab.id}
              variant="ghost"
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-1 h-auto py-2 ${
                isActive ? 'text-primary' : 'text-muted-foreground'
              }`}
              data-testid={`button-tab-${tab.id}`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-semibold">{tab.label}</span>
            </Button>
          );
        })}
      </div>
    </nav>
  );
}
