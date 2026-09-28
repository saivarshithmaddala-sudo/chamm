import { motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { about, craft, craftCaptions, designer, statement, timeline } from "@/data/portfolio";
import { ImageReveal, Reveal } from "./Reveal";

export function Statement() {
  return (
    <section id="statement" className="bg-paper px-6 py-28 text-ink sm:px-10 sm:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="label mb-12 text-muted-foreground">Statement</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-display text-[clamp(1.9rem,5.2vw,4.2rem)] italic leading-[1.06] tracking-tight">
            “{statement.quote}”
          </p>
        </Reveal>
        <div className="hairline my-12" />
        <Reveal delay={0.2}>
          <p className="max-w-xl text-base font-light leading-relaxed text-muted-foreground">
            {statement.intro}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Craft() {
  const strip = [...craft, ...craft];
  return (
    <section className="overflow-hidden bg-ink py-24 text-paper">
      <div className="px-6 sm:px-10">
        <p className="label mb-10 text-chrome">Details — Craft</p>
      </div>
      <motion.div
        className="flex w-max gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
      >
        {strip.map((img, i) => (
          <figure key={i} className="zoom-frame w-[58vw] shrink-0 sm:w-[30vw] lg:w-[21vw]">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ objectPosition: img.position }}
              />
            </div>
            <figcaption className="label mt-4 text-chrome">
              {craftCaptions[i % craftCaptions.length]}
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="bg-paper px-6 py-28 text-ink sm:px-10 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1fr] lg:gap-24">
        <ImageReveal {...about.portrait} className="aspect-[3/4] w-full lg:sticky lg:top-28" />
        <div>
          <Reveal>
            <p className="label mb-8 text-muted-foreground">About</p>
            <h2 className="display text-[clamp(2.2rem,6vw,4.5rem)] uppercase">{designer.name}</h2>
          </Reveal>
          <div className="hairline my-10" />
          <Reveal delay={0.1}>
            {about.bio.map((p) => (
              <p
                key={p}
                className="mb-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-12">
            <p className="label mb-5 text-gold">Skills</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {about.skills.map((s) => (
                <li key={s} className="label">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="mt-10">
            <p className="label mb-5 text-gold">Languages</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {about.languages.map((s) => (
                <li key={s} className="label">
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="bg-smoke px-6 py-28 text-paper sm:px-10 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="label mb-10 text-chrome">Experience &amp; Education</p>
        </Reveal>
        <div className="hairline" />
        {timeline.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.06}>
            <article className="grid gap-4 border-b border-paper/15 py-10 md:grid-cols-[minmax(0,14rem)_1fr] md:gap-12">
              <p className="label text-gold">{t.period}</p>
              <div className="min-w-0">
                <h3 className="font-display text-2xl tracking-tight sm:text-3xl">{t.title}</h3>
                <p className="mt-3 max-w-2xl text-sm font-light leading-relaxed text-chrome">
                  {t.body}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = encodeURIComponent(
      `Hi ${designer.name}!\n\n${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
    );
    const digits = designer.phone.replace(/\D/g, "");
    window.open(`https://wa.me/${digits}?text=${text}`, "_blank", "noopener");
    setSent(true);
    toast("Opening WhatsApp with your message ready to send.");
  };

  const field =
    "w-full border-0 border-b border-paper/25 bg-transparent py-3 text-base font-light text-paper outline-none transition-colors placeholder:text-chrome/60 focus:border-gold";

  return (
    <footer id="contact" className="bg-ink px-6 py-28 text-paper sm:px-10 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="display max-w-4xl text-[clamp(2.2rem,8vw,6.5rem)]">
            Let’s create something <span className="italic">extraordinary.</span>
          </h2>
        </Reveal>

        <div className="hairline my-14" />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <dl className="space-y-8">
              <div>
                <dt className="label mb-2 text-gold">Email</dt>
                <dd>
                  <a
                    href={`mailto:${designer.email}`}
                    className="link-underline font-display text-xl tracking-tight sm:text-2xl"
                  >
                    {designer.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label mb-2 text-gold">Phone</dt>
                <dd>
                  <a
                    href={`tel:${designer.phone.replace(/\s/g, "")}`}
                    className="link-underline font-display text-xl tracking-tight sm:text-2xl"
                  >
                    {designer.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="label mb-2 text-gold">Location</dt>
                <dd className="text-sm font-light text-chrome">{designer.location}</dd>
              </div>
            </dl>

            <a
              href={designer.resumeUrl}
              download
              className="label link-underline mt-12 inline-block text-paper"
            >
              Download Résumé
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="label text-chrome">
                  Name
                </label>
                <input id="name" name="name" required className={field} />
              </div>
              <div>
                <label htmlFor="email" className="label text-chrome">
                  Email
                </label>
                <input id="email" name="email" type="email" required className={field} />
              </div>
              <div>
                <label htmlFor="message" className="label text-chrome">
                  Message
                </label>
                <textarea id="message" name="message" rows={4} required className={field} />
              </div>
              <div>
                <button type="submit" className="label link-underline text-gold">
                  {sent ? "Sent — thank you" : "Send message"}
                </button>
                <p className="mt-3 text-xs font-light tracking-wide text-chrome/70">
                  Opens WhatsApp with your message ready — sent to {designer.phone}
                </p>
              </div>
            </form>
          </Reveal>
        </div>

        <div className="hairline mt-20" />
        <p className="label mt-8 text-chrome">© 2026 {designer.name}</p>
      </div>
    </footer>
  );
}
