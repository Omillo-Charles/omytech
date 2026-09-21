import {
  FiArrowUpRight,
  FiBriefcase,
  FiCheckCircle,
  FiChevronRight,
  FiClock,
  FiCreditCard,
  FiFileText,
  FiFolder,
  FiShare2,
} from "react-icons/fi";
import MetricCard from "./MetricCard";
import ProjectRow from "./ProjectRow";
import { activity, projects } from "./dashboardData";

export default function OverviewContent() {
  return (
    <div className="mt-8 grid gap-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Active projects"
          value="3"
          detail="2 milestones this week"
          icon={FiBriefcase}
        />
        <MetricCard
          label="Open requests"
          value="2"
          detail="1 awaiting your reply"
          icon={FiFileText}
        />
        <MetricCard
          label="Outstanding"
          value="KES 48,000"
          detail="Next payment Sep 28"
          icon={FiCreditCard}
        />
        <MetricCard
          label="Referral activity"
          value="3"
          detail="People connected to OMYTECH"
          icon={FiShare2}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <section className="border border-[#dce5ef] bg-white p-6 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase text-[#0b78b7]">
                Your work
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
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#0b78b7] hover:text-[#071a2d]"
            >
              View all <FiChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-6 grid gap-3">
            {projects.map((project) => (
              <ProjectRow key={project.name} {...project} />
            ))}
          </div>
        </section>
        <section className="border border-[#dce5ef] bg-white p-6 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase text-[#0b78b7]">
                Latest updates
              </p>
              <h2
                className="mt-2 text-xl font-black"
                style={{
                  fontFamily: "var(--font-glacial-indifference), sans-serif",
                }}
              >
                Activity
              </h2>
            </div>
            <FiClock className="h-5 w-5 text-[#9aabba]" />
          </div>
          <div className="mt-6 grid gap-5">
            {activity.map(({ title, detail, icon: Icon, color }) => (
              <div key={title} className="flex items-start gap-3">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#f2f7fb]"
                  style={{ color }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-5">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#8a9aaa]">
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="mt-7 border-t border-[#e6eef5] pt-5 text-sm font-semibold text-[#0b78b7] hover:text-[#071a2d]"
          >
            View activity history
          </button>
        </section>
      </div>

      <section className="border border-[#dce5ef] bg-[#f2f7fb] p-6 sm:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase text-[#0b78b7]">
              Need a hand?
            </p>
            <h2
              className="mt-2 text-xl font-black"
              style={{
                fontFamily: "var(--font-glacial-indifference), sans-serif",
              }}
            >
              Your project team is one message away.
            </h2>
            <p className="mt-2 text-sm text-[#536579]">
              Ask a question, share an update, or request a new service.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex w-fit items-center gap-2 border border-[#cfe0ee] bg-white px-4 py-3 text-sm font-semibold text-[#071a2d] hover:border-[#0b78b7]"
          >
            Contact support <FiArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
