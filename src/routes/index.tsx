import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import heroBg from "@/assets/hero-bg.jpg";
import restaurantPhoto from "@/assets/restaurant-photo.jpg.asset.json";
import barWhiskey from "@/assets/bar-whiskey.jpg.asset.json";
import barTequila from "@/assets/bar-tequila.jpg.asset.json";
import barFullbar from "@/assets/bar-fullbar.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

import menuData from "../content/menu.json";

type Item = { n?: string; name: string; desc?: string; price: string };

type Section = {
  id: string;
  label: string;
  tab: string;
  color: "chili" | "cactus" | "marigold" | "agave" | "mesa";
  blurb?: string;
  groups?: { title?: string; note?: string; items: Item[] }[];
  items?: Item[];
};

const PHONE = menuData.phone;
const PHONE_TEL = menuData.phone_tel;
const ADDRESS = menuData.address;
const HOURS = menuData.hours;
const SECTIONS = menuData.sections as Section[];

function colorClasses(c: Section["color"]) {
  const map = {
    chili: { bg: "bg-chili", text: "text-chili", border: "border-chili", soft: "bg-chili/10" },
    cactus: { bg: "bg-cactus", text: "text-cactus", border: "border-cactus", soft: "bg-cactus/10" },
    marigold: {
      bg: "bg-marigold",
      text: "text-marigold",
      border: "border-marigold",
      soft: "bg-marigold/10",
    },
    agave: { bg: "bg-agave", text: "text-agave", border: "border-agave", soft: "bg-agave/10" },
    mesa: { bg: "bg-mesa", text: "text-mesa", border: "border-mesa", soft: "bg-mesa/10" },
  } as const;
  return map[c];
}

const itemKey = (sectionId: string, it: Item) => `${sectionId}::${it.n ?? ""}::${it.name}`;

const DEFAULT_IMAGES: Record<string, string> = {
  "dinners::33::Pasta Shrimp": "/menu/pasta-shrimp.jpg",
  "dinners::43::Burrito Texano": "/menu/burrito-texano.jpg",
  "dinners::49::Chile Colorado Burrito": "/menu/chile-colorado-burrito.jpg",
  "dinners::50::Burrito Verde": "/menu/burrito-verde.jpg",
  "dinners::52::Quesadilla Texana": "/menu/quesadilla-texana.jpg",
  "seafood::74::Fajita Seafood Tropical": "/menu/fajita-seafood-tropical.jpg",
  "seafood::91::Arroz Cancún": "/menu/arroz-cancun.jpg",
  "seafood::97::Coctel de Camarón": "/menu/coctel-de-camaron.jpg",
  "sides::::Churros": "/menu/churros.jpg",
  "appetizers::::Sampler Appetizers": "/menu/sampler-appetizers.jpg",
  "appetizers::::Tacobirria": "/menu/tacobirria.jpg",
  "appetizers::::Sopes": "/menu/sopes-pizza-torta.jpg",
  "dinners::50::Pelusa Texana": "/menu/pelusa-texana.jpg",
  "specialties::1::Dos Amigos": "/menu/dos-amigos.jpg",
};

const STORAGE_KEY = "casa-mexico-menu-images-v5";

function ItemRow({
  it,
  accent,
  image,
  onDragStartImage,
  onDropOnItem,
  sbFieldPath,
}: {
  it: Item;
  accent: string;
  image?: string;
  onDragStartImage: () => void;
  onDropOnItem: () => void;
  sbFieldPath?: string;
}) {
  const [over, setOver] = useState(false);
  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setOver(false);
        onDropOnItem();
      }}
      className={`bg-card/80 backdrop-blur p-5 hover:bg-card transition flex gap-4 ${
        over ? "ring-2 ring-marigold" : ""
      }`}
      data-sb-field-path={sbFieldPath}
    >
      {it.n && (
        <span className={`font-display text-2xl ${accent} shrink-0 w-10`} data-sb-field-path=".n">
          {it.n}
        </span>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl tracking-wide text-cream" data-sb-field-path=".name">
            {it.name}
          </h3>
          <span className={`font-display text-xl ${accent} shrink-0`}>
            $<span data-sb-field-path=".price">{it.price}</span>
          </span>
        </div>
        {it.desc && (
          <p className="mt-1 text-sm text-cream/70 leading-relaxed" data-sb-field-path=".desc">
            {it.desc}
          </p>
        )}
        {image && (
          <img
            src={image}
            alt={it.name}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.effectAllowed = "move";
              onDragStartImage();
            }}
            className="mt-3 h-auto w-auto max-w-full rounded-lg shadow-md cursor-grab active:cursor-grabbing border border-border/40"
            title="Drag to reassign this photo to a different item"
          />
        )}
      </div>
    </div>
  );
}

