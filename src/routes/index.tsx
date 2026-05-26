import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import heroImg from "../assets/hero.jpg";
import allProducts from "../assets/official/all-products.png";
import hairStyling from "../assets/official/hair-styling.png";
import beardImg from "../assets/official/beard.jpg";
import fragrancesImg from "../assets/official/fragrances.jpg";
import skincareImg from "../assets/official/skincare.png";
import organicImg from "../assets/official/organic.png";
import functionalImg from "../assets/official/functional.png";
import securityImg from "../assets/official/security.png";
import hairWax from "../assets/official/hair-wax.png";
import beardShampoo from "../assets/official/beard-shampoo.jpg";
import travelSet from "../assets/official/travel-set.jpg";
import footerImg from "../assets/official/footer.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const collections = [
  { name: "All Products", href: "#all", img: allProducts },
  { name: "Hair & Styling", href: "#hair-styling", img: hairStyling },
  { name: "Beard", href: "#beard", img: beardImg },
  { name: "Fragrances", href: "#fragrances", img: fragrancesImg },
  { name: "Skincare", href: "#skincare", img: skincareImg },
];

const pillars = [
  {
    img: organicImg,
    title: "Organic & Vegan Ingredients",
    body: "All products from the 99ML Series are made from Natural and Organic ingredients. All products are Vegan and registered with the Vegan Society. All products are recyclable.",
  },
  {
    img: functionalImg,
    title: "Focus on Functionality",
    body: "All products are formulated and manufactured with the highest quality functional ingredients available to ensure a maximized adequate effect. Made in Italy.",
  },
  {
    img: securityImg,
    title: "Security Compliant Grooming",
    body: "You can carry all products on board flights. 99ML is the world's first concept brand that addresses the global regulations on liquid carry-ons for airline passengers.",
  },
];

const featured = [
  {
    img: hairWax,
    name: "Hair Wax",
    desc: "Medium strong wax that will enable you to softly sculpt your hair. Carnauba wax, organic bearberry and grape leaf extract.",
    cta: "Shop Hair Wax",
  },
  {
    img: beardShampoo,
    name: "Beard Shampoo",
    desc: "Gently cleanses your beard giving it a luxurious texture and fine finish. Organic aloe vera and ginseng.",
    cta: "Shop Beard Shampoo",
  },
  {
    img: travelSet,
    name: "The 99ML Travel Set",
    desc: "Contains Eau de Toilette, Soothing Shampoo and Shaving Gel — everything you need in cabin-bag format.",
    cta: "Discover the Set",
  },
];

const press = [
  { title: "Size matters: Men's grooming brand 99ML launches with Dufry at Sharjah and Bengaluru airports", source: "Moodie Davitt Report" },
  { title: "Men's grooming brand 99ML by Horstmann makes airport retail debut with Dufry", source: "GTR Magazine" },
  { title: "99ML by Horstmann breaks into travel retail in partnership with Dufry", source: "TR Business" },
  { title: "99ML by Horstmann partners with Dufry at two airports", source: "DFNI Online" },
  { title: "99ML: featured in Pic de l'Aigle", source: "Pic de l'Aigle" },
  { title: "99ML by Horstmann is flying high", source: "Dutyfreemag" },
];

