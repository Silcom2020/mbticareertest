import React from 'react';

interface QuestionProps {
  question: {
    text: string;
    options: string[];
  };
  onAnswer: (answer: number) => void;
}

export default function Question({ question, onAnswer }: QuestionProps) {
  return (
    <div className="animate-fadeIn">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        {question.text}
      </h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-indigo-600 hover:bg-indigo-50 transition-all duration-200"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}