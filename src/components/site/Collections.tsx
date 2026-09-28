import { useState } from "react";
import { Button } from "@/components/ui/button";
import { collections } from "@/data/portfolio";
import { ImageReveal, Reveal } from "./Reveal";
import { Lightbox } from "./Lightbox";

function Chapter({
  index,
  onOpen,
}: {
  index: number;
  onOpen: (collection: number, image: number) => void;
}) {
  const c = collections[index]!;
  const im = (n: number) => c.images[n]!;
  const dark = index === 1;
  const grey = index === 2;

  const shellClass = dark
    ? "bg-ink text-paper"
    : grey
      ? "bg-smoke text-paper"
      : "bg-paper text-ink";

  const Head = (
    <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-end">
      <span className="display text-[clamp(4rem,14vw,11rem)] leading-none text-gold opacity-90">
        {c.number}
      </span>
      <div className="min-w-0">
        <h2 className="display text-[clamp(2.5rem,7vw,5.5rem)] uppercase">{c.title}</h2>
        <p className="mt-4 max-w-md font-display text-lg italic opacity-80 sm:text-xl">
          {c.concept}
        </p>
      </div>
    </div>
  );

  const Details = (
    <ul className="space-y-3">
      {c.details.map((d) => (
        <li key={d} className="label border-b border-current/15 pb-3 opacity-70">
          {d}
        </li>
      ))}
    </ul>
  );

  const ViewGallery = (
    <Button
      onClick={() => onOpen(index, 0)}
      variant="ghost"
      className="label link-underline mt-8 h-auto rounded-none p-0 text-gold hover:bg-transparent hover:text-gold"
    >
      View gallery ({String(c.images.length).padStart(2, "0")})
    </Button>
  );

  return (
    <section className={`relative px-6 py-24 sm:px-10 sm:py-32 ${shellClass}`}>
      <span className="vertical-label absolute right-3 top-28 hidden opacity-40 lg:block">
        {c.title} — Chapter {c.number}
      </span>

      <div className="mx-auto max-w-7xl">
        <Reveal>{Head}</Reveal>
        <div className="hairline mt-12" />

        {index === 0 && (
          <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-12">
            <ImageReveal
              {...im(0)}
              className="aspect-[3/4] md:col-span-7"
              onClick={() => onOpen(index, 0)}
            />
            <div className="md:col-span-5 md:pt-16 lg:col-span-4 lg:col-start-9 lg:pt-28">
              <ImageReveal
                {...im(1)}
                className="aspect-[4/5]"
                delay={0.15}
                onClick={() => onOpen(index, 1)}
              />
              <Reveal delay={0.2} className="mt-10">
                {Details}
                {ViewGallery}
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:col-span-10 md:col-start-2 lg:col-span-7">
              <ImageReveal {...im(2)} className="aspect-[3/4]" onClick={() => onOpen(index, 2)} />
              <ImageReveal
                {...im(4)}
                className="aspect-[3/4] translate-y-8"
                delay={0.1}
                onClick={() => onOpen(index, 4)}
              />
            </div>
          </div>
        )}

        {index === 1 && (
          <>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              <ImageReveal
                {...im(0)}
                className="aspect-[3/4] md:col-span-2 md:aspect-[16/11]"
                onClick={() => onOpen(index, 0)}
              />
              <ImageReveal
                {...im(3)}
                className="aspect-[3/4]"
                delay={0.12}
                onClick={() => onOpen(index, 3)}
              />
            </div>
            <div className="-mx-6 mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:-mx-10 sm:px-10">
              {c.images.slice(4).map((img, i) => (
                <ImageReveal
                  key={img.src}
                  {...img}
                  className="aspect-[3/4] w-[74vw] shrink-0 snap-start sm:w-[34vw] lg:w-[24vw]"
                  delay={i * 0.06}
                  onClick={() => onOpen(index, i + 4)}
                />
              ))}
            </div>
            <div className="mt-14 grid gap-10 md:grid-cols-[1fr_1fr]">
              <Reveal>{Details}</Reveal>
              <Reveal delay={0.1}>{ViewGallery}</Reveal>
            </div>
          </>
        )}

        {index === 2 && (
          <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2">
            <ImageReveal
              {...im(0)}
              className="aspect-[3/4] md:aspect-[3/4.4]"
              onClick={() => onOpen(index, 0)}
            />
            <div className="grid content-start gap-6 sm:gap-8">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <ImageReveal
                  {...im(1)}
                  className="aspect-square"
                  delay={0.08}
                  onClick={() => onOpen(index, 1)}
                />
                <ImageReveal
                  {...im(3)}
                  className="aspect-square"
                  delay={0.16}
                  onClick={() => onOpen(index, 3)}
                />
              </div>
              <ImageReveal
                {...im(2)}
                className="aspect-[16/10]"
                delay={0.2}
                onClick={() => onOpen(index, 2)}
              />
              <Reveal delay={0.1}>
                {Details}
                {ViewGallery}
              </Reveal>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function Collections() {
  const [open, setOpen] = useState<{ c: number; i: number } | null>(null);

  return (
    <div id="work">
      {collections.map((_, i) => (
        <Chapter key={i} index={i} onOpen={(c, img) => setOpen({ c, i: img })} />
      ))}

      <Lightbox
        images={open ? collections[open.c]!.images : []}
        index={open ? open.i : null}
        title={open ? collections[open.c]!.title.toUpperCase() : ""}
        onClose={() => setOpen(null)}
        onIndexChange={(i) => setOpen((s) => (s ? { ...s, i } : s))}
      />
    </div>
  );
}
