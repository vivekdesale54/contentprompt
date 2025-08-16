'use client';
import { supabase } from '../supabase-client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth');
  };

  return (
    <div className="flex bg-gray-100 text-black">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-4 text-2xl font-bold border-b">BrandName</div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="block p-2 rounded hover:bg-gray-200">
            🏠 Dashboard
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">
            🛠 Tools
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">
            📂 Saved Data
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">
            ⚙ Settings
          </a>
          <a href="#" className="block p-2 rounded hover:bg-gray-200">
            ❓ Help
          </a>
        </nav>
        <div className="p-4 border-t text-sm text-gray-500">
          <a href="#" className="block">
            Terms
          </a>
          <a href="#" className="block">
            Privacy Policy
          </a>
          <a href="#" className="block">
            Contact
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded px-3 py-1"
            />
          </div>
          <div className="flex items-center gap-4">
            <button>🔔</button>
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <span>Profile</span>
              <button
                className="border border-gray-400 text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 px-4 py-2 rounded-2xl"
                onClick={handleLogout}
              >
                Sign Out
              </button>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="p-6 space-y-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-sm text-gray-500">Credits Left</h2>
              <p className="text-2xl font-bold">120</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-sm text-gray-500">Usage This Month</h2>
              <p className="text-2xl font-bold">45 tasks</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-sm text-gray-500">Active Projects</h2>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>

          {/* Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
              <ul className="space-y-2">
                <li>Generate Content - 5 mins ago</li>
                <li>Updated settings - 1 hour ago</li>
                <li>New project created - 2 days ago</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
              <button
                onClick={() => router.push('/')}
                className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-600 hover:to-violet-600 text-white py-2 rounded mb-2"
              >
                Create Content
              </button>
              <button className=" border border-gray-600 hover:bg-gray-200 w-full bg-transparent py-2 rounded">
                Start New Task
              </button>
            </div>
          </div>

          {/* Graph & Shortcuts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 bg-white p-4 rounded shadow h-64 flex items-center justify-center">
              Graph Placeholder
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-bold mb-4">Shortcuts</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#">Blog Generator</a>
                </li>
                <li>
                  <a href="#">Image Creator</a>
                </li>
                <li>
                  <a href="#">Social Media Post</a>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
