import Image from "next/image";
import { FiMessageCircle, FiShield, FiTarget } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const principles = [
    {
        title: "Built around your goals",
        description:
            "We shape websites and software around the needs of your organization and the people it serves.",
        Icon: FiTarget,
    },
    {
        title: "Clear collaboration",
        description:
            "We keep communication straightforward, from the first conversation through delivery.",
        Icon: FiMessageCircle,
    },
    {
        title: "Dependable solutions",
        description:
            "We focus on practical digital tools designed to support your work and future growth.",
        Icon: FiShield,
    },
];

export default function AboutSection() {
    return (
        <section
            aria-labelledby="about-title"
            className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
            id="about"
        >
            <div className="mx-auto max-w-7xl">
                <ScrollReveal className="mb-8" variant="left">
                    <p className="mb-3 text-xs font-bold uppercase text-blue-700">
                        About OMYTECH
                    </p>
                    <div className="grid gap-5 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-12">
                        <h2
                            className="font-heading max-w-2xl text-3xl font-extrabold leading-tight text-slate-950 sm:text-4xl lg:text-5xl"
                            id="about-title"
                        >
                            <span className="text-blue-700">Technology</span> built around
                            your goals.
                        </h2>
                        <div className="grid gap-4 text-sm leading-7 text-slate-600 sm:grid-cols-2 sm:gap-6">
                            <p>
                                OMYTECH Kenya helps businesses, schools, clinics, and
                                organizations make their ideas work in the digital world.
                            </p>
                            <p>
                                From websites and mobile apps to business software, we bring
                                thoughtful design and practical technology together.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {principles.map(({ title, description, Icon }, index) => (
                        <ScrollReveal className="h-full" delay={index * 90} key={title} variant="up">
                            <article
                                className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-[0_8px_28px_rgba(15,23,42,0.07)] sm:p-5"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                                    <Icon aria-hidden="true" className="h-5 w-5" />
                                </span>
                                <span>
                                    <span className="block text-sm font-bold text-slate-950">
                                        {title}
                                    </span>
                                    <span className="mt-1 block text-xs leading-5 text-slate-500">
                                        {description}
                                    </span>
                                </span>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal className="mt-10 lg:mt-12" delay={100} variant="scale">
                    <div className="grid items-center gap-5 md:grid-cols-[1.15fr_0.85fr]">
                        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
                            <Image
                                alt="A team collaborating around laptops on a digital project"
                                className="object-cover object-center"
                                fill
                                sizes="(min-width: 768px) 60vw, 100vw"
                                src="/assets/herobanner.png"
                            />
                        </div>
                        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-100 shadow-lg md:-ml-12 md:mt-14 md:border-8 md:border-white">
                            <Image
                                alt="A shared workspace with laptops and digital tools"
                                className="object-cover object-center"
                                fill
                                sizes="(min-width: 768px) 45vw, 100vw"
                                src="/assets/heroimage.png"
                            />
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}