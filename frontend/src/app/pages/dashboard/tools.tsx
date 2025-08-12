// pages/dashboard/tools.tsx
import DashboardLayout from "../../components/DashboardLayout";
import ToolCard from "../../components/ToolCard";

export default function ToolsPage() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Your Tools</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ToolCard title="AI Lead Follow-Up" description="Automated replies for leads" />
        <ToolCard title="Property Description Generator" description="AI-powered real estate descriptions" />
        <ToolCard title="FAQ Chatbot" description="Answers buyer questions instantly" />
      </div>
    </DashboardLayout>
  );
}
