'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/authContext';

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth'); // redirect to login/signup page
    }
  }, [user, loading, router]);

  if (loading) return <p>Loading...</p>;

  return <div>Welcome to dashboard, {user.email}!</div>;
}
