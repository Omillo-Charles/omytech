import { FiCheckCircle, FiChevronRight } from "react-icons/fi";
import type { AdminView } from "./adminData";

export default function AdminSection({
    view,
    onOverview,
}: {
    view: AdminView;
    onOverview: () => void;
}) {
    return (
        <section className="mt-8 flex min-h-[480px] items-center justify-center border border-[#dce5ef] bg-white p-8 text-center">
            <div className="max-w-md">
                <div className="mx-auto flex h-16 w-16 items-center justify-center bg-[#e8f6fc] text-[#0b78b7]">
                    <FiCheckCircle className="h-7 w-7" />
                </div>
                <h2
                    className="mt-6 text-2xl font-black"
                    style={{ fontFamily: "var(--font-glacial-indifference), sans-serif" }}
                >
                    {view} management
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#536579]">
                    Manage {view.toLowerCase()} from this operational workspace. Detailed
                    workflows are ready to be connected to your data layer.
                </p>
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
