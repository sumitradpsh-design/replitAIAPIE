import { useState } from "react";
import { useLocation } from "wouter";
import WorldCard from "@/components/WorldCard";
import LevelCard from "@/components/LevelCard";
import MiniGameCard from "@/components/MiniGameCard";
import BadgeReward from "@/components/BadgeReward";
import ProgressBar from "@/components/ProgressBar";
import CharacterAvatar from "@/components/CharacterAvatar";
import BottomNav from "@/components/BottomNav";
import VocabWordCard from "@/components/VocabWordCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { languageWorlds } from "@shared/languageContent";

/**
 * HomePage Component
 * 
 * This is the main screen of LinguaQuest!
 * It shows different sections based on which tab is active:
 * 
 * 1. Worlds Tab: Choose a language world (Spanish, French, Hindi, Japanese)
 * 2. Play Tab: See levels and mini-games for the selected world
 * 3. Journal Tab: View learning progress and vocabulary learned
 * 4. Profile Tab: See character, badges, and achievements
 */

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'worlds' | 'play' | 'journal' | 'profile'>('worlds');
  const [selectedWorld, setSelectedWorld] = useState<string>('Spanish');
  const [, setLocation] = useLocation();

  const currentWorld = languageWorlds.find(w => w.name === selectedWorld);
  const allVocabulary = currentWorld?.levels.flatMap(level => level.vocabulary) || [];

  // Calculate total stats across all worlds
  const totalStars = 15; // This would come from user progress data
  const totalWordsLearned = allVocabulary.length;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Main Content Area */}
      <div className="flex-1 overflow-auto pb-20">
        
        {/* Worlds Tab - Choose a language */}
        {activeTab === 'worlds' && (
          <div className="p-6 max-w-6xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-display font-bold mb-2" data-testid="text-title-worlds">
                Choose Your Adventure
              </h1>
              <p className="text-muted-foreground" data-testid="text-subtitle-worlds">
                Pick a language world to explore!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {languageWorlds.map((world) => (
                <WorldCard
                  key={world.name}
                  name={world.name}
                  flag={world.flag}
                  color={world.color}
                  isLocked={false}
                  onClick={() => {
                    setSelectedWorld(world.name);
                    setActiveTab('play');
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Play Tab - Levels and Games */}
        {activeTab === 'play' && currentWorld && (
          <div className="p-6 max-w-6xl mx-auto">
            {/* World Header */}
            <div className="mb-8 text-center">
              <div className="text-5xl mb-3">{currentWorld.flag}</div>
              <h1 className="text-4xl font-display font-bold mb-2" data-testid="text-title-play">
                {selectedWorld} World
              </h1>
              <p className="text-muted-foreground" data-testid="text-subtitle-play">
                Complete levels and play mini-games!
              </p>
            </div>

            {/* Levels Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-display font-bold mb-4" data-testid="text-levels-heading">
                Levels
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {currentWorld.levels.map((level) => (
                  <LevelCard
                    key={level.levelNumber}
                    levelNumber={level.levelNumber}
                    stars={0}
                    isLocked={false}
                    onClick={() => setLocation(`/quiz/${selectedWorld}/${level.levelNumber}`)}
                  />
                ))}
              </div>
            </div>

            {/* Study Materials & Scores */}
            <div className="mb-8">
              <h2 className="text-2xl font-display font-bold mb-4" data-testid="text-resources-heading">
                Learning Resources
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <Card
                  className="rounded-3xl p-6 cursor-pointer hover-elevate active-elevate-2 transition-all hover:scale-105"
                  onClick={() => setLocation(`/study/${selectedWorld}`)}
                  data-testid="card-study-materials"
                >
                  <div className="text-4xl mb-3 text-center">📚</div>
                  <h3 className="text-xl font-display font-bold text-center">Study Guide</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">Learn before you play!</p>
                </Card>
                <Card
                  className="rounded-3xl p-6 cursor-pointer hover-elevate active-elevate-2 transition-all hover:scale-105"
                  onClick={() => setLocation(`/scores/${selectedWorld}`)}
                  data-testid="card-view-scores"
                >
                  <div className="text-4xl mb-3 text-center">🏆</div>
                  <h3 className="text-xl font-display font-bold text-center">View Scores</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">See your progress!</p>
                </Card>
              </div>
            </div>

            {/* Mini-Games Section */}
            <div>
              <h2 className="text-2xl font-display font-bold mb-4" data-testid="text-games-heading">
                Mini-Games
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <MiniGameCard
                  type="match"
                  title="Word Match"
                  color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  onClick={() => console.log('Match game')}
                />
                <MiniGameCard
                  type="build"
                  title="Build a Sentence"
                  color="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                  onClick={() => console.log('Build game')}
                />
                <MiniGameCard
                  type="speak"
                  title="Speak It!"
                  color="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
                  onClick={() => console.log('Speak game')}
                />
              </div>
            </div>
          </div>
        )}

        {/* Journal Tab - Progress Tracker */}
        {activeTab === 'journal' && (
          <div className="p-6 max-w-6xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-display font-bold mb-2" data-testid="text-title-journal">
                Language Journal
              </h1>
              <p className="text-muted-foreground" data-testid="text-subtitle-journal">
                Track your amazing progress!
              </p>
            </div>

            {/* Progress Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="rounded-3xl p-6">
                <h3 className="text-lg font-semibold mb-2" data-testid="text-stat-stars">Total Stars</h3>
                <p className="text-4xl font-display font-bold text-primary">{totalStars}</p>
              </Card>
              <Card className="rounded-3xl p-6">
                <h3 className="text-lg font-semibold mb-2" data-testid="text-stat-words">Words Learned</h3>
                <p className="text-4xl font-display font-bold text-primary">{totalWordsLearned}</p>
              </Card>
            </div>

            {/* Language Progress */}
            <div className="mb-8">
              <h2 className="text-2xl font-display font-bold mb-4" data-testid="text-progress-heading">
                Language Progress
              </h2>
              <div className="space-y-4">
                {languageWorlds.map((world, index) => (
                  <ProgressBar
                    key={world.name}
                    progress={[75, 50, 30, 20][index]}
                    color={world.color.match(/\#[A-F0-9]{6}/)?.[0] || '#4ECDC4'}
                    label={world.name}
                  />
                ))}
              </div>
            </div>

            {/* Vocabulary List */}
            <div>
              <h2 className="text-2xl font-display font-bold mb-4" data-testid="text-vocab-heading">
                Vocabulary Learned
              </h2>
              <div className="space-y-3">
                {allVocabulary.slice(0, 8).map((vocab) => (
                  <VocabWordCard
                    key={vocab.word}
                    word={vocab.word}
                    translation={vocab.translation}
                    emoji={vocab.emoji}
                    onSpeak={() => console.log(`Speaking: ${vocab.word}`)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Profile Tab - Character and Badges */}
        {activeTab === 'profile' && (
          <div className="p-6 max-w-6xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-display font-bold mb-2" data-testid="text-title-profile">
                My Profile
              </h1>
              <p className="text-muted-foreground" data-testid="text-subtitle-profile">
                Your learning companion and achievements
              </p>
            </div>

            {/* Character Section */}
            <Card className="rounded-3xl p-8 mb-8">
              <div className="flex flex-col items-center">
                <CharacterAvatar
                  character="🦉"
                  size="large"
                  borderColor="#4ECDC4"
                  accessory="🎓"
                />
                <h2 className="text-2xl font-display font-bold mt-4" data-testid="text-character-name">
                  Wise Owl
                </h2>
                <p className="text-muted-foreground" data-testid="text-character-level">
                  Level 5 Language Explorer
                </p>
              </div>
            </Card>

            {/* Badges Section */}
            <div>
              <h2 className="text-2xl font-display font-bold mb-4" data-testid="text-badges-heading">
                Achievements
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                <BadgeReward name="First Steps" icon="star" color="#FFD700" isUnlocked={true} />
                <BadgeReward name="Word Master" icon="trophy" color="#FF6B6B" isUnlocked={true} />
                <BadgeReward name="Quick Learner" icon="target" color="#4ECDC4" isUnlocked={true} />
                <BadgeReward name="Perfect Score" icon="award" color="#A78BFA" isUnlocked={false} />
                <BadgeReward name="Polyglot" icon="star" color="#FF9A56" isUnlocked={false} />
                <BadgeReward name="Champion" icon="trophy" color="#FF6F91" isUnlocked={false} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
