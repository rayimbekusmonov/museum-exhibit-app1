import { notFound } from "next/navigation";
import { exhibitsData, getExhibitById } from "@/data/exhibitsData";
import GalleryRail from "@/components/GalleryRail";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ExhibitView from "@/components/ExhibitView";

// Pre-render every exhibit page at build time — instant loads for
// anyone scanning a physical QR code, no server round-trip needed.
export function generateStaticParams() {
  return exhibitsData.map((e) => ({ id: String(e.id) }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const exhibit = getExhibitById(Number(params.id));
  return {
    title: exhibit ? `${exhibit.en.shortTitle} — Museum Exhibit Guide` : "Exhibit"
  };
}

export default function ExhibitPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const exhibit = getExhibitById(id);

  if (!exhibit) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-ink-950">
      <LanguageSwitcher />
      <GalleryRail activeId={exhibit.id} />
      <ExhibitView exhibit={exhibit} />
    </main>
  );
}
