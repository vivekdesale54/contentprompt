'use client';

import ProtectedPage from '../ProtectedPage';
import { useAuth } from '../context/authContext';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <ProtectedPage>
      <h1>Welcome, {user?.email}!</h1>
    </ProtectedPage>
  );
}
