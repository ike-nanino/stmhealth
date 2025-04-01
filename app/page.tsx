import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Services from "@/components/Services";
import TeamSection from "@/components/TeamSection";


export default function Home() {
  return (
    <main>
      <Hero />
      <Header />

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          {/* Your services content */}
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          {/* Your services content */}
        </div>
      </section>


      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Our Services</h2>
          {/* Your services content */}
        </div>
      </section>
      {/* <AboutUs />

      <Services />

      <TeamSection /> */}

    </main>
  );
}