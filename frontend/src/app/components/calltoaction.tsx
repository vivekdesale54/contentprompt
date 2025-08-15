import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '../supabase-client';
import { GoogleGenAI } from '@google/genai';
import { error } from 'console';

('use Client');

const CallToAction = () => {
  const [user, setUser] = useState<any>(null);
  // Check if user is logged in

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI || 'no_api_key',
  });
  return (
    <section className="bg-[#fdfdff] text-center py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Ready to Transform Your Content?
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Join thousands of creators who are already repurposing their content
          with AI
        </p>

        {/* Login / Dashboard Button */}
        <div className="mt-6">
          {!user ? (
            <Link href="/auth">
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium rounded-xl hover:from-indigo-600 hover:to-violet-600 transition-all disabled={loading}">
                Get Started for Free ✨
              </button>
            </Link>
          ) : (
            <Link href="/dashboard">
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg">
                Go to Dashboard
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
