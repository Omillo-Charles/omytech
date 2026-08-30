import Hero from "@/components/hero";
import LogoCarousel from "@/components/LogoCarousel";

export const metadata = {
  title: "Home",
  description: "OMYTECH - Innovating the Future, Empowering Africa. Leading technology company providing web development, mobile apps, UI/UX design, and digital solutions in Kenya and across Africa.",
  openGraph: {
    title: "OMYTECH - Innovating the Future, Empowering Africa",
    description: "Leading technology company providing web development, mobile apps, UI/UX design, and digital solutions in Kenya and across Africa.",
  },
  verification: {
    google: "j54xnHHGgdTOttZZomxNJXC5sOBP4bXhvC0YnIa-UYk",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoCarousel />
    </main>
  );
}
