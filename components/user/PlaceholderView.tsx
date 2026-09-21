import type { IconType } from "react-icons";
import {
    FiBriefcase,
    FiChevronRight,
    FiCreditCard,
    FiFileText,
    FiFolder,
    FiGrid,
    FiSettings,
    FiShare2,
} from "react-icons/fi";
import type { DashboardView } from "./dashboardData";

const content: Record<
    DashboardView,
    { icon: IconType; title: string; detail: string }
> = {
    Overview: {
        icon: FiGrid,
        title: "Your workspace overview.",
        detail:
            "Review your projects, requests, payments, files, and referrals from one place.",
    },
    Projects: {
        icon: FiBriefcase,
        title: "Your projects, in one place.",
        detail:
            "Project milestones, tasks, approvals, timelines, and team updates will live here.",
    },
    Quotes: {
        icon: FiFileText,
        title: "Review your quote requests.",
        detail:
            "Track new project enquiries, approve proposals, and keep requested services organised.",
    },
    Invoices: {
        icon: FiCreditCard,
        title: "Stay on top of payments.",
        detail:
            "View invoices, payment status, receipts, and upcoming payment dates.",
    },
    Files: {
        icon: FiFolder,
        title: "Your shared files.",
        detail:
            "Access project briefs, design files, deliverables, and documents shared by your team.",
    },
    Referrals: {
        icon: FiShare2,
        title: "Your referrals, in one place.",
        detail:
            "Share OMYTECH with people who need digital support and keep track of the referrals connected to your account.",
    },
    Settings: {
        icon: FiSettings,
        title: "Manage your account settings.",
        detail:
            "Update your profile, communication preferences, and security details.",
    },
};

export default function PlaceholderView({
    view,
    onOverview,
}: {
    view: DashboardView;
    onOverview: () => void;
}) {
    const { icon: Icon, title, detail } = content[view];
    return (
        <section className="mt-8 flex min-h-[480px] items-center justify-center border border-[#dce5ef] bg-white p-8 text-center">
            <div className="max-w-md">
                <div className="mx-auto flex h-16 w-16 items-center justify-center bg-[#e8f6fc] text-[#0b78b7]">
                    <Icon className="h-7 w-7" />
                </div>
                <h2
                    className="mt-6 text-2xl font-black"
                    style={{ fontFamily: "var(--font-glacial-indifference), sans-serif" }}
                >
                    {title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#536579]">{detail}</p>
                <button
                    type="button"
                    onClick={onOverview}
                    className="mt-7 inline-flex items-center gap-2 bg-[#071a2d] px-5 py-3 text-sm font-semibold text-white hover:bg-[#12385b]"
                >
                    Back to overview <FiChevronRight className="h-4 w-4" />
                </button>
            </div>
        </section>
    );
}
