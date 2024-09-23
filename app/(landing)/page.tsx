import { LandingHero } from "@/components/LandingHero";
import { LandingNavbar } from "@/components/LandingNavbar";

const LandingPage = () => {
  return (
    <>
      <main className="h-full bg-[#111827] overflow-auto">
        <div className="mx-auto max-w-screen-xl h-full w-full">
          <div className="h-screen">
            <LandingNavbar />
            <LandingHero />
          </div>
        </div>
      </main>
    </>
  );
}

export default LandingPage;