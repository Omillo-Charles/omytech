import {
    FiArrowUpRight,
    FiBriefcase,
    FiCheckCircle,
    FiChevronRight,
    FiCreditCard,
    FiFileText,
    FiUsers,
} from "react-icons/fi";
import AdminMetric from "./AdminMetric";
import { adminProjects, quoteRequests, type AdminView } from "./adminData";

export default function AdminOverview({
    onView,
}: {
    onView: (view: AdminView) => void;
}) {
    return (
        <div className="mt-8 grid gap-6">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <AdminMetric
                    label="Active projects"
                    value="12"
                    detail="4 due this week"
                    icon={FiBriefcase}
                />
                <AdminMetric
                    label="New quotes"
                    value="3"
                    detail="Awaiting review"
                    icon={FiFileText}
                />
                <AdminMetric
                    label="Active clients"
                    value="28"
                    detail="5 added this month"
                    icon={FiUsers}
                />
                <AdminMetric
                    label="Revenue this month"
                    value="KES 286k"
                    detail="18% above last month"
                    icon={FiCreditCard}
                />
            </div>

            <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                <section className="border border-[#dce5ef] bg-white p-6 sm:p-7">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase text-[#0b78b7]">
                                Delivery pipeline
                            </p>
                            <h2
                                className="mt-2 text-xl font-black"
                                style={{
                                    fontFamily: "var(--font-glacial-indifference), sans-serif",
                                }}
                            >
                                Active projects
                            </h2>
                        </div>
                        <button
                            type="button"
                            onClick={() => onView("Projects")}
                            className="inline-flex items-center gap-1 text-sm font-semibold text-[#0b78b7]"
                        >
                            View all <FiChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                    <div className="mt-6 grid gap-3">
                        {adminProjects.map((project) => (
                            <div key={project.client} className="border border-[#e6eef5] p-4">
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm font-bold">{project.client}</p>
                                        <p className="mt-1 text-xs text-[#8a9aaa]">
                                            {project.project} · {project.value}
                                        </p>
                                    </div>
                                    <span className="w-fit bg-[#eef6fb] px-2.5 py-1 text-xs font-semibold text-[#0b78b7]">
                                        {project.status}
                                    </span>
                                </div>
                                <div className="mt-4 flex items-center gap-3">
                                    <div className="h-1.5 flex-1 bg-[#e6eef5]">
                                        <div
                                            className="h-full"
                                            style={{
                                                width: `${project.progress}%`,
                                                background: project.color,
                                            }}
                                        />
                                    </div>
                                    <span className="text-xs font-semibold text-[#6b7d90]">
                                        {project.progress}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="border border-[#dce5ef] bg-white p-6 sm:p-7">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs font-semibold uppercase text-[#0b78b7]">
                                Needs attention
                            </p>
                            <h2
                                className="mt-2 text-xl font-black"
                                style={{
                                    fontFamily: "var(--font-glacial-indifference), sans-serif",
                                }}
                            >
                                Quote requests
                            </h2>
                        </div>
                        <span className="bg-[#fff4e8] px-2.5 py-1 text-xs font-semibold text-[#b45c16]">
                            3 new
                        </span>
                    </div>
                    <div className="mt-6 grid gap-4">
                        {quoteRequests.map((quote) => (
                            <div
                                key={quote.client}
                                className="border-b border-[#e6eef5] pb-4 last:border-0"
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <p className="text-sm font-bold">{quote.client}</p>
                                        <p className="mt-1 text-xs text-[#6b7d90]">
                                            {quote.service}
                                        </p>
                                    </div>
                                    <span className="text-xs font-semibold text-[#0b78b7]">
                                        {quote.status}
                                    </span>
                                </div>
                                <p className="mt-2 text-xs text-[#8a9aaa]">
                                    {quote.budget} · {quote.received}
                                </p>
                            </div>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={() => onView("Quotes")}
                        className="mt-5 text-sm font-semibold text-[#0b78b7]"
                    >
                        Review all requests
                    </button>
                </section>
            </div>

            <section className="border border-[#dce5ef] bg-[#f2f7fb] p-6 sm:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase text-[#0b78b7]">
                            Operations
                        </p>
                        <h2
                            className="mt-2 text-xl font-black"
                            style={{
                                fontFamily: "var(--font-glacial-indifference), sans-serif",
                            }}
                        >
                            Keep client work moving.
                        </h2>
                        <p className="mt-2 text-sm text-[#536579]">
                            Review new enquiries, keep milestones current, and make sure
                            clients always know the next step.
                        </p>
                    </div>
                    <a
                        href="/quote"
                        className="inline-flex w-fit items-center gap-2 border border-[#cfe0ee] bg-white px-4 py-3 text-sm font-semibold hover:border-[#0b78b7]"
                    >
                        Open public quote form <FiArrowUpRight className="h-4 w-4" />
                    </a>
                </div>
            </section>
        </div>
    );
}
