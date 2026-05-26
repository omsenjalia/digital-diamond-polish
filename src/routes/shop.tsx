import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import hairWax from "../assets/official/hair-wax.png";
import beardShampoo from "../assets/official/beard-shampoo.jpg";
import travelSet from "../assets/official/travel-set.jpg";
import hairStyling from "../assets/official/hair-styling.png";
import beardImg from "../assets/official/beard.jpg";
import fragrancesImg from "../assets/official/fragrances.jpg";
import skincareImg from "../assets/official/skincare.png";
import allProducts from "../assets/official/all-products.png";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — 99ML Carry-on Grooming Essentials" },
      { name: "description", content: "Shop the full 99ML series of organic, vegan, carry-on grooming essentials made in Italy." },
      { property: "og:title", content: "Shop — 99ML Carry-on Grooming Essentials" },
      { property: "og:description", content: "Hair wax, beard shampoo, fragrances and the 99ML Travel Set — all under 100ml." },
    ],
  }),
  component: ShopPage,
});

type Category = "All" | "Hair & Styling" | "Beard" | "Fragrances" | "Skincare" | "Sets";

const products = [
  { name: "Organic Hair Wax", category: "Hair & Styling" as Category, volume: "50ml", price: 28, img: hairWax, blurb: "Medium-strong sculpt with carnauba & bearberry." },
  { name: "Vegan Beard Shampoo", category: "Beard" as Category, volume: "99ml", price: 24, img: beardShampoo, blurb: "Aloe vera + ginseng for a clean, hydrated beard." },
  { name: "The 99ML Travel Set", category: "Sets" as Category, volume: "3 × 50ml", price: 65, img: travelSet, blurb: "Eau de Toilette, soothing shampoo, shaving gel." },
  { name: "Soothing Shampoo", category: "Hair & Styling" as Category, volume: "99ml", price: 22, img: hairStyling, blurb: "Daily wash with botanical extracts." },
  { name: "Beard Oil", category: "Beard" as Category, volume: "30ml", price: 32, img: beardImg, blurb: "Lightweight conditioning oil for softness." },
  { name: "Eau de Toilette No. 1", category: "Fragrances" as Category, volume: "50ml", price: 55, img: fragrancesImg, blurb: "Cedar, bergamot and a clean dry-down." },
  { name: "Hydrating Skin Cream", category: "Skincare" as Category, volume: "50ml", price: 38, img: skincareImg, blurb: "Daily moisturizer with organic actives." },
  { name: "Discovery Bundle", category: "Sets" as Category, volume: "Mini sizes", price: 45, img: allProducts, blurb: "Try the full 99ML series in mini format." },
];

const categories: Category[] = ["All", "Hair & Styling", "Beard", "Fragrances", "Skincare", "Sets"];

function ShopPage() {
  const [active, setActive] = useState<Category>("All");
  const [sort, setSort] = useState<"featured" | "price-asc" | "price-desc">("featured");

  const visible = useMemo(() => {
    const filtered = active === "All" ? products : products.filter((p) => p.category === active);
    if (sort === "price-asc") return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [active, sort]);

  return (
    <div className="bg-bone text-ink min-h-screen">
      <div className="bg-moss text-bone text-center py-2.5 text-[10px] uppercase tracking-[0.35em] font-medium">
        Organic — Functional — Vegan
      </div>

      <nav className="sticky top-0 z-50 bg-bone/95 backdrop-blur-md border-b border-ink/10">
        <div className="container mx-auto px-6 grid grid-cols-3 items-center h-20">
          <Link to="/" className="text-[11px] uppercase tracking-[0.2em] hover:text-sand transition-colors">
            ← Home
          </Link>
          <Link to="/" className="font-serif text-3xl font-bold tracking-tight italic text-center">
            99ML
          </Link>
          <div className="flex items-center justify-end gap-5 text-[11px] uppercase tracking-[0.2em]">
            <a href="#" className="hidden sm:inline hover:text-sand">Account</a>
            <a href="#" className="hover:text-sand">Cart (0)</a>
          </div>
        </div>
      </nav>

      {/* Header with Gemini aurora */}
      <header className="relative overflow-hidden border-b border-ink/10">
        <div className="ai-aurora" />
        <div className="container mx-auto px-6 py-20 md:py-28 relative z-10 ai-fade-up">
          <span className="block text-[10px] uppercase tracking-[0.35em] mb-4 text-moss">The 99ML Series</span>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            Shop everything <span className="italic ai-shimmer-text">under 100ml.</span>
          </h1>
          <p className="text-ink/70 mt-6 max-w-xl text-lg leading-relaxed">
            Every formula is travel-compliant, organic, and made in Italy. Filter by category or browse the
            full series.
          </p>
        </div>
      </header>

      {/* Filter + sort bar */}
      <div className="sticky top-20 z-40 bg-bone/95 backdrop-blur-md border-b border-ink/10">
        <div className="container mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`ai-sweep text-[11px] uppercase tracking-[0.2em] px-4 py-2 rounded-full border transition-all ${
                  active === c
                    ? "bg-ink text-bone border-ink"
                    : "border-ink/20 text-ink hover:border-ink/60"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em]">
            <label className="text-ink/50">Sort</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="bg-transparent border border-ink/20 rounded-full px-3 py-2 outline-none cursor-pointer text-[10px]"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price · Low to High</option>
              <option value="price-desc">Price · High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product grid */}
      <section className="container mx-auto px-6 py-16">
        <p className="text-[11px] uppercase tracking-[0.3em] text-ink/40 mb-8">
          {visible.length} product{visible.length === 1 ? "" : "s"}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {visible.map((p, i) => (
            <article
              key={p.name}
              className="group cursor-pointer ai-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/5] bg-stone/30 mb-5 overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.name} — ${p.category} ${p.volume}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-ink/90 backdrop-blur-sm text-bone py-3 px-4 text-[11px] uppercase tracking-[0.2em] text-center">
                  Quick Add
                </div>
                <span className="absolute top-3 left-3 text-[9px] uppercase tracking-[0.25em] bg-bone/90 text-ink px-2 py-1">
                  {p.volume}
                </span>
              </div>
              <h3 className="font-serif text-xl mb-1">{p.name}</h3>
              <p className="text-ink/50 text-xs mb-2">{p.category}</p>
              <p className="text-ink/60 text-sm mb-3 leading-relaxed">{p.blurb}</p>
              <p className="font-medium">€{p.price.toFixed(2)}</p>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-ink/50 py-20">No products in this category yet.</p>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-ink text-bone py-12 mt-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-bone/40">
            © 2026 99ML by Horstmann. Made in Italy.
          </p>
          <Link to="/" className="text-[10px] uppercase tracking-[0.2em] hover:text-sand">
            Back to home →
          </Link>
        </div>
      </footer>
    </div>
  );
}
