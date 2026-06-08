import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE = "828-352-9901";
const PHONE_TEL = "+18283529901";
const ADDRESS = "60 Liledoun Rd, Taylorsville, NC 28681";
const HOURS = "Open Daily · 11am – 10pm";

type Item = { n?: string; name: string; desc?: string; price: string };
type Section = {
  id: string;
  label: string;
  tab: string;
  color: "chili" | "cactus" | "marigold" | "agave" | "mesa";
  blurb?: string;
  items: Item[];
};

const SECTIONS: Section[] = [
  {
    id: "appetizers",
    label: "Appetizers & Soups",
    tab: "Appetizers",
    color: "mesa",
    blurb: "Start it right. Chips down, guac up.",
    items: [
      { name: "Sampler Appetizers", desc: "4 wings, 2 taquitos, mushroom & spinach quesadilla, guacamole.", price: "13.25" },
      { name: "Guacamole Traditional", price: "6.99" },
      { name: "Choriqueso", price: "7.99" },
      { name: "Spinach Dip", price: "6.99" },
      { name: "Cheese Dip", price: "4.99" },
      { name: "Chicken Wings", desc: "Plain, mild, hot or BBQ.", price: "11.75" },
      { name: "Elote", price: "4.99" },
      { name: "Nachos Fajitas Texas", desc: "Chicken, steak & shrimp.", price: "14.99" },
      { name: "Sopa de Mariscos", desc: "Shrimp, fish, scallops, vegetables.", price: "17.99" },
      { name: "Sopa de Camarón", desc: "Shrimp and vegetables.", price: "14.99" },
      { name: "Menudo", desc: "Traditional beef stomach soup with hand-made tortillas.", price: "12.99" },
      { name: "Sopa de Pollo", price: "10.99" },
    ],
  },
  {
    id: "lunch",
    label: "Lunch Specials",
    tab: "Lunch",
    color: "chili",
    blurb: "Served 11am – 3:30pm · *$1 extra on Sundays.",
    items: [
      { n: "1", name: "Speedy Gonzalez", desc: "Taco & enchilada with rice or beans.", price: "7.25" },
      { n: "5", name: "Chile Relleno", desc: "Served with rice and beans.", price: "7.99" },
      { n: "12", name: "Chimichanga", desc: "Soft deep-fried burrito with chicken or shredded beef, cheese dip.", price: "8.50" },
      { n: "13", name: "Shrimp Chimichanga", desc: "Grilled shrimp wrapped in deep-fried flour tortilla.", price: "9.99" },
      { n: "21", name: "Fajitas Chicken", desc: "On a hot skillet with rice, beans and salad.", price: "10.99" },
      { n: "23", name: "Texas Fajitas", desc: "Chicken, steak & shrimp.", price: "12.75" },
      { n: "27", name: "Huevos Rancheros", price: "8.99" },
      { n: "34", name: "Coctel de Camarón", desc: "House cocktail sauce, avocado, pico de gallo.", price: "11.99" },
      { n: "36", name: "Carne Asada", desc: "Grilled thin tender steak with onions.", price: "11.99" },
      { n: "53", name: "Volcanito", desc: "Chicken or steak with rice & beans on the side and cheese dip on top.", price: "11.99" },
    ],
  },
  {
    id: "specialties",
    label: "Specialties",
    tab: "Specialties",
    color: "mesa",
    blurb: "The kitchen's pride. Cast iron, big plates, real fire.",
    items: [
      { n: "1", name: "Dos Amigos", desc: "Half chicken breast and tender thin steak with grilled onions.", price: "16.25" },
      { n: "3", name: "Molcajete", desc: "Steak, chicken, shrimp, chorizo, onions & cactus in a sizzling stone bowl.", price: "28.99" },
      { n: "4", name: "Carnitas Dinner", desc: "Crispy outside, tender inside. Grilled onions, rice, beans, salad.", price: "14.99" },
      { n: "10", name: "Carne Asada", desc: "8oz tender thin steak, grilled onions, avocado, jalapeños.", price: "16.25" },
      { n: "11", name: "Milanesa", desc: "Breaded chicken breast, golden brown.", price: "16.25" },
      { n: "17", name: "Steak & Shrimp", desc: "T-bone steak with grilled shrimp.", price: "18.99" },
      { n: "22", name: "Mole Poblano", desc: "Chicken in thick brown sauce with chilies, garlic, chocolate, cinnamon.", price: "12.50" },
      { n: "28", name: "Chipotle Steak", desc: "Rib-eye chunks with onions, zucchini, squash, chipotle sauce.", price: "16.25" },
    ],
  },
  {
    id: "burritos",
    label: "Burritos & Quesadillas",
    tab: "Burritos",
    color: "marigold",
    items: [
      { n: "39", name: "Burrito Grande", desc: "Extra large, shredded beef, rice, beans, pico de gallo.", price: "11.99" },
      { n: "40", name: "Burrito California", desc: "10\" with chicken or steak, rice, beans, guacamole, cheese dip.", price: "13.99" },
      { n: "43", name: "Burrito Texano", desc: "Chicken, steak & shrimp under cheese dip with rice.", price: "15.99" },
      { n: "44", name: "Burrito Marino", desc: "Shrimp, scallops, crab meat & grilled onions with cheese dip.", price: "15.99" },
      { n: "49", name: "Chile Colorado Burrito", desc: "Steak, rice, beans, chile colorado sauce.", price: "14.99" },
      { n: "50", name: "Burrito Verde", desc: "Pork, rice, beans in chile verde sauce.", price: "14.50" },
      { n: "52", name: "Quesadilla Texana", desc: "Chicken, steak & shrimp with vegetables.", price: "15.99" },
      { n: "54", name: "Quesadilla San Francisco", desc: "X-large, grilled onions, mushrooms, chicken or shrimp.", price: "13.99" },
      { n: "56", name: "Quesadilla Marina", desc: "Shrimp, scallops & crab meat with grilled onions.", price: "15.99" },
    ],
  },
  {
    id: "fajitas",
    label: "Fajitas",
    tab: "Fajitas",
    color: "cactus",
    blurb: "Sizzling skillets · rice, beans & salad included.",
    items: [
      { n: "65", name: "Texas Fajitas", desc: "Chicken, steak & shrimp · for two $28.25", price: "17.25" },
      { n: "66", name: "Chicken Fajitas", desc: "For two $24.99", price: "15.50" },
      { n: "67", name: "Steak Fajitas", desc: "For two $27.99", price: "16.25" },
      { n: "71", name: "Fajitas Marinas", desc: "Shrimp, scallops, fish & vegetables.", price: "17.99" },
      { n: "73", name: "Fajitas Mexicanas", desc: "Chicken, shrimp & chorizo with peppers, zucchini, squash, queso.", price: "16.99" },
      { n: "74", name: "Fajita Seafood Tropical", desc: "Fish, shrimp, scallops, crab on a pineapple bowl.", price: "19.99" },
      { n: "75", name: "Fajitas Rancheras", desc: "Steak, chicken, pork & chorizo on a pineapple bowl.", price: "18.99" },
    ],
  },
  {
    id: "enchiladas",
    label: "Enchiladas & Vegetarian",
    tab: "Enchiladas",
    color: "cactus",
    items: [
      { n: "57", name: "Enchiladas Supremas", desc: "Beef, chicken, bean & cheese topped with salad.", price: "12.25" },
      { n: "60", name: "Enchiladas Poblanas", desc: "Three chicken enchiladas with mole poblano.", price: "12.25" },
      { n: "62", name: "Enchiladas Verdes", desc: "Chicken or beef topped with green sauce.", price: "12.25" },
      { n: "64", name: "Enchiladas de Camarón", desc: "Three shrimp enchiladas with red sauce.", price: "14.99" },
      { n: "76", name: "Veggie Enchiladas Supreme", desc: "Cheese, bean and spinach with salad.", price: "11.99" },
      { n: "78", name: "Veggie A.C.P.", desc: "Onions, zucchini, mushrooms, broccoli over rice with cheese dip.", price: "12.25" },
      { n: "80", name: "Green Quesadilla", desc: "Spinach, onions and tomatoes.", price: "12.25" },
      { n: "82", name: "Enchiladas de Papa", desc: "Three potato enchiladas.", price: "11.99" },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    tab: "Seafood",
    color: "agave",
    blurb: "From the Gulf — Acapulco-style.",
    items: [
      { n: "83", name: "Camarones al Mojo de Ajo", desc: "Shrimp in special garlic sauce. Rice and salad.", price: "16.25" },
      { n: "84", name: "Camarones a la Diabla", desc: "Grilled shrimp in hot diabla sauce.", price: "16.25" },
      { n: "92", name: "Sopa de Mariscos", desc: "Shrimp, scallops, fish & vegetables.", price: "17.99" },
      { n: "93", name: "Burrito Marino", desc: "Shrimp, scallops, crab with cheese dip.", price: "15.99" },
      { n: "96", name: "Mojarra Veracruz", desc: "Whole tilapia deep fried, shrimp on top, a la diabla sauce.", price: "19.99" },
      { n: "97", name: "Coctel de Camarón", desc: "Shrimp cocktail with avocado & pico de gallo.", price: "16.99" },
      { n: "99", name: "Ceviche Camarón", desc: "Shrimp cured in lemon, onions, jalapeño, cilantro, avocado.", price: "16.99" },
      { n: "101", name: "El Acapulco", desc: "Shrimp & scallops with grilled zucchini, squash, cheese sauce.", price: "16.99" },
    ],
  },
  {
    id: "combinations",
    label: "Combinations & A La Carte",
    tab: "Combinations",
    color: "chili",
    blurb: "Pick your favorites. Every combination $11.99.",
    items: [
      { n: "1", name: "Two Enchiladas, Rice & One Taco", price: "11.99" },
      { n: "5", name: "Two Tacos, Rice & Beans", price: "11.99" },
      { n: "8", name: "One Chile Relleno, One Enchilada, Rice & Bean", price: "11.99" },
      { n: "11", name: "Two Burritos, Rice & Bean", price: "11.99" },
      { n: "13", name: "One Burrito, One Enchilada & One Tamal", price: "11.99" },
      { name: "Pick 3 — Rice, Beans, Burrito, Taco, Enchilada, Tamal, Chalupa…", price: "10.99" },
      { name: "Pick 4 — same items as above", price: "11.99" },
      { name: "À La Carte · Hard Shell Taco", desc: "1 for $2.99 · 3 for $7.99", price: "2.99" },
      { name: "À La Carte · Chiles Rellenos", desc: "1 for $3.99 · 3 for $10.99", price: "3.99" },
      { name: "À La Carte · Burritos", desc: "1 for $4.50 · 2 for $8.99", price: "4.50" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts & Sides",
    tab: "Desserts",
    color: "marigold",
    items: [
      { name: "Sopapilla", price: "4.25" },
      { name: "Flan", price: "4.75" },
      { name: "Churros", price: "6.25" },
      { name: "Churros Cheesecake", price: "6.25" },
      { name: "Nieve", price: "5.99" },
      { name: "Side · Beans", price: "3.99" },
      { name: "Side · Rice", price: "3.99" },
      { name: "Side · Tortillas", price: "1.75" },
      { name: "Side · Pico de Gallo", price: "2.75" },
      { name: "Side · French Fries", price: "3.99" },
    ],
  },
  {
    id: "kids",
    label: "Kids Plates",
    tab: "Kids",
    color: "agave",
    blurb: "Only for kids 10 and under.",
    items: [
      { n: "1", name: "Cheeseburger", price: "6.99" },
      { n: "2", name: "Chicken Tenders", price: "6.99" },
      { n: "3", name: "Hot Dog", price: "6.99" },
      { n: "4", name: "Pizza", price: "6.50" },
      { n: "5", name: "Quesadilla, Rice & Beans", price: "6.99" },
      { n: "8", name: "Beef or Chicken Burrito with Rice & Beans", price: "7.25" },
      { n: "9", name: "Kids A.C.C. Shrimp", price: "7.99" },
    ],
  },
];

function colorClasses(c: Section["color"]) {
  const map = {
    chili: { bg: "bg-chili", text: "text-chili", border: "border-chili", soft: "bg-chili/10" },
    cactus: { bg: "bg-cactus", text: "text-cactus", border: "border-cactus", soft: "bg-cactus/10" },
    marigold: { bg: "bg-marigold", text: "text-marigold", border: "border-marigold", soft: "bg-marigold/10" },
    agave: { bg: "bg-agave", text: "text-agave", border: "border-agave", soft: "bg-agave/10" },
    mesa: { bg: "bg-mesa", text: "text-mesa", border: "border-mesa", soft: "bg-mesa/10" },
  } as const;
  return map[c];
}

function Index() {
  const [active, setActive] = useState(SECTIONS[0].id);

  return (
    <div className="min-h-screen text-foreground">
      {/* Top phone bar */}
      <div className="bg-chili text-primary-foreground text-sm">
        <div className="mx-auto max-w-6xl px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <span className="font-medium">📍 {ADDRESS}</span>
          <span className="font-medium">🕒 {HOURS}</span>
          <a href={`tel:${PHONE_TEL}`} className="font-bold tracking-wide hover:underline">
            📞 {PHONE}
          </a>
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, oklch(0.45 0.15 30) 0%, transparent 55%), radial-gradient(ellipse at 80% 30%, oklch(0.4 0.13 280) 0%, transparent 55%), linear-gradient(180deg, oklch(0.3 0.08 25), oklch(0.16 0.025 45))",
          }}
        />
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 md:pt-24 md:pb-28 text-center">
          <p className="font-script text-2xl md:text-3xl text-marigold mb-2">¡Bienvenidos a!</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display leading-none">
            <span className="text-chili text-stroke-dark">CASA </span>
            <span className="text-cactus text-stroke-dark">MEXICO</span>
          </h1>
          <p className="mt-3 font-display text-2xl md:text-3xl text-cream/90 tracking-[0.3em]">
            R E S T A U R A N T
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-cream/80 text-lg">
            Family recipes, sizzling fajitas, fresh seafood and the kind of guacamole worth
            driving across town for. Right here in Taylorsville.
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
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/70">
            <span>🌶 Authentic Mexican</span>
            <span>🦐 Fresh Seafood</span>
            <span>🍹 Margaritas & Piña Coladas</span>
            <span>👨‍👩‍👧 Kids Menu</span>
          </div>
        </div>
      </header>

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
                        : "text-cream/70 hover:text-cream hover:bg-white/5"
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

      {/* Menu sections */}
      <main className="mx-auto max-w-6xl px-4 py-12 space-y-16">
        {SECTIONS.map((s) => {
          const c = colorClasses(s.color);
          return (
            <section key={s.id} id={s.id} className="scroll-mt-20">
              <div className={`inline-block ${c.bg} text-white px-5 py-2 rounded-md shadow-lg`}>
                <h2 className="text-3xl md:text-4xl font-display tracking-wide">{s.label}</h2>
              </div>
              {s.blurb && (
                <p className="mt-3 font-script text-2xl text-cream/80">{s.blurb}</p>
              )}
              <div className={`mt-6 grid gap-px ${c.soft} rounded-xl overflow-hidden border ${c.border}/30 md:grid-cols-2`}>
                {s.items.map((it, i) => (
                  <div
                    key={i}
                    className="bg-card/80 backdrop-blur p-5 hover:bg-card transition flex gap-4"
                  >
                    {it.n && (
                      <span className={`font-display text-2xl ${c.text} shrink-0 w-10`}>
                        {it.n}
                      </span>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-xl tracking-wide text-cream">
                          {it.name}
                        </h3>
                        <span className={`font-display text-xl ${c.text} shrink-0`}>
                          ${it.price}
                        </span>
                      </div>
                      {it.desc && (
                        <p className="mt-1 text-sm text-cream/70 leading-relaxed">{it.desc}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        <p className="text-xs text-cream/50 italic text-center max-w-2xl mx-auto">
          *Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase
          your risk of foodborne illness, especially if you have certain medical conditions.
          Prices subject to change.
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
            <p className="mt-2 text-cream/70 text-sm">
              Authentic Mexican kitchen serving Taylorsville and Alexander County.
            </p>
          </div>
          <div>
            <h4 className="font-display text-xl text-marigold tracking-wider">Visit</h4>
            <p className="mt-2 text-cream/80">{ADDRESS}</p>
            <p className="mt-1 text-cream/70 text-sm">{HOURS}</p>
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
        <div className="border-t border-border/30 py-4 text-center text-xs text-cream/50">
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
