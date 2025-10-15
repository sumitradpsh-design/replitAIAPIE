import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GameHeader from "@/components/GameHeader";
import CompletionModal from "@/components/CompletionModal";
import { getLevel } from "@shared/languageContent";
import type { Question } from "@shared/languageContent";

/**
 * QuizPage Component
 * 
 * This is where kids answer questions to complete a level!
 * 
 * How it works:
 * 1. Shows one question at a time
 * 2. Kid selects an answer
 * 3. Gets immediate feedback (correct/incorrect)
 * 4. Moves to next question
 * 5. At the end, shows stars earned based on correct answers
 */

export default function QuizPage() {
  const [, params] = useRoute("/quiz/:world/:level");
  const [, setLocation] = useLocation();
  const worldName = params?.world || 'Spanish';
  const levelNum = parseInt(params?.level || '1');
  
  const levelData = getLevel(worldName, levelNum);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [answerFeedback, setAnswerFeedback] = useState<'correct' | 'incorrect' | null>(null);

  if (!levelData) {
    return <div className="p-6">Level not found</div>;
  }

  const currentQuestion = levelData.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === levelData.questions.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    setAnswerFeedback(isCorrect ? 'correct' : 'incorrect');
    setShowResult(true);

    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const handleTryAgain = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswerFeedback(null);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setShowCompletion(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setAnswerFeedback(null);
    }
  };

  const calculateStars = () => {
    const percentage = (correctAnswers / levelData.questions.length) * 100;
    if (percentage === 100) return 3;
    if (percentage >= 66) return 2;
    if (percentage >= 33) return 1;
    return 0;
  };

  const hasNextLevel = levelNum < 3;
  
  const handleNextLevel = () => {
    setLocation(`/quiz/${worldName}/${levelNum + 1}`);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setCorrectAnswers(0);
    setShowResult(false);
    setShowCompletion(false);
    setAnswerFeedback(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <GameHeader
        title={`${worldName} - Level ${levelNum}`}
        stars={correctAnswers}
        onBack={() => window.history.back()}
      />

      <div className="p-6 max-w-4xl mx-auto">
        {/* Progress indicator */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Question {currentQuestionIndex + 1} of {levelData.questions.length}</span>
            <span>{correctAnswers} correct</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / levelData.questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="rounded-3xl p-8 mb-6">
          {/* Question type badge */}
          <div className="mb-4">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {currentQuestion.type === 'vocab' && 'Vocabulary'}
              {currentQuestion.type === 'sentence' && 'Sentence Building'}
              {currentQuestion.type === 'pronunciation' && 'Pronunciation'}
            </span>
          </div>

          {/* Emoji visual */}
          {currentQuestion.emoji && (
            <div className="text-6xl text-center mb-6">{currentQuestion.emoji}</div>
          )}

          {/* Question text */}
          <h2 className="text-2xl font-display font-bold text-center mb-8" data-testid="text-question">
            {currentQuestion.question}
          </h2>

          {/* Answer options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                onClick={() => !showResult && handleAnswerSelect(index)}
                disabled={showResult}
                className={`h-auto py-4 text-lg font-semibold transition-all ${
                  showResult && index === currentQuestion.correctAnswer
                    ? 'bg-green-100 border-green-400 text-green-700'
                    : showResult && index === selectedAnswer && index !== currentQuestion.correctAnswer
                    ? 'bg-red-100 border-red-400 text-red-700 animate-shake'
                    : selectedAnswer === index
                    ? 'bg-primary text-primary-foreground'
                    : ''
                }`}
                data-testid={`button-option-${index}`}
              >
                {option}
              </Button>
            ))}
          </div>

          {/* Feedback message */}
          {showResult && (
            <div className={`mt-6 p-4 rounded-2xl text-center font-semibold ${
              answerFeedback === 'correct'
                ? 'bg-green-100 text-green-700'
                : 'bg-orange-100 text-orange-700'
            }`}>
              {answerFeedback === 'correct' ? '🎉 Correct! Great job!' : '💪 Not quite right! Try again?'}
            </div>
          )}
        </Card>

        {/* Action buttons */}
        {showResult && (
          <div className="flex gap-3">
            {answerFeedback === 'incorrect' && (
              <Button
                onClick={handleTryAgain}
                variant="outline"
                className="flex-1 h-14 text-lg font-bold"
                data-testid="button-try-again"
              >
                Try Again
              </Button>
            )}
            <Button
              onClick={handleNext}
              className={`h-14 text-lg font-bold ${answerFeedback === 'incorrect' ? 'flex-1' : 'w-full'}`}
              data-testid="button-next"
            >
              {isLastQuestion ? 'See Results' : 'Next Question'}
            </Button>
          </div>
        )}
      </div>

      {/* Completion Modal */}
      <CompletionModal
        isOpen={showCompletion}
        stars={calculateStars()}
        hasNextLevel={hasNextLevel}
        onNextLevel={handleNextLevel}
        onContinue={() => window.history.back()}
        onReplay={() => {
          setCurrentQuestionIndex(0);
          setSelectedAnswer(null);
          setCorrectAnswers(0);
          setShowResult(false);
          setShowCompletion(false);
          setAnswerFeedback(null);
        }}
      />
    </div>
  );
}
