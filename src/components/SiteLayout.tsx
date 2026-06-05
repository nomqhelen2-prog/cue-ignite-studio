import { Link, Outlet } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { Starburst } from "./Starburst";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/collaborations", label: "Collaborations" },
  { to: "/contact", label: "Contact" },
] as const;

export default function SiteLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Starburst className="w-6 h-6 text-[var(--color-gold)] group-hover:rotate-45 transition-transform duration-500" />
            <span className="font-black tracking-widest text-sm">ONCUE</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-[var(--color-gold)]" }}
                inactiveProps={{ className: "text-white/80 hover:text-white" }}
                className="text-xs font-bold uppercase tracking-[0.2em] transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="hidden md:inline-flex bg-[var(--color-gold)] text-black px-5 py-2 text-xs font-black uppercase tracking-widest hover:bg-[var(--color-gold-deep)] transition"
          >
            Start a project
          </Link>
          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 bg-black">
            <div className="px-6 py-4 flex flex-col gap-4">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-white/90"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-black text-white/70">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Starburst className="w-8 h-8 text-[var(--color-gold)]" />
              <span className="font-black tracking-widest text-white">ONCUE MARKETING</span>
            </div>
            <p className="text-sm max-w-md">
              Experiential and promotional marketing agency turning brand goals into shared wins across Johannesburg, Cape Town and Durban.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white mb-4">Navigate</p>
            <ul className="space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-[var(--color-gold)]">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white mb-4">Contact</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-[var(--color-gold)]" /> +27 60 106 4358</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[var(--color-gold)]" /> admin@oncuemarketing.info</li>
              <li className="flex items-center gap-2"><Instagram className="w-4 h-4 text-[var(--color-gold)]" /> @oncuemarketing</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs uppercase tracking-widest text-white/40">
          © {new Date().getFullYear()} OnCue Marketing — JHB | CPT | DBN
        </div>
      </footer>
    </div>
  );
}
