// pages/signin.tsx
import { supabase } from '../lib/supabaseClient';

export default function SignIn() {
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      console.error('Error signing in with Google:', error.message);
    } else {
      console.log('Redirecting to Google...', data);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button
        onClick={signInWithGoogle}
        className="px-6 py-2 bg-blue-600 text-white rounded-md"
      >
        Sign in with Google
      </button>
    </div>
  );
}
