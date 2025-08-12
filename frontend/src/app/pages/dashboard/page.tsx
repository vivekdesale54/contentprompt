import { supabase } from '../../lib/supabaseClient'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/auth')
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to your dashboard</h1>
      <p>User: {session.user.email}</p>
    </div>
  )
}
