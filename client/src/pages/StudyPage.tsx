import { useRoute } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import GameHeader from "@/components/GameHeader";
import { getStudyMaterial } from "@shared/studyMaterials";
import { Book } from "lucide-react";

/**
 * StudyPage Component
 * 
 * This page shows helpful study materials for learning a language!
 * It includes:
 * - Basic greetings and phrases
 * - Numbers
 * - Grammar tips
 * - Cultural notes
 * 
 * Kids can study these before taking quizzes!
 */

export default function StudyPage() {
  const [, params] = useRoute("/study/:world");
  const worldName = params?.world || 'Spanish';
  
  const studyMaterial = getStudyMaterial(worldName);

  if (!studyMaterial) {
    return <div className="p-6">Study materials not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <GameHeader
        title={`${worldName} Study Guide`}
        stars={0}
        onBack={() => window.history.back()}
      />

      <div className="p-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <Book className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h1 className="text-3xl font-display font-bold mb-2" data-testid="text-study-title">
            Learn {worldName}!
          </h1>
          <p className="text-muted-foreground" data-testid="text-study-subtitle">
            Study these materials before taking the quiz
          </p>
        </div>

        {/* Study sections */}
        <div className="space-y-6">
          {studyMaterial.sections.map((section, index) => (
            <Card key={index} className="rounded-3xl p-6" data-testid={`card-section-${index}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{section.emoji}</span>
                <h2 className="text-2xl font-display font-bold" data-testid={`text-section-title-${index}`}>
                  {section.title}
                </h2>
              </div>
              <div className="whitespace-pre-line text-lg leading-relaxed" data-testid={`text-section-content-${index}`}>
                {section.content}
              </div>
            </Card>
          ))}
        </div>

        {/* Start Quiz Button */}
        <div className="mt-8">
          <Button
            onClick={() => window.history.back()}
            className="w-full h-14 text-lg font-bold"
            data-testid="button-back-to-levels"
          >
            Back to Levels
          </Button>
        </div>
      </div>
    </div>
  );
}
