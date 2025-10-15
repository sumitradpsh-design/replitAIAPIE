import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import QuizPage from "@/pages/QuizPage";
import StudyPage from "@/pages/StudyPage";
import ScorePage from "@/pages/ScorePage";

/**
 * App Component - The Root of LinguaQuest!
 * 
 * This is where the entire app starts. It:
 * 1. Sets up React Query for data management
 * 2. Provides tooltips for helpful hints
 * 3. Shows toast notifications for feedback
 * 4. Routes to different pages
 * 
 * How routing works:
 * - "/" (home) shows the main game interface
 * - "/quiz/:world/:level" shows the quiz for a specific level
 * - "/study/:world" shows study materials for a language
 * - "/scores/:world" shows score breakdown for a language
 */

function Router() {
  return (
    <Switch>
      {/* Main game page */}
      <Route path="/" component={HomePage} />
      
      {/* Quiz page for answering questions */}
      <Route path="/quiz/:world/:level" component={QuizPage} />
      
      {/* Study materials page */}
      <Route path="/study/:world" component={StudyPage} />
      
      {/* Scores page */}
      <Route path="/scores/:world" component={ScorePage} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
