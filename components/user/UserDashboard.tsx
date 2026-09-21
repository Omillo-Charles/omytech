'use client';

import { useState } from 'react';
import DashboardHeader from './DashboardHeader';
import OverviewContent from './OverviewContent';
import PlaceholderView from './PlaceholderView';
import type { DashboardView } from './dashboardData';
import UserSidebar from './UserSidebar';
import UserSettings from './UserSettings';

export default function UserDashboard() {
  const [activeView, setActiveView] = useState<DashboardView>('Overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const selectView = (view: DashboardView) => {
    setActiveView(view);
    setSidebarOpen(false);
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#f5f8fc] text-[#071a2d]">
      <div className="mx-auto flex max-w-[1600px]">
        <UserSidebar activeView={activeView} open={sidebarOpen} onClose={() => setSidebarOpen(false)} onSelect={selectView} />

        <section className="min-w-0 flex-1 px-4 py-5 sm:px-6 sm:py-8 lg:px-10">
          <DashboardHeader activeView={activeView} onOpenMenu={() => setSidebarOpen(true)} />
          {activeView === 'Overview' ? <OverviewContent /> : activeView === 'Settings' ? <UserSettings /> : <PlaceholderView view={activeView} onOverview={() => selectView('Overview')} />}
        </section>
      </div>
    </main>
  );
}