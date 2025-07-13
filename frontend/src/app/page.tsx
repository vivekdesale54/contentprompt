'use client';
import TransformedContent from './components/card';
import CallToAction from './components/calltoaction';
import Footer from './components/footer';
import { useEffect, useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import TransformedContentSocial from './components/Transformcontent'
import { examplePrompt } from './lib/examples';


export default function HeroSection() {
  const [inputPrompt, setInputPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const [generatedContent, setGeneratedContent] = useState({
  linkedin: '',
  instagram: '',
  twitter: '',
});
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_GEMINI || 'no_api_key',
  });

  async function generateContent(prompt: string) {
  setLoading(true);
  try {
    const fullPrompt = examplePrompt.replace('{{USER_INPUT}}', prompt);

    const result = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: [
        {
          role: 'user',
          parts: [
            { text: fullPrompt }
          ]
        }
      ]
    });

    console.log("Full Gemini response:", result);

    const textOutput = result.candidates?.[0]?.content?.parts
      ?.map((p) => (typeof p === 'object' && 'text' in p ? p.text : ''))
      .join('\n');

    console.log("Extracted rawText:", textOutput);

    if (!textOutput) throw new Error("No text found in Gemini response.");

    const jsonMatch = textOutput.match(/{[\s\S]+}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      setGeneratedContent(parsed); 
    } else {
      console.warn('No valid JSON found in Gemini output.');
    }

  } catch (error) {
    console.error('Error generating content:', error);
  }

  setLoading(false);
}
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-[#f5faff] px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight max-w-3xl mt-[10vh]">
        What content would you like <br className="sm:hidden" />
        to{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#8b5cf6]">
          repurpose
        </span>
        <span className="text-gray-900">?</span>
      </h1>

      <p className="text-lg sm:text-xl text-gray-500 mt-6 max-w-xl">
        Transform your content into engaging posts for LinkedIn, Instagram, and
        Twitter with AI-powered optimization.
      </p>

      <div className="flex mt-8 w-full max-w-xl">
        <input
          onChange={(e) => {
            setInputPrompt(e.target.value);
          }}
          type="text"
          placeholder="Paste your blog post, article, or any content here..."
          className="flex-grow px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-l-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={() => {
           generateContent(inputPrompt);
          }}
          className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium rounded-r-xl hover:from-indigo-600 hover:to-violet-600 transition-all disabled={loading}"
        >
          Repurpose Content →
        </button>
      </div>
      <div className='text-black'>
        <TransformedContentSocial content={generatedContent} />
      </div>
      <div>
        <TransformedContent />
      </div>
      <div>
        <CallToAction />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}