function Index() {
  const [currency, setCurrency] = useState<"EUR" | "USD" | "CAD">("EUR");
  const [country, setCountry] = useState("Italy");
  const [menuOpen, setMenuOpen] = useState(false);

  // Cursor-follow glow (Gemini-style trailing blob)
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const trail = { x: target.x, y: target.y };
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
      }
    };
    const tick = () => {
      trail.x += (target.x - trail.x) * 0.08;
      trail.y += (target.y - trail.y) * 0.08;
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trail.x - 300}px, ${trail.y - 300}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="bg-bone text-ink relative overflow-x-hidden">
      {/* Cursor-follow aurora */}
      <div
        ref={trailRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[60] h-[600px] w-[600px] rounded-full opacity-40 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(circle, rgba(196,164,132,0.55) 0%, rgba(45,58,48,0.25) 40%, transparent 70%)",
          filter: "blur(40px)",
          willChange: "transform",
        }}
      />
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[61] h-[400px] w-[400px] rounded-full opacity-50 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(226,226,217,0.45) 0%, rgba(196,164,132,0.25) 35%, transparent 65%)",
          filter: "blur(20px)",
          willChange: "transform",
          transition: "transform 0.08s linear",
        }}
      />
      {/* Announcement bar */}
      <div className="bg-moss text-bone text-center py-2.5 text-[10px] uppercase tracking-[0.35em] font-medium">
        Organic — Functional — Vegan
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-bone/95 backdrop-blur-md border-b border-ink/10">
        <div className="container mx-auto px-6 grid grid-cols-3 items-center h-20">
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] font-medium">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden"
              aria-label="Menu"
            >
              Menu
            </button>
            <div className="hidden md:flex gap-7">
              <Link to="/shop" className="hover:text-sand transition-colors">Shop</Link>
              <a href="#hair-styling" className="hover:text-sand transition-colors">Hair</a>
              <a href="#beard" className="hover:text-sand transition-colors">Beard</a>
              <a href="#fragrances" className="hover:text-sand transition-colors">Fragrances</a>
            </div>
          </div>

          <a href="#" className="font-serif text-3xl font-bold tracking-tight italic text-center">
            99ML
          </a>

          <div className="flex items-center justify-end gap-5 text-[11px] uppercase tracking-[0.2em] font-medium">
            <div className="hidden sm:flex items-center gap-2 border border-ink/15 rounded-full px-3 py-1.5">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="bg-transparent outline-none cursor-pointer text-[10px] tracking-[0.15em]"
                aria-label="Country"
              >
                {["Italy","United States","United Kingdom","Germany","France","Canada","Switzerland","Japan","Singapore","UAE"].map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <span className="text-ink/30">|</span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as "EUR" | "USD" | "CAD")}
                className="bg-transparent outline-none cursor-pointer text-[10px] tracking-[0.15em]"
                aria-label="Currency"
              >
                <option value="EUR">EUR €</option>
                <option value="USD">USD $</option>
                <option value="CAD">CAD $</option>
              </select>
            </div>
            <a href="#" aria-label="Search" className="hidden sm:inline hover:text-sand transition-colors">Search</a>
            <a href="#" aria-label="Account" className="hidden sm:inline hover:text-sand transition-colors">Account</a>
            <a href="#" className="hover:text-sand transition-colors">Cart (0)</a>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-ink/10 bg-bone px-6 py-4 flex flex-col gap-3 text-[11px] uppercase tracking-[0.2em]">
            <a href="#all" onClick={() => setMenuOpen(false)}>Shop All</a>
            <a href="#hair-styling" onClick={() => setMenuOpen(false)}>Hair & Styling</a>
            <a href="#beard" onClick={() => setMenuOpen(false)}>Beard</a>
            <a href="#fragrances" onClick={() => setMenuOpen(false)}>Fragrances</a>
            <a href="#skincare" onClick={() => setMenuOpen(false)}>Skincare</a>
          </div>
        )}
      </nav>

      {/* Hero — editorial with Gemini-style aurora */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-bone">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Premium 99ML grooming bottles on a textured stone surface in soft morning light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bone/90 via-bone/55 to-transparent" />
          <div className="ai-aurora" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl ai-fade-up">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] mb-6 text-moss font-semibold">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-sand ai-float" />
              Engineered for the Journey
            </span>
            <h1 className="font-serif text-6xl md:text-8xl leading-[1.05] mb-8">
              Carry-on <br />
              <span className="italic ai-shimmer-text">Confidence.</span>
            </h1>
            <p className="text-lg mb-10 text-ink/70 max-w-md leading-relaxed">
              Premium grooming essentials, sized for international transit. Organic, vegan, and made in
              Italy for the modern nomad.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="ai-sweep px-10 py-4 bg-ink text-bone text-[11px] uppercase tracking-[0.2em] hover:bg-moss transition-colors"
              >
                Shop the Collection
              </Link>
              <a
                href="#story"
                className="ai-sweep px-10 py-4 border border-ink/20 text-ink text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-bone transition-all"
              >
                Our Philosophy
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Collections Grid */}
      <section id="all" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="block text-[10px] uppercase tracking-[0.35em] mb-3 text-moss">Collections</span>
              <h2 className="font-serif text-4xl md:text-5xl">Explore the 99ML Series</h2>
            </div>
            <a href="#all" className="text-[11px] uppercase tracking-widest border-b border-ink/30 pb-1 hover:border-ink self-start">
              View All Products
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {collections.map((c) => (
              <a key={c.name} href={c.href} className="group">
                <div className="aspect-square bg-stone/30 mb-4 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-lg text-center">{c.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Press quote */}
      <section className="bg-stone/40 py-20 border-y border-ink/5">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="max-w-4xl mx-auto">
            <p className="font-serif text-2xl md:text-4xl italic leading-snug mb-6">
              &ldquo;The brand's range of grooming products is of the highest quality on the market. Made
              in Italy, 99ML's items are vegan and recyclable. Its product range is not only highly
              functional, but also organic.&rdquo;
            </p>
            <cite className="not-italic text-[11px] uppercase tracking-[0.3em] font-semibold text-moss">
              — Dutyfreemag
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Brand pillars */}
      <section id="story" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="block text-[10px] uppercase tracking-[0.35em] mb-3 text-moss">The 99ML Standard</span>
            <h2 className="font-serif text-4xl md:text-5xl">Consciously Formulated.<br/><span className="italic">Travel Inspired.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map((p) => (
              <article key={p.title} className="text-center">
                <div className="aspect-[4/3] bg-stone/20 mb-6 overflow-hidden flex items-center justify-center">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-2xl mb-3">{p.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed max-w-sm mx-auto">{p.body}</p>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#all" className="inline-block px-9 py-4 bg-ink text-bone text-[11px] uppercase tracking-[0.2em] hover:bg-moss transition-colors">
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-moss text-bone">
        {featured.map((f, i) => (
          <div
            key={f.name}
            id={i === 0 ? "hair-styling" : i === 1 ? "beard" : "fragrances"}
            className={`container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="aspect-square bg-bone/5 overflow-hidden flex items-center justify-center">
              <img src={f.img} alt={f.name} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-[0.35em] mb-4 opacity-60">Featured</span>
              <h3 className="font-serif text-4xl md:text-5xl mb-6">{f.name}</h3>
              <p className="text-bone/75 text-lg leading-relaxed mb-8 max-w-md">{f.desc}</p>
              <a href="#" className="inline-block px-9 py-4 bg-bone text-ink text-[11px] uppercase tracking-[0.2em] hover:bg-sand transition-colors">
                {f.cta}
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Press list */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <span className="block text-[10px] uppercase tracking-[0.35em] mb-3 text-moss">In The Press</span>
            <h2 className="font-serif text-4xl md:text-5xl">99ML, on record.</h2>
          </div>
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {press.map((p) => (
              <li key={p.title}>
                <a href="#" className="flex flex-col md:flex-row md:items-center justify-between gap-3 py-6 group">
                  <span className="font-serif text-lg md:text-xl group-hover:italic transition-all max-w-2xl">{p.title}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-moss font-semibold whitespace-nowrap">{p.source} →</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer band image */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img src={footerImg} alt="99ML premium men's travel grooming essentials" className="w-full h-full object-cover" />
      </section>

      {/* Footer */}
      <footer className="bg-ink text-bone pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <h2 className="font-serif text-3xl italic mb-5">99ML</h2>
              <p className="text-bone/55 max-w-sm mb-6 leading-relaxed">
                Premium Italian grooming essentials. Organic. Vegan. Security-compliant. Made for the
                modern traveler.
              </p>
              <form className="flex max-w-sm border-b border-bone/30 pb-2">
                <input
                  type="email"
                  placeholder="Email for our journal"
                  className="bg-transparent flex-1 outline-none text-sm placeholder:text-bone/40"
                />
                <button type="submit" className="text-[10px] uppercase tracking-[0.3em] hover:text-sand transition-colors">
                  Subscribe →
                </button>
              </form>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-widest mb-5 font-semibold">Shop</h4>
              <ul className="space-y-3 text-bone/60 text-sm">
                <li><a href="#all" className="hover:text-bone">All Products</a></li>
                <li><a href="#hair-styling" className="hover:text-bone">Hair & Styling</a></li>
                <li><a href="#beard" className="hover:text-bone">Beard</a></li>
                <li><a href="#fragrances" className="hover:text-bone">Fragrances</a></li>
                <li><a href="#skincare" className="hover:text-bone">Skincare</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-widest mb-5 font-semibold">Customer</h4>
              <ul className="space-y-3 text-bone/60 text-sm">
                <li><a href="#" className="hover:text-bone">Search</a></li>
                <li><a href="#" className="hover:text-bone">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-bone">Contact</a></li>
                <li><a href="#" className="hover:text-bone">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-bone">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-bone/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-bone/40 uppercase tracking-[0.2em]">
              © 2026 99ML by Horstmann. Made in Italy.
            </p>
            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-bone/40">
              <span>{country}</span>
              <span>|</span>
              <span>{currency}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
