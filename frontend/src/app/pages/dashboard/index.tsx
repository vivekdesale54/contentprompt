// frontend/pages/dashboard/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function DashboardIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /dashboard/files
    router.replace('/dashboard/files');
  }, [router]);

  return null;
}
