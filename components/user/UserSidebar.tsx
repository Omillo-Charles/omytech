'use client';

import { FiChevronDown, FiLogOut, FiSettings, FiX } from 'react-icons/fi';
import { navigation, type DashboardView } from './dashboardData';

type UserSidebarProps = {
  activeView: DashboardView;
  open: boolean;
  onClose: () => void;
  onSelect: (view: DashboardView) => void;
};

export default function UserSidebar({ activeView, open, onClose, onSelect }: UserSidebarProps) {
  return (
    <>
      {open && <button aria-label="Close dashboard menu" className="fixed inset-x-0 bottom-0 top-[108px] z-30 bg-[#071a2d]/35 lg:hidden" onClick={onClose} />}
      <aside className={`fixed bottom-0 left-0 top-[108px] z-40 flex w-72 flex-col border-r border-[#dce5ef] bg-white px-5 py-6 transition-transform lg:sticky lg:top-0 lg:z-10 lg:h-[calc(100vh-80px)] lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between lg:hidden">
          <span className="text-sm font-bold">Client workspace</span>
          <button type="button" aria-label="Close dashboard menu" onClick={onClose} className="p-2 text-[#536579] hover:text-[#071a2d]"><FiX className="h-5 w-5" /></button>
        </div>

        <div className="mt-8 border-b border-[#e6eef5] pb-6 lg:mt-0">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center bg-[#e8f6fc] text-lg font-bold text-[#0b78b7]">JD</div>
            <div className="min-w-0"><p className="truncate text-sm font-bold">Jane Doe</p><p className="truncate text-xs text-[#6b7d90]">Client workspace</p></div>
            <FiChevronDown className="ml-auto h-4 w-4 text-[#8a9aaa]" aria-hidden="true" />
          </div>
        </div>

        <nav className="mt-7 grid gap-1" aria-label="Client dashboard navigation">
          <p className="mb-2 px-3 text-xs font-semibold uppercase text-[#9aabba]">Workspace</p>
          {navigation.map(({ label, icon: Icon }) => (
            <button key={label} type="button" onClick={() => onSelect(label)} className={`flex items-center gap-3 px-3 py-3 text-left text-sm font-semibold transition ${activeView === label ? 'bg-[#e8f6fc] text-[#0b78b7]' : 'text-[#536579] hover:bg-[#f5f8fc] hover:text-[#071a2d]'}`}>
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
              {label === 'Referrals' && <span className="ml-auto flex h-5 min-w-5 items-center justify-center bg-[#0b78b7] px-1 text-[11px] font-bold text-white">3</span>}
            </button>
          ))}
        </nav>

        <div className="mt-auto grid gap-1 border-t border-[#e6eef5] pt-5">
          <button type="button" onClick={() => onSelect('Settings')} className={`flex items-center gap-3 px-3 py-3 text-left text-sm font-semibold transition ${activeView === 'Settings' ? 'bg-[#e8f6fc] text-[#0b78b7]' : 'text-[#536579] hover:bg-[#f5f8fc] hover:text-[#071a2d]'}`}><FiSettings className="h-4 w-4" /> Account settings</button>
          <a href="/" className="flex items-center gap-3 px-3 py-3 text-sm font-semibold text-[#536579] hover:bg-[#f5f8fc] hover:text-[#071a2d]"><FiLogOut className="h-4 w-4" /> Leave workspace</a>
        </div>
      </aside>
    </>
  );
}