"use client";

import { useState } from "react";
import AdminHeader from "./AdminHeader";
import AdminOverview from "./AdminOverview";
import AdminPayments from "./AdminPayments";
import AdminSection from "./AdminSection";
import AdminSidebar from "./AdminSidebar";
import AdminSettings from "./AdminSettings";
import type { AdminView } from "./adminData";

export default function AdminDashboard() {
    const [activeView, setActiveView] = useState<AdminView>("Overview");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const selectView = (view: AdminView) => {
        setActiveView(view);
        setSidebarOpen(false);
    };

    return (
        <main className="min-h-[calc(100vh-80px)] bg-[#f5f8fc] text-[#071a2d]">
            <div className="mx-auto flex max-w-[1600px]">
                <AdminSidebar
                    activeView={activeView}
                    open={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                    onSelect={selectView}
                />
                <section className="min-w-0 flex-1 px-4 py-5 sm:px-6 sm:py-8 lg:px-10">
                    <AdminHeader
                        activeView={activeView}
                        onOpenMenu={() => setSidebarOpen(true)}
                        onNewProject={() => selectView("Projects")}
                    />
                    {activeView === "Overview" ? (
                        <AdminOverview onView={selectView} />
                    ) : activeView === "Settings" ? (
                        <AdminSettings />
                    ) : activeView === "Payments" ? (
                        <AdminPayments />
                    ) : (
                        <AdminSection
                            view={activeView}
                            onOverview={() => selectView("Overview")}
                        />
                    )}
                </section>
            </div>
        </main>
    );
}
