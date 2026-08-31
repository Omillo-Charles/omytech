import LogoCarousel from "@/components/LogoCarousel";
import ProjectsPortfolio from "@/components/ProjectsPortfolio";

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
    <main className="min-h-screen bg-[#0A0A0A]">
      <ProjectsPortfolio />
      <LogoCarousel />
    </main>
  );
}
