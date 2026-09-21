import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://omytechkenya.co.ke";

    const routes = [
        "",
        "/about",
        "/services",
        "/solutions",
        "/portfolio",
        "/contact",
        "/quote",
        "/auth",
        "/privacy",
        "/terms",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return routes;
}
