import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Cursor } from "@/components/site/Cursor";
import { Intro } from "@/components/site/Intro";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Collections } from "@/components/site/Collections";
import { About, Contact, Craft, Experience, Statement } from "@/components/site/Sections";

const title = "Chamundeshwari";
const description =
  "Final-semester collection by fashion designer Chamundeshwari: Ice, Mirror and Noir — shimmer, hand-cut mirror tiles and sheer structural tulle.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:site_name", content: "Chamundeshwari" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-paper">
      <Intro />
      <Cursor />
      <Nav />
      <Hero />
      <Statement />
      <Collections />
      <Craft />
      <About />
      <Experience />
      <Contact />
      <Toaster />
    </main>
  );
}