function Index() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [images, setImages] = useState<Record<string, string>>(DEFAULT_IMAGES);
  const [draggingFrom, setDraggingFrom] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setImages(JSON.parse(raw));
    } catch {
      // Ignore errors
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
    } catch {
      // Ignore errors
    }
  }, [images]);

  const resetImages = () => setImages(DEFAULT_IMAGES);

  const handleDrop = (toKey: string) => {
    if (!draggingFrom || draggingFrom === toKey) return;
    setImages((prev) => {
      const next = { ...prev };
      const movingImg = next[draggingFrom];
      const targetImg = next[toKey];
      if (!movingImg) return prev;
      if (targetImg) {
        next[draggingFrom] = targetImg;
      } else {
        delete next[draggingFrom];
      }
      next[toKey] = movingImg;
      return next;
    });
    setDraggingFrom(null);
  };

  return (
    <div className="min-h-screen text-foreground" data-sb-object-id="src/content/menu.json">
      {/* Top phone bar */}
      <div className="bg-chili text-primary-foreground text-sm">
        <div className="mx-auto max-w-6xl px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <span className="font-medium">
            📍 <span data-sb-field-path="address">{ADDRESS}</span>
          </span>
          <span className="font-medium">
            🕒 <span data-sb-field-path="hours">{HOURS}</span>
          </span>
          <a href={`tel:${PHONE_TEL}`} className="font-bold tracking-wide hover:underline">
            📞 <span data-sb-field-path="phone">{PHONE}</span>
          </a>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <img
          src={heroBg}
          alt="Volcano at sunset"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 md:pt-24 md:pb-28 text-center">
          <p className="font-script text-2xl md:text-3xl text-marigold mb-2">¡Bienvenidos a!</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-none">
            <span className="text-chili text-stroke-dark">CASA </span>
            <span className="text-cactus text-stroke-dark">MEXICO</span>
          </h1>
          <p className="mt-3 font-display text-2xl md:text-3xl text-cream/90 tracking-[0.3em]">
            R E S T A U R A N T
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-cream/90 text-lg">
            Family recipes, sizzling fajitas, fresh seafood and the kind of guacamole worth driving
            across town for. Right here in Taylorsville.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 bg-chili text-primary-foreground font-bold px-6 py-3 rounded-full shadow-lg shadow-chili/30 hover:scale-105 transition"
            >
              📞 Call {PHONE}
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 bg-cactus text-secondary-foreground font-bold px-6 py-3 rounded-full shadow-lg shadow-cactus/30 hover:scale-105 transition"
            >
              View the Menu
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/80">
            <span>🌶 Authentic Mexican</span>
            <span>👨‍👩‍👧 Kids Menu</span>
          </div>
        </div>
      </header>

      {/* Restaurant Photo */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl overflow-hidden border border-border/40 shadow-xl shadow-black/20">
          <img
            src={restaurantPhoto.url}
            alt="Casa Mexico Restaurant exterior"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Sticky section tabs */}
      <nav
        id="menu"
        className="sticky top-0 z-30 wood-texture border-y border-border/40 backdrop-blur"
      >
        <div className="mx-auto max-w-6xl px-2 overflow-x-auto">
          <ul className="flex gap-1 py-2 min-w-max">
            {SECTIONS.map((s) => {
              const c = colorClasses(s.color);
              const isActive = active === s.id;
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setActive(s.id)}
                    className={`block px-4 py-2 rounded-md font-display tracking-wider text-sm md:text-base transition ${
                      isActive
                        ? `${c.bg} text-white shadow-md`
                        : "text-cream/80 hover:text-cream hover:bg-white/5"
                    }`}
                  >
                    {s.tab}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Photo reassignment hint (Empty as requested) */}
      <div className="mx-auto max-w-6xl px-4 pt-6 flex flex-wrap items-center justify-between gap-3 h-0 overflow-hidden opacity-0">
        <p className="text-xs text-cream/60 italic">
          {"\n"}
        </p>
        <button
          onClick={resetImages}
          className="text-xs px-3 py-1.5 rounded-md border border-border/40 text-cream/80 hover:bg-white/5"
        >
          {"\n"}
        </button>
      </div>

      {/* Menu sections */}
      <main className="mx-auto max-w-6xl px-4 py-12 space-y-20">
        {SECTIONS.map((s, si) => {
          const c = colorClasses(s.color);
          return (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-20"
              data-sb-field-path={`sections[${si}]`}
            >
              {/* Section header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border/30 pb-4">
                <div>
                  <div
                    className={`inline-block ${c.bg} text-white px-4 py-1.5 rounded-md shadow-lg mb-2`}
                  >
                    <span
                      className="font-display tracking-widest text-sm"
                      data-sb-field-path=".tab"
                    >
                      {s.tab}
                    </span>
                  </div>
                  <h2
                    className="text-3xl md:text-4xl font-display tracking-wide text-cream drop-shadow-lg"
                    data-sb-field-path=".label"
                  >
                    {s.label}
                  </h2>
                </div>
                <div className="md:text-right md:max-w-sm">
                  {s.blurb && (
                    <p
                      className="font-script text-2xl md:text-3xl text-cream/90"
                      data-sb-field-path=".blurb"
                    >
                      {s.blurb}
                    </p>
                  )}
                  <p className="mt-1 text-cream/70 text-sm">
                    Tap{" "}
                    <a href={`tel:${PHONE_TEL}`} className={`${c.text} font-bold underline`}>
                      {PHONE}
                    </a>{" "}
                    to order ahead or stop by — we're at {ADDRESS}.
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="mt-6 space-y-8">
                {(s.groups ?? [{ items: s.items ?? [] }]).map((g, gi) => {
                  const groupPath = s.groups ? `.groups[${gi}]` : "";
                  return (
                    <div key={gi} data-sb-field-path={groupPath}>
                      {g.title && (
                        <h3
                          className={`font-display text-2xl tracking-wider ${c.text} mb-1`}
                          data-sb-field-path=".title"
                        >
                          {g.title}
                        </h3>
                      )}
                      {g.note && (
                        <p className="text-sm text-cream/70 italic mb-3" data-sb-field-path=".note">
                          {g.note}
                        </p>
                      )}
                      <div
                        className={`grid gap-px ${c.soft} rounded-xl overflow-hidden border ${c.border}/30 md:grid-cols-2`}
                      >
                        {g.items.map((it, i) => {
                          const k = itemKey(s.id, it);
                          const sbFieldPath = `.items[${i}]`;
                          return (
                            <ItemRow
                              key={i}
                              it={it}
                              accent={c.text}
                              image={images[k]}
                              onDragStartImage={() => setDraggingFrom(k)}
                              onDropOnItem={() => handleDrop(k)}
                              sbFieldPath={sbFieldPath}
                            />
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        {/* Full Bar Section */}
        <section className="space-y-6">
          <div className="flex items-baseline justify-between gap-4 border-b border-border/40 pb-3">
            <h2 className="font-display text-4xl md:text-5xl tracking-tight text-accent">
              Full Bar
            </h2>
            <span className="text-sm text-cream/70 italic">Tequila · Whiskey · Cocktails</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-2 rounded-2xl overflow-hidden border border-border/40 shadow-xl shadow-black/20">
              <img src={barFullbar.url} alt="Casa Mexico full bar" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-border/40 shadow-xl shadow-black/20">
              <img src={barTequila.url} alt="Tequila selection" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-border/40 shadow-xl shadow-black/20">
              <img src={barWhiskey.url} alt="Whiskey selection" className="w-full h-auto object-cover" />
            </div>
          </div>
        </section>



        <p className="text-xs text-cream/60 italic text-center max-w-2xl mx-auto">
          *Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase
          your risk of foodborne illness, especially if you have certain medical conditions. Prices
          subject to change.
        </p>
      </main>

      {/* Footer */}
      <footer className="wood-texture border-t border-border/40 mt-8">
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-display text-3xl">
              <span className="text-chili">Casa </span>
              <span className="text-cactus">Mexico</span>
            </h3>
            <p className="mt-2 text-cream/80 text-sm">
              Authentic Mexican kitchen serving Taylorsville and Alexander County.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xl text-marigold tracking-wider">Visit</h4>
            <p className="mt-2 text-cream/90">{ADDRESS}</p>
            <p className="mt-1 text-cream/80 text-sm">{HOURS}</p>
          </div>
          <div>
            <h4 className="font-display text-xl text-marigold tracking-wider">Call to Order</h4>
            <a
              href={`tel:${PHONE_TEL}`}
              className="mt-2 inline-block font-display text-3xl text-chili hover:text-marigold transition"
            >
              {PHONE}
            </a>
          </div>
        </div>
        <div className="border-t border-border/30 py-4 text-center text-xs text-cream/60">
          © {new Date().getFullYear()} Casa Mexico Restaurant. ¡Gracias por visitarnos!
        </div>
      </footer>

      {/* Floating call button (mobile) */}
      <a
        href={`tel:${PHONE_TEL}`}
        className="md:hidden fixed bottom-5 right-5 z-40 bg-chili text-white rounded-full shadow-2xl shadow-chili/40 px-5 py-3 font-bold flex items-center gap-2 active:scale-95"
      >
        📞 Call
      </a>
    </div>
  );
}
