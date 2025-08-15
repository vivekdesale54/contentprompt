'use client'

import { useState } from 'react'
import { supabase } from '../supabase-client';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        'Signup successful! Please check your email for confirmation link.'
      );
    }
  }

  return (
    <form
      onSubmit={handleSignUp}
      className="flex flex-col gap-4 items-center text-center"
    >
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border border-gray-200 mt-2 px-4 py-2 rounded-xl"
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border border-gray-200 mt-2 px-4 py-2 rounded-xl"
      />
      <button
        type="submit"
        className="border border-black hover:bg-gray-200 px-4 py-2 rounded-2xl"
      >
        Sign Up
      </button>
      <p>{message}</p>
    </form>
  );
}
