import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "OMYTECH Kenya",
        short_name: "OMYTECH",
        description:
            "OMYTECH Kenya builds modern websites, mobile apps, digital systems, and business software for organisations in Kenya.",
        start_url: "/",
        display: "standalone",
        background_color: "#f5f8fc",
        theme_color: "#071a2d",
        icons: [
            {
                src: "/assets/logo2.png",
                sizes: "any",
                type: "image/png",
            },
        ],
    };
}
