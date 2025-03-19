"use client";

import { useCallback } from "react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

const WorkModalLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <>
      <Dialog open onOpenChange={onDismiss}>
        <DialogTitle>fasdf</DialogTitle>
        <DialogContent className="sm:min-w-fit">{children}</DialogContent>
      </Dialog>
    </>
  );
};

export default WorkModalLayout;
