"use client";

import { useEffect, useRef, useState } from "react";
import { FiMenu, FiPlus, FiSearch, FiX } from "react-icons/fi";
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
    const [searchOpen, setSearchOpen] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (searchOpen) {
            searchInputRef.current?.focus();
        }
    }, [searchOpen]);

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
            {searchOpen ? (
                <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:ml-6">
                    <div className="flex w-full max-w-sm items-center border border-[#cfe0ee] bg-white px-3 py-2 text-[#071a2d] shadow-sm">
                        <FiSearch className="h-4 w-4 shrink-0 text-[#6b7d90]" aria-hidden="true" />
                        <input
                            ref={searchInputRef}
                            type="search"
                            placeholder="Search admin workspace"
                            aria-label="Search admin workspace"
                            onKeyDown={(event) => event.key === "Escape" && setSearchOpen(false)}
                            className="min-w-0 flex-1 bg-transparent px-2 text-sm outline-none placeholder:text-[#9aabba]"
                        />
                        <button type="button" aria-label="Close search" onClick={() => setSearchOpen(false)} className="p-1 text-[#6b7d90] hover:text-[#071a2d]"><FiX className="h-4 w-4" /></button>
                    </div>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <button type="button" aria-label="Open search" onClick={() => setSearchOpen(true)} className="p-2 text-[#536579] hover:text-[#071a2d]"><FiSearch className="h-5 w-5" /></button>
                    <button type="button" onClick={onNewProject} className="inline-flex items-center gap-2 bg-[#071a2d] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#12385b]"><FiPlus className="h-4 w-4" /><span className="hidden sm:inline">New project</span></button>
                </div>
            )}
        </header>
    );
}
