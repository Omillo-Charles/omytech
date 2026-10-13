import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const projects = [
    {
        number: "01",
        name: "Castra Households E-Commerce",
        category: "E-commerce · Retail",
        description:
            "A two-in-one online store bringing Castra Households products and Castra Kicks footwear together in one shopping experience.",
        href: "https://castrahouseholds.co.ke",
        image: "/assets/portfolio/castrahosuseholds.png",
        imageAlt: "Castra Households and Castra Kicks e-commerce website",
    },
    {
        number: "02",
        name: "MhengaGee Media",
        category: "Media · Creative",
        description:
            "A media platform for sharing stories, creative work, and services from MhengaGee Media.",
        href: "https://mhengagee.co.ke",
        image: "/assets/portfolio/mhengageemedia.png",
        imageAlt: "MhengaGee Media website homepage",
    },
    {
        number: "03",
        name: "Soltec Electric",
        category: "Electrical · Corporate",
        description:
            "A professional web presence for an electrical company, presenting its expertise, services, and work.",
        href: "https://soltecelectric.co.ke",
        image: "/assets/portfolio/soltecelectric.png",
        imageAlt: "Soltec Electric company website homepage",
    },
    {
        number: "04",
        name: "Youth Explosion Registration Platform",
        category: "Church · Event platform",
        description:
            "An event registration platform for the New Testament Church of God Kenya Youth Explosion.",
        href: "https://churchproject.omytechkenya.co.ke",
        image: "/assets/portfolio/ntcogk.png",
        imageAlt: "New Testament Church of God Kenya Youth Explosion platform",
    },
];

export default function Portfolio() {
    return (
        <section
            aria-labelledby="portfolio-title"
            className="scroll-mt-24 bg-slate-50 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
            id="portfolio"
        >
            <div className="mx-auto max-w-7xl">
                <ScrollReveal className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between" variant="up">
                    <div className="max-w-2xl">
                        <p className="mb-3 text-xs font-bold uppercase text-blue-700">
                            Selected projects
                        </p>
                        <h2
                            className="font-heading text-3xl font-bold leading-tight text-slate-950 sm:text-4xl"
                            id="portfolio-title"
                        >
                            Digital experiences built to move businesses forward.
                        </h2>
                    </div>
                    <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base">
                        A selection of platforms and websites we have created for brands,
                        businesses, and communities.
                    </p>
                </ScrollReveal>

                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    {projects.map((project, index) => (
                        <ScrollReveal className="h-full" delay={index * 110} key={project.number} variant="up">
                            <article
                                className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl"
                            >
                                <a
                                    aria-label={`Visit ${project.name} website (opens in a new tab)`}
                                    className="relative block aspect-[16/9] overflow-hidden bg-slate-200"
                                    href={project.href}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <Image
                                        alt={project.imageAlt}
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                        fill
                                        sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                                        src={project.image}
                                    />
                                    <span className="absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/10" />
                                </a>

                                <div className="flex flex-col gap-4 p-5 sm:p-7">
                                    <div className="flex items-center justify-between gap-4">
                                        <span className="text-xs font-bold text-blue-700">
                                            {project.category}
                                        </span>
                                        <span aria-hidden="true" className="font-heading text-sm font-bold text-slate-400">
                                            {project.number}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl font-bold text-slate-950 sm:text-2xl">
                                            {project.name}
                                        </h3>
                                        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                                            {project.description}
                                        </p>
                                    </div>
                                    <a
                                        className="inline-flex min-h-10 items-center gap-2 self-start text-sm font-bold text-blue-700 transition-colors hover:text-cyan-700"
                                        href={project.href}
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Visit website <span aria-hidden="true">↗</span>
                                    </a>
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
