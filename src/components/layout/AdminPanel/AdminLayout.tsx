import React from "react";
import AdminSidebar from "./AdminSidebar";

interface AdminLayoutProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  children: React.ReactNode;
}

export default function AdminLayout({
  activeTab,
  setActiveTab,
  children,
}: AdminLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50 font-geologica">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
}
