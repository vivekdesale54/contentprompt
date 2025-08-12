// components/DashboardLayout.tsx
import { ReactNode } from "react";
import Link from "next/link";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-8 text-blue-600">MyApp</h2>
        <nav className="flex flex-col gap-4 text-gray-700">
          <Link href="/dashboard" className="hover:text-blue-500 transition">
            🏠 Overview
          </Link>
          <Link href="/dashboard/tools" className="hover:text-blue-500 transition">
            🛠 Tools
          </Link>
          <Link href="/dashboard/settings" className="hover:text-blue-500 transition">
            ⚙ Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}