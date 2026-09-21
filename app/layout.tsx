import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import { glacialIndifference, mulish } from "../config/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://omytechkenya.co.ke"),
  title: {
    default: "OMYTECH Kenya | Web, Mobile & Software Development",
    template: "%s | OMYTECH Kenya",
  },
  description:
    "OMYTECH Kenya builds modern websites, mobile apps, business software, and digital systems for schools, healthcare organisations, startups, and growing businesses in Kenya.",
  keywords: [
    "OMYTECH Kenya",
    "website development Kenya",
    "software company Kenya",
    "mobile app developers Kenya",
    "custom software Kenya",
    "digital marketing Kenya",
    "business website Kenya",
    "school management system Kenya",
    "clinic management system Kenya",
    "LMS development Kenya",
    "healthcare software Kenya",
  ],
  applicationName: "OMYTECH Kenya",
  authors: [{ name: "OMYTECH Kenya" }],
  creator: "OMYTECH Kenya",
  publisher: "OMYTECH Kenya",
  icons: {
    icon: "/assets/logo2.png",
    shortcut: "/assets/logo2.png",
    apple: "/assets/logo2.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OMYTECH Kenya | Web, Mobile & Software Development",
    description:
      "We design and build modern digital platforms, business software, and growth-focused websites for organisations across Kenya.",
    url: "https://omytechkenya.co.ke",
    siteName: "OMYTECH Kenya",
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: "/assets/herobanner.png",
        width: 1200,
        height: 630,
        alt: "OMYTECH Kenya digital solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OMYTECH Kenya | Web, Mobile & Software Development",
    description:
      "Digital growth partners for modern businesses, schools, clinics, and organisations in Kenya.",
    creator: "@omyt3ch",
    images: ["/assets/herobanner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071a2d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OMYTECH Kenya",
    url: "https://omytechkenya.co.ke",
    logo: "https://omytechkenya.co.ke/assets/logo2.png",
    sameAs: [
      "https://www.instagram.com/omyt3ch",
      "https://www.tiktok.com/@omyt3ch",
      "https://x.com/omyt3ch",
      "https://github.com/omyt3ch",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "info@omytechkenya.co.ke",
        telephone: "+254745511354",
        areaServed: "KE",
        availableLanguage: ["en"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "KE",
      addressLocality: "Nairobi",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "OMYTECH Kenya",
    url: "https://omytechkenya.co.ke",
    description:
      "OMYTECH Kenya builds modern websites, apps, and digital systems for businesses, schools, and healthcare organisations in Kenya.",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "OMYTECH Kenya",
    },
  };

  return (
    <html
      lang="en"
      className={`${glacialIndifference.variable} ${mulish.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
