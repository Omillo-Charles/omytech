import { FiMenu, FiPlus, FiSearch } from "react-icons/fi";
import type { AdminView } from "./adminData";

type AdminHeaderProps = {
  activeView: AdminView;
  onOpenMenu: () => void;
  onNewProject: () => void;
};

export default function AdminHeader({
  activeView,
  onOpenMenu,
  onNewProject,
}: AdminHeaderProps) {
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Open admin menu"
          onClick={onOpenMenu}
          className="p-2 text-[#536579] lg:hidden"
        >
          <FiMenu className="h-5 w-5" />
        </button>
        <div>
          <p className="text-sm text-[#6b7d90]">Monday, September 21, 2026</p>
          <h1
            className="mt-1 text-2xl font-black sm:text-3xl"
            style={{
              fontFamily: "var(--font-glacial-indifference), sans-serif",
            }}
          >
            {activeView}
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Search admin workspace"
          className="hidden p-2 text-[#536579] sm:block"
        >
          <FiSearch className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={onNewProject}
          className="inline-flex items-center gap-2 bg-[#071a2d] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#12385b]"
        >
          <FiPlus className="h-4 w-4" />
          <span className="hidden sm:inline">New project</span>
        </button>
      </div>
    </header>
  );
}
