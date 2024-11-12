import React from 'react';
import { RefreshCcw } from 'lucide-react';

interface ResultProps {
  type: string;
  personality: {
    title: string;
    traits: string[];
    summary: string;
  };
  onReset: () => void;
}

export default function Result({ type, personality, onReset }: ResultProps) {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-indigo-600 mb-4">{type}</h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {personality.title}
        </h3>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">特徴:</h4>
        <ul className="space-y-2">
          {personality.traits.map((trait, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-2 h-2 mt-2 mr-2 bg-indigo-600 rounded-full" />
              {trait}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">まとめ:</h4>
        <p className="text-gray-600 leading-relaxed">
          {personality.summary}
        </p>
      </div>

      <div className="text-center">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <RefreshCcw className="w-4 h-4" />
          もう一度診断する
        </button>
      </div>
    </div>
  );
}