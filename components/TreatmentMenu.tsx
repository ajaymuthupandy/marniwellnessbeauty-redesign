"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { TreatmentCategory } from "@/data/treatments";
import { FillTile, gridFor, TreatmentCard } from "./TreatmentCard";

type Tab = { id: TreatmentCategory["id"]; label: string; text: string; image: string };

/** Image tabs that switch the treatment grid; #ayurveda, #massage and #beauty deep-link to a tab. */
export function TreatmentMenu({ menu, tabs }: { menu: TreatmentCategory[]; tabs: Tab[] }) {
  const [active, setActive] = useState<Tab["id"]>(menu[0].id);

  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (menu.some((c) => c.id === id)) setActive(id as Tab["id"]);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [menu]);

  const select = (id: Tab["id"]) => {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
  };

  const category = menu.find((c) => c.id === active) ?? menu[0];
  const grid = gridFor(category.items.length);

  return (
    <div className="relative">
      {menu.map((c) => (
        <span key={c.id} id={c.id} className="absolute -top-4" aria-hidden="true" />
      ))}
      <div role="tablist" aria-label="Treatment categories" className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-5">
        {tabs.map((t) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={selected}
              aria-controls="treatment-panel"
              onClick={() => select(t.id)}
              className={`group relative isolate flex min-h-20 items-end overflow-hidden p-3 text-left transition-[box-shadow] sm:min-h-44 sm:p-5 ${
                selected ? "shadow-[inset_0_-5px_0_var(--color-gold-light)]" : ""
              }`}
            >
              <Image
                src={t.image}
                alt=""
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className={`-z-10 object-cover transition-transform duration-700 group-hover:scale-105 ${selected ? "" : "grayscale-[35%]"}`}
              />
              <span
                className={`absolute inset-0 -z-10 transition-colors duration-300 ${
                  selected ? "bg-black/35" : "bg-black/55 group-hover:bg-black/45"
                }`}
              />
              <span>
                <span
                  className={`card-title block text-[0.875rem] leading-none text-white sm:text-[1.25rem] ${selected ? "" : "opacity-80"}`}
                >
                  {t.label}
                </span>
                <span className="mt-1.5 hidden text-[0.9375rem] font-light leading-snug text-white/85 sm:block">{t.text}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="treatment-panel"
        role="tabpanel"
        aria-labelledby={`tab-${category.id}`}
        className={`mt-6 grid gap-4 md:mt-8 md:gap-5 ${grid.className}`}
      >
        {category.items.map((item) => (
          <TreatmentCard key={item.name} item={item} />
        ))}
        {grid.fill && (
          <FillTile
            title="Not sure which to choose?"
            text="Tell us how you feel and we’ll suggest the right treatment for you."
          />
        )}
      </div>
    </div>
  );
}
