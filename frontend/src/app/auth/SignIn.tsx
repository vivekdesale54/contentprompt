// auth/SignIn.tsx
'use client';

import { useState } from 'react';
import { supabase } from '../supabase-client';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setMessage(error.message);
    else setMessage('Login successful!');
  }

  return (
    <div className="bg-white min-h-screen flex itmes-center justify-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 items-center text-center"
      >
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-2 border border-gray-200 px-4 py-2 rounded-xl"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-2 border border-gray-200 px-4 py-2 rounded-xl"
        />
        <button
          type="submit"
          className=" border border-black-200 hover:bg-gray-200 px-4 py-2 rounded-2xl"
        >
          Sign In
        </button>
        <p>{message}</p>
      </form>
    </div>
  );
}
