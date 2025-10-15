import { useRoute } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GameHeader from "@/components/GameHeader";
import { Trophy, Star, Target } from "lucide-react";

/**
 * ScorePage Component
 * 
 * Shows detailed scores and marks for each level completed!
 * 
 * Displays:
 * - Total score across all levels
 * - Individual level scores
 * - Performance metrics
 * - Achievements earned
 */

//todo: remove mock functionality - These would come from user progress data
const mockScores = {
  Spanish: [
    { level: 1, score: 100, totalQuestions: 3, correct: 3, stars: 3 },
    { level: 2, score: 75, totalQuestions: 4, correct: 3, stars: 2 },
    { level: 3, score: 80, totalQuestions: 5, correct: 4, stars: 2 },
  ],
  French: [
    { level: 1, score: 100, totalQuestions: 3, correct: 3, stars: 3 },
    { level: 2, score: 50, totalQuestions: 4, correct: 2, stars: 1 },
  ],
  Hindi: [
    { level: 1, score: 66, totalQuestions: 3, correct: 2, stars: 2 },
  ],
  Japanese: [
    { level: 1, score: 100, totalQuestions: 3, correct: 3, stars: 3 },
  ],
  German: [],
  Italian: [],
};

export default function ScorePage() {
  const [, params] = useRoute("/scores/:world");
  const worldName = params?.world || 'Spanish';
  
  const levelScores = mockScores[worldName as keyof typeof mockScores] || [];
  const totalScore = levelScores.reduce((sum, level) => sum + level.score, 0);
  const averageScore = levelScores.length > 0 ? Math.round(totalScore / levelScores.length) : 0;
  const totalStars = levelScores.reduce((sum, level) => sum + level.stars, 0);

  return (
    <div className="min-h-screen bg-background">
      <GameHeader
        title={`${worldName} Scores`}
        stars={totalStars}
        onBack={() => window.history.back()}
      />

      <div className="p-6 max-w-4xl mx-auto">
        {/* Overall Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Card className="rounded-3xl p-6 text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
            <div className="text-3xl font-display font-bold text-primary">{averageScore}%</div>
            <div className="text-sm text-muted-foreground">Average Score</div>
          </Card>
          <Card className="rounded-3xl p-6 text-center">
            <Star className="w-8 h-8 mx-auto mb-2 fill-yellow-400 text-yellow-400" />
            <div className="text-3xl font-display font-bold text-primary">{totalStars}</div>
            <div className="text-sm text-muted-foreground">Total Stars</div>
          </Card>
          <Card className="rounded-3xl p-6 text-center">
            <Target className="w-8 h-8 mx-auto mb-2 text-green-500" />
            <div className="text-3xl font-display font-bold text-primary">{levelScores.length}</div>
            <div className="text-sm text-muted-foreground">Levels Done</div>
          </Card>
        </div>

        {/* Level Breakdown */}
        <div>
          <h2 className="text-2xl font-display font-bold mb-4">Level Performance</h2>
          {levelScores.length > 0 ? (
            <div className="space-y-4">
              {levelScores.map((level) => (
                <Card key={level.level} className="rounded-3xl p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold mb-2">
                        Level {level.level}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Questions: {level.correct}/{level.totalQuestions}</span>
                        <span>•</span>
                        <span>Score: {level.score}%</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex gap-1">
                        {[1, 2, 3].map((star) => (
                          <Star
                            key={star}
                            className={`w-6 h-6 ${
                              star <= level.stars
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-muted'
                            }`}
                          />
                        ))}
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        level.score === 100
                          ? 'bg-green-100 text-green-700'
                          : level.score >= 70
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {level.score === 100 ? 'Perfect!' : level.score >= 70 ? 'Great!' : 'Good Try!'}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="rounded-3xl p-8 text-center">
              <p className="text-muted-foreground">No levels completed yet. Start learning!</p>
            </Card>
          )}
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Button
            onClick={() => window.history.back()}
            className="w-full h-14 text-lg font-bold"
          >
            Back to Levels
          </Button>
        </div>
      </div>
    </div>
  );
}
