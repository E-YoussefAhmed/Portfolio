export const dynamic = "force-dynamic";

import type { Metadata } from "next";

import WorksSlider from "@/components/section/works/works-slider";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Explore the impressive portfolio of projects executed by DevLab Tech. From dynamic web applications to robust software solutions, delve into our works to witness firsthand the expertise and creativity we bring to every project.",
  alternates: {
    canonical: "/works",
  },
};

export default async function WorksPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const { tag } = await searchParams;

  return <WorksSlider tag={tag} />;
}
