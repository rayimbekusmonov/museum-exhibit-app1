import { redirect } from "next/navigation";
import { exhibitsData } from "@/data/exhibitsData";

// Supports the query-param QR format: https://your-domain.vercel.app/?exhibitId=7
// by immediately redirecting to the canonical dynamic route
// /exhibit/[id], which is the one that gets statically generated per
// exhibit for near-instant loads on a scanned phone.
export default function Home({
  searchParams
}: {
  searchParams: { exhibitId?: string };
}) {
  const raw = Number(searchParams.exhibitId);
  const valid = exhibitsData.some((e) => e.id === raw);
  redirect(`/exhibit/${valid ? raw : 1}`);
}
