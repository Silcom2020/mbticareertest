import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Question from './components/Question';
import TestProgress from './components/TestProgress';
import Result from './components/Result';
import { questions } from './data/questions';
import { personalities } from './data/personalities';
import { calculateMBTI } from './utils/mbtiCalculator';

type Step = 'welcome' | 'test' | 'result';

export default function App() {
  const [step, setStep] = useState<Step>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<keyof typeof personalities | null>(null);

  const handleStart = () => {
    setStep('test');
  };

  const handleAnswer = (answer: number) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const type = calculateMBTI(newAnswers);
      setResult(type as keyof typeof personalities);
      setStep('result');
    }
  };

  const handleReset = () => {
    setStep('welcome');
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {step === 'welcome' && <Welcome onStart={handleStart} />}
          
          {step === 'test' && (
            <>
              <TestProgress current={currentQuestion + 1} total={questions.length} />
              <Question
                question={questions[currentQuestion]}
                onAnswer={handleAnswer}
              />
            </>
          )}
          
          {step === 'result' && result && (
            <Result
              type={result}
              personality={personalities[result]}
              onReset={handleReset}
            />
          )}
        </div>
      </div>
    </div>
  );
}