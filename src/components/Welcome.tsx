import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

export default function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        あなたの性格タイプを発見しましょう
      </h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        このテストでは20の質問を通じて、あなたの性格タイプを診断します。
        各質問に対して、最も自分に当てはまる回答を選んでください。
        所要時間は約5-10分です。
      </p>
      <button
        onClick={onStart}
        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        テストを始める
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}