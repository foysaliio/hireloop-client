"use client";

import { Dialog } from "@base-ui/react/dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Sheet = Dialog.Root;
const SheetTrigger = Dialog.Trigger;
const SheetClose = Dialog.Close;
const SheetTitle = Dialog.Title;

function SheetContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Backdrop className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ease-out data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 motion-reduce:transition-none" />
      <Dialog.Popup
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(20rem,85vw)] flex-col border-l border-border bg-card p-6 text-card-foreground shadow-lg outline-none transition-transform duration-300 ease-out data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full motion-reduce:transition-none",
          className,
        )}
      >
        {children}
        <Dialog.Close
          aria-label="Close menu"
          className="absolute right-4 top-4 rounded-md p-2 text-muted-foreground transition-[color,background-color,transform] duration-200 ease-out hover:rotate-90 hover:bg-accent hover:text-foreground active:scale-90 focus-visible:outline-2 focus-visible:outline-ring motion-reduce:transition-none"
        >
          <X className="size-5" />
        </Dialog.Close>
      </Dialog.Popup>
    </Dialog.Portal>
  );
}

export { Sheet, SheetTrigger, SheetClose, SheetTitle, SheetContent };
