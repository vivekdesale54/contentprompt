'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  // ✅ Initialize client
  const supabase = createClientComponentClient({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  });

  const handleAuth = async () => {
    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
      }
      router.push('/dashboard');
    } catch (error: any) {
      console.error(error);
      alert(error.message || 'Authentication failed');
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-20">
      <h1 className="text-black">{isLogin ? 'Login' : 'Register'}</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-800 mt-2 px-4 py-2 rounded-xl text-gray-600"
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-800 mt-2 px-4 py-2 rounded-xl text-gray-600"
      />
      <br />
      <button
        className="text-black px-4 py-2 border border-gray-500 rounded-2xl hover:bg-gray-200"
        onClick={handleAuth}
      >
        {isLogin ? 'Login' : 'Sign Up'}
      </button>
      <p
        className="mt-4"
        onClick={() => setIsLogin(!isLogin)}
        style={{ cursor: 'pointer', color: 'blue' }}
      >
        {isLogin
          ? "Don't have an account? Sign up"
          : 'Already have an account? Login'}
      </p>
    </div>
  );
}
