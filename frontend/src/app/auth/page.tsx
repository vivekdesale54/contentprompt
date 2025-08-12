'use client'

import { supabase } from '../lib/supabaseClient'

export default function AuthPage() {
  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/dashboard` }
    })
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
      <button onClick={signInWithGoogle} style={{ padding: '1rem 2rem', fontSize: '1.2rem' }}>
        Sign in with Google
      </button>
    </div>
  )
}
