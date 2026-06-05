import { createFileRoute } from "@tanstack/react-router";
import { Starburst } from "@/components/Starburst";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — OnCue Marketing" },
      { name: "description", content: "OnCue Marketing is a premium experiential and promotional marketing agency translating brand ambition into immersive, measurable brand moments." },
      { property: "og:title", content: "About — OnCue Marketing" },
      { property: "og:description", content: "Vision, mission and approach of OnCue Marketing." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-black text-white">
      <section className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50 mb-6">Company Profile / 2026</p>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight">About Us</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-10 border-b border-white/10">
        <div className="md:col-span-7 grid grid-cols-2 gap-4 relative">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"
            alt="Brand hostess at premium activation"
            className="w-full aspect-[3/4] object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=900&q=80"
            alt="Elegant promoter at luxury event"
            className="w-full aspect-[3/4] object-cover mt-12"
          />
          <Starburst className="absolute -bottom-6 left-1/3 w-20 h-20 text-white" />
        </div>
        <div className="md:col-span-5 space-y-6 text-white/85 leading-relaxed text-[15px]">
          <p>
            <span className="text-white font-bold">OnCue Marketing</span> is a dynamic experiential and promotional marketing agency, partnering with brands and event companies to deliver impactful, memorable brand experiences. We specialise in innovative campaign execution, strategic event activations, and professional staffing solutions that bring brands to life in meaningful ways.
          </p>
          <p>
            From product launches and corporate events to in-store promotions and large-scale activations, OnCue Marketing provides tailored marketing support designed to enhance brand presence, engage audiences, and drive measurable impact.
          </p>
          <p className="text-[var(--color-gold)] font-bold uppercase tracking-wider">
            At OnCue, we don't just execute campaigns — we create brand moments that resonate.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7 grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80" alt="Luxury brand activation" className="w-full aspect-square object-cover" />
          <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80" alt="Corporate brand experience" className="w-full aspect-square object-cover" />
          <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80" alt="Event activation" className="col-span-2 w-full aspect-[16/9] object-cover" />
        </div>
        <div className="md:col-span-5 border border-white/15 p-8 md:p-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 leading-tight">Vision <br/>and Mission</h2>
          <h3 className="text-[var(--color-gold)] font-bold uppercase tracking-widest mb-2">Vision</h3>
          <p className="text-white/85 mb-8 leading-relaxed">
            To set the gold standard for experiential marketing. Defined by uncompromising excellence, innovative thinking, and flawless execution that transforms how brands are seen, felt, and remembered.
          </p>
          <h3 className="text-[var(--color-gold)] font-bold uppercase tracking-widest mb-2">Mission</h3>
          <p className="text-white/85 leading-relaxed">
            Our mission is to deliver exceptional, high impact brand experiences through strategic insight, world class staffing, and meticulous execution. We translate brand ambition into immersive moments that captivate audiences, elevate brand presence, and produce measurable results at every touchpoint.
          </p>
        </div>
      </section>
    </div>
  );
}
