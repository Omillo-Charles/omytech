import { FiMenu, FiPlus, FiSearch } from 'react-icons/fi';
import type { DashboardView } from './dashboardData';

type DashboardHeaderProps = { activeView: DashboardView; onOpenMenu: () => void };

export default function DashboardHeader({ activeView, onOpenMenu }: DashboardHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <button type="button" aria-label="Open dashboard menu" onClick={onOpenMenu} className="p-2 text-[#536579] hover:text-[#071a2d] lg:hidden"><FiMenu className="h-5 w-5" /></button>
        <div><p className="text-sm text-[#6b7d90]">Monday, September 21, 2026</p><h1 className="mt-1 text-2xl font-black sm:text-3xl" style={{ fontFamily: 'var(--font-glacial-indifference), sans-serif' }}>{activeView}</h1></div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <button type="button" aria-label="Search workspace" className="hidden p-2 text-[#536579] hover:text-[#071a2d] sm:block"><FiSearch className="h-5 w-5" /></button>
        <a href="/quote" className="hidden items-center gap-2 bg-[#071a2d] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#12385b] sm:inline-flex"><FiPlus className="h-4 w-4" /> New request</a>
      </div>
    </header>
  );
}