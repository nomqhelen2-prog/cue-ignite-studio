import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Starburst } from "@/components/Starburst";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OnCue Marketing — Turning Brand Goals Into Shared Wins" },
      { name: "description", content: "Premium experiential and promotional marketing agency partnering with brands across JHB, CPT and DBN." },
      { property: "og:title", content: "OnCue Marketing" },
      { property: "og:description", content: "Turning your brand goals into shared wins." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="home" className="bg-black text-white">
      <section className="hero relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        <img
          className="hero-image absolute inset-0 w-full h-full object-cover opacity-50"
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80"
          alt="OnCue Marketing event background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
        <Starburst className="absolute top-24 right-10 w-24 h-24 text-[var(--color-gold)]/80 animate-[spin_30s_linear_infinite]" />
        <Starburst className="absolute bottom-24 left-10 w-16 h-16 text-white/60" />
        <div className="hero-copy relative z-10 text-center px-6 max-w-5xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-[var(--color-gold)] mb-6 font-bold">
            Company Profile / 2026
          </p>
          <div className="hero-content mb-6">
            <h1
              className="hero-title tracking-wider text-6xl md:text-9xl font-black flex flex-col leading-[0.95]"
              aria-label="OnCue Marketing"
            >
              <span className="hero-title-line hero-title-line-top text-white">ONCUE</span>
              <span className="hero-title-line hero-title-line-bottom text-[var(--color-gold)]">MARKETING</span>
            </h1>
          </div>
          <p className="tagline hero-tagline text-base md:text-2xl font-bold tracking-[0.25em] text-white/90 mt-6 uppercase">
            Turning Your Brand Goals Into Shared Wins
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[var(--color-gold)] text-black px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-white transition"
            >
              Start a project
            </Link>
            <Link
              to="/collaborations"
              className="border border-white/30 text-white px-8 py-4 font-black uppercase tracking-widest text-sm hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition"
            >
              View work
            </Link>
          </div>
        </div>
      </section>

      <section id="home-overview" className="panel max-w-6xl mx-auto py-24 px-6 border-b border-white/10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="panel-index text-[var(--color-gold)] font-bold uppercase tracking-widest block mb-2 text-sm">01 · About Us</span>
            <p className="panel-kicker text-white/50 uppercase tracking-wider text-xs mb-1">Overview</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase leading-tight">What we do</h2>
            <p className="text-white/80 text-lg max-w-3xl mb-8 leading-relaxed">
              OnCue Marketing is a dynamic experiential and promotional marketing agency, partnering with brands and event companies to deliver impactful, memorable brand experiences. We translate brand ambition into immersive moments that captivate audiences.
            </p>
            <Link to="/about" className="text-[var(--color-gold)] font-bold tracking-wider hover:underline inline-flex items-center gap-2 uppercase text-sm">
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="home-portfolio" className="panel max-w-6xl mx-auto py-24 px-6 border-b border-white/10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="panel-index text-[var(--color-gold)] font-bold uppercase tracking-widest block mb-2 text-sm">02 · Portfolio</span>
            <p className="panel-kicker text-white/50 uppercase tracking-wider text-xs mb-1">Selected work</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase leading-tight">Selected work</h2>
            <p className="text-white/80 text-lg max-w-3xl mb-8 leading-relaxed">
              Explore our proudest activations, featuring high-profile executions for world-class luxury brands, athletic events, and public campaigns across major metropolitan hubs.
            </p>
            <Link to="/collaborations" className="text-[var(--color-gold)] font-bold tracking-wider hover:underline inline-flex items-center gap-2 uppercase text-sm">
              View Collaborations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="home-contact" className="panel max-w-6xl mx-auto py-24 px-6">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="panel-index text-[var(--color-gold)] font-bold uppercase tracking-widest block mb-2 text-sm">03 · Get in touch</span>
            <p className="panel-kicker text-white/50 uppercase tracking-wider text-xs mb-1">Start a conversation</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase leading-tight">Start a conversation</h2>
            <p className="text-white/80 text-lg max-w-3xl mb-8 leading-relaxed">
              Ready to activate your brand? Get in touch with our operations teams across Johannesburg, Cape Town, and Durban.
            </p>
            <Link to="/contact" className="inline-block bg-[var(--color-gold)] text-black px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-white transition">
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
