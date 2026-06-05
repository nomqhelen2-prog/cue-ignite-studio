import { createFileRoute } from "@tanstack/react-router";
import { Starburst } from "@/components/Starburst";

export const Route = createFileRoute("/collaborations")({
  head: () => ({
    meta: [
      { title: "Brand Collaborations — OnCue Marketing" },
      { name: "description", content: "Selected work with Rolex, Nespresso, D'Ussé, Patrón, FNB and more." },
      { property: "og:title", content: "Brand Collaborations — OnCue Marketing" },
      { property: "og:description", content: "Our proudest activations and brand partnerships." },
      { property: "og:url", content: "/collaborations" },
    ],
    links: [{ rel: "canonical", href: "/collaborations" }],
  }),
  component: CollabPage,
});

const collabs: { name: string; tag?: string; img: string; span?: string }[] = [
  { name: "Rolex", tag: "Luxury Retail", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80", span: "md:row-span-2" },
  { name: "Nespresso", tag: "In-store Sampling", img: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=900&q=80" },
  { name: "D'Ussé x Ashmed Hour", tag: "Brand Activation", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80", span: "md:row-span-2" },
  { name: "D'Ussé", tag: "Instore Activations", img: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=900&q=80" },
  { name: "SA Rugby Awards", tag: "Sports Hospitality", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80" },
  { name: "Patrón x Formula 1", tag: "Luxury Spirits", img: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=900&q=80" },
  { name: "Private Patrón Masterclass", tag: "Intimate Activation", img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=900&q=80" },
  { name: "Homie Lover Friend x Bombay Sapphire", tag: "Lifestyle Campaign", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80" },
  { name: "FNB", tag: "Corporate", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80" },
  { name: "Luxe Awards 2026", tag: "Awards Hospitality", img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80" },
  { name: "Isibaya / Ishaka Ilembe Premier", tag: "Film Premier", img: "https://images.unsplash.com/photo-1485872299712-2db58c54bb87?auto=format&fit=crop&w=900&q=80" },
  { name: "Ayoosh Global Launch", tag: "Product Launch", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80" },
  { name: "El Patron Launch", tag: "Spirits Launch", img: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&w=900&q=80" },
  { name: "Comfort Fabric Softener", tag: "Consumer Brand", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80" },
];

function CollabPage() {
  return (
    <div className="bg-black text-white">
      <section className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20 relative">
          <Starburst className="absolute top-10 right-10 w-24 h-24 text-white/80" />
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-6">Company Profile / 2026</p>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight">Brand<br/>Collaborations</h1>
          <p className="mt-8 max-w-3xl text-white/80 text-lg leading-relaxed">
            OnCue Marketing has proudly supported a range of brands and event agencies through professional staffing, brand activations, and experiential marketing support. We welcome opportunities to collaborate with brands, agencies and event companies looking to deliver exceptional experiences.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-3">
          {collabs.map((c) => (
            <figure key={c.name} className={`relative overflow-hidden group ${c.span ?? ""}`}>
              <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <figcaption className="absolute top-3 left-3 bg-black/90 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-2 py-1 border border-white/10">
                {c.name}
              </figcaption>
              {c.tag && (
                <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-widest text-[var(--color-gold)] font-bold">
                  {c.tag}
                </span>
              )}
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
