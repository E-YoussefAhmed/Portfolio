"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";

import { Button } from "@/components/ui/button";

const Tags = ({ filters }: { filters: ITag[] }) => {
  const searchParams = useSearchParams();

  const tag = useMemo(() => {
    return searchParams.get("tag") || "";
  }, [searchParams]);

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
      <Button variant={tag === "" ? "default" : "secondary"} asChild size="sm">
        <Link href="/works" className="text-xs sm:text-sm">
          All
        </Link>
      </Button>
      {filters.map((filter) => (
        <Button
          variant={filter.tag === tag ? "default" : "secondary"}
          asChild
          size="sm"
          key={filter._id}
        >
          <Link
            href={`/works${filter.tag === "all" ? "" : `?tag=${filter.tag}`}`}
            className="text-xs sm:text-sm"
          >
            {filter.title}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default Tags;
