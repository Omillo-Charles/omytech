import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
    return (
        <section
            aria-labelledby="hero-title"
            className="relative isolate flex min-h-[680px] scroll-mt-0 items-center justify-center overflow-hidden bg-slate-950 px-5 pb-28 pt-36 text-center text-white sm:min-h-[760px] sm:px-8 sm:pb-36 sm:pt-40"
            id="home"
        >
            <Image
                alt=""
                className="hero-background absolute inset-0 -z-20 object-cover object-center"
                fill
                priority
                sizes="100vw"
                src="/assets/herobanner.png"
            />
            <div
                aria-hidden="true"
                className="hero-shade absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/65 via-slate-950/65 to-slate-950/80"
            />

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
                <ScrollReveal delay={0} variant="up">
                    <p className="mb-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase text-cyan-200 sm:text-xs">
                        <span aria-hidden="true" className="h-px w-8 bg-cyan-300" />
                        We build software that scales
                        <span aria-hidden="true" className="h-px w-8 bg-cyan-300" />
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={100} variant="up">
                    <h1
                        className="font-heading max-w-4xl text-4xl font-extrabold leading-[1.08] sm:text-6xl lg:text-7xl"
                        id="hero-title"
                    >
                        Excellent digital services for your success.
                    </h1>
                </ScrollReveal>
                <ScrollReveal delay={190} variant="up">
                    <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
                        We build thoughtful websites, mobile apps, and software that help
                        ambitious businesses do more.
                    </p>
                </ScrollReveal>

                <ScrollReveal className="mt-9 w-full sm:w-auto" delay={280} variant="scale">
                    <div className="flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
                        <Link
                            className="inline-flex min-h-12 items-center justify-center gap-3 bg-blue-600 px-7 text-xs font-extrabold uppercase transition hover:bg-cyan-500"
                            href="/#portfolio"
                        >
                            Explore our work <span aria-hidden="true">→</span>
                        </Link>
                        <Link
                            className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/80 bg-white px-7 text-xs font-extrabold uppercase text-slate-900 transition hover:bg-transparent hover:text-white"
                            href="/#contact"
                        >
                            Contact us <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </ScrollReveal>

            </div>

            <svg
                aria-hidden="true"
                className="hero-wave absolute bottom-0 left-0 z-10 h-20 w-full sm:h-28"
                preserveAspectRatio="none"
                viewBox="0 0 1440 120"
            >
                <path d="M0 70C220 115 400 125 650 80C900 34 1110 30 1440 77V120H0V70Z" fill="white" />
            </svg>
        </section>
    );
}
