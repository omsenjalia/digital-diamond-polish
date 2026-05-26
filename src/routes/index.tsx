import { createFileRoute } from "@tanstack/react-router";

import heroImg from "../assets/hero.jpg";
import productHair from "../assets/product-hair.jpg";
import productSkincare from "../assets/product-skincare.jpg";
import productBeard from "../assets/product-beard.jpg";
import productFragrance from "../assets/product-fragrance.jpg";
import botanicalsImg from "../assets/botanicals.jpg";
import catHairBeard from "../assets/cat-hair-beard.jpg";
import catSkincare from "../assets/cat-skincare.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const products = [
  { name: "Matte Texture Clay", category: "Hair & Styling", volume: "50ml", price: "€28.00", img: productHair },
  { name: "Botanical Cleanser", category: "Skincare", volume: "99ml", price: "€32.00", img: productSkincare },
  { name: "Alpine Cedar Oil", category: "Beard", volume: "30ml", price: "€45.00", img: productBeard },
  { name: "Transit No. 1", category: "Fragrance", volume: "10ml", price: "€55.00", img: productFragrance },
];

const pillars: Array<[string, string]> = [
  ["Origin", "100% Made in Italy"],
  ["Ethos", "Vegan & Cruelty-Free"],
  ["Packaging", "100% Recyclable Glass"],
  ["Volume", "Cabin-Bag Friendly"],
];

function Index() {
  return (
    <div className="bg-bone text-ink">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-bone/90 backdrop-blur-md border-b border-ink/5">
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
          <a href="#products" className="hover:text-sand transition-colors">Shop</a>
          <a href="#series" className="hidden sm:inline hover:text-sand transition-colors">The 99ML Series</a>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl font-bold tracking-tight italic">
          99ML
        </div>
        <div className="flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium">
          <a href="#story" className="hidden sm:inline hover:text-sand transition-colors">Story</a>
          <a href="#" className="hover:text-sand transition-colors">Cart (0)</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Premium 99ML grooming bottles on a textured stone surface in soft morning light"
            width={1920}
            height={1088}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bone/85 via-bone/55 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <span className="block text-[12px] uppercase tracking-[0.3em] mb-6 text-moss font-semibold">
              Engineered for the Journey
            </span>
            <h1 className="font-serif text-6xl md:text-8xl leading-[1.1] mb-8">
              Carry-on <br />
              <span className="italic">Confidence.</span>
            </h1>
            <p className="text-lg mb-10 text-ink/70 max-w-md leading-relaxed">
              Premium grooming essentials, sized for international transit. Organic, vegan, and made in
              Italy for the modern nomad.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#products"
                className="px-10 py-4 bg-ink text-bone text-[11px] uppercase tracking-[0.2em] hover:bg-moss transition-colors"
              >
                Shop the Collection
              </a>
              <a
                href="#story"
                className="px-10 py-4 border border-ink/20 text-ink text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-bone transition-all"
              >
                Our Philosophy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Series */}
      <section id="series" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-16">
            <div>
              <h2 className="font-serif text-4xl mb-2">The 99ML Series</h2>
              <p className="text-ink/50 uppercase tracking-widest text-[10px]">
                TSA Approved / Under 100ml / Zero Compromise
              </p>
            </div>
            <a
              href="#products"
              className="text-[11px] uppercase tracking-widest border-b border-ink/20 pb-1 hover:border-ink transition-colors self-start"
            >
              View All Products
            </a>
          </div>

          <div id="products" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((p) => (
              <article key={p.name} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-stone/30 mb-6 overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.name} — ${p.category} ${p.volume}`}
                    width={608}
                    height={800}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-xl mb-1">{p.name}</h3>
                <p className="text-ink/40 text-xs mb-3">
                  {p.category} • {p.volume}
                </p>
                <p className="font-medium">{p.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section id="story" className="bg-moss text-bone py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-5xl mb-8 leading-tight">
                Consciously Formulated. Travel Inspired.
              </h2>
              <p className="text-bone/70 text-lg leading-relaxed">
                Every 99ML product is handcrafted in small batches near Parma, Italy. We combine traditional
                apothecarial wisdom with modern sustainable practices to ensure your skin and the planet
                remain preserved.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {pillars.map(([label, value]) => (
                <div key={label}>
                  <span className="block text-[10px] uppercase tracking-[0.2em] mb-2 opacity-50">
                    {label}
                  </span>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5]">
            <img
              src={botanicalsImg}
              alt="Botanical ingredients — rosemary and cedar wood — on a marble slab in an Italian lab"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="group relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden">
            <img
              src={catHairBeard}
              alt="A man tending his beard in a sunlit luxury hotel bathroom"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/25 flex flex-col justify-end p-12">
              <h3 className="text-bone font-serif text-4xl mb-4">Hair & Beard</h3>
              <a href="#products" className="text-bone text-[11px] uppercase tracking-widest">
                Explore Collection →
              </a>
            </div>
          </div>
          <div className="group relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden">
            <img
              src={catSkincare}
              alt="Minimalist bathroom shelf with premium 99ML skincare bottles and a folded towel"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/25 flex flex-col justify-end p-12">
              <h3 className="text-bone font-serif text-4xl mb-4">Face & Skin</h3>
              <a href="#products" className="text-bone text-[11px] uppercase tracking-widest">
                Explore Collection →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-24 bg-stone/30 border-y border-ink/5">
        <div className="container mx-auto px-6 text-center">
          <span className="block text-[10px] uppercase tracking-[0.4em] mb-8 text-ink/40">
            As Seen In
          </span>
          <blockquote className="max-w-4xl mx-auto">
            <p className="font-serif text-3xl md:text-5xl italic leading-tight mb-8">
              &ldquo;The definitive solution for the frequent flyer who refuses to compromise on his grooming
              ritual. 99ML is pure functional luxury.&rdquo;
            </p>
            <cite className="not-italic text-[12px] uppercase tracking-[0.2em] font-semibold text-moss">
              Dutyfreemag
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-bone pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-serif text-3xl italic mb-6">99ML</h2>
              <p className="text-bone/50 max-w-sm mb-8">
                Premium Italian grooming essentials. Optimized for transit. Built for the modern traveler.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-[10px] uppercase tracking-widest hover:text-sand transition-colors">Instagram</a>
                <a href="#" className="text-[10px] uppercase tracking-widest hover:text-sand transition-colors">Journal</a>
                <a href="#" className="text-[10px] uppercase tracking-widest hover:text-sand transition-colors">Stockists</a>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-widest mb-6 font-semibold">Shop</h4>
              <ul className="space-y-4 text-bone/60 text-sm">
                <li><a href="#" className="hover:text-bone transition-colors">Hair & Styling</a></li>
                <li><a href="#" className="hover:text-bone transition-colors">Beard Care</a></li>
                <li><a href="#" className="hover:text-bone transition-colors">Skincare</a></li>
                <li><a href="#" className="hover:text-bone transition-colors">Fragrances</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] uppercase tracking-widest mb-6 font-semibold">Customer</h4>
              <ul className="space-y-4 text-bone/60 text-sm">
                <li><a href="#" className="hover:text-bone transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-bone transition-colors">Travel Guide</a></li>
                <li><a href="#" className="hover:text-bone transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-bone transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-bone/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-bone/30 uppercase tracking-[0.2em]">
              © 2026 99ML Grooming. Made in Italy.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] text-bone/30 uppercase tracking-[0.2em] hover:text-bone transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] text-bone/30 uppercase tracking-[0.2em] hover:text-bone transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
