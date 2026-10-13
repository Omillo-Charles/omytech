"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealVariant = "up" | "left" | "right" | "scale";

type ScrollRevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    variant?: RevealVariant;
};

export default function ScrollReveal({
    children,
    className,
    delay = 0,
    variant = "up",
}: ScrollRevealProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        if (prefersReducedMotion || !("IntersectionObserver" in window)) {
            return;
        }

        element.dataset.revealVisible = "false";
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.dataset.revealVisible = "true";
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.01,
                rootMargin: "0px 0px 120px 0px",
            },
        );

        let resizeFrame = 0;
        const revealIfInView = () => {
            window.cancelAnimationFrame(resizeFrame);
            resizeFrame = window.requestAnimationFrame(() => {
                const bounds = element.getBoundingClientRect();
                if (bounds.bottom > 0 && bounds.top < window.innerHeight) {
                    element.dataset.revealVisible = "true";
                    observer.disconnect();
                }
            });
        };

        window.addEventListener("resize", revealIfInView);
        observer.observe(element);
        return () => {
            window.removeEventListener("resize", revealIfInView);
            window.cancelAnimationFrame(resizeFrame);
            observer.disconnect();
        };
    }, []);

    return (
        <div
            className={className}
            data-reveal-variant={variant}
            data-scroll-reveal=""
            data-reveal-visible="true"
            ref={elementRef}
            style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
        >
            {children}
        </div>
    );
}
