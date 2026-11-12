"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Find Jobs", href: "/jobs" },
  { label: "Companies", href: "/companies" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  return (
    <header className="border-b border-border bg-background">
      <nav aria-label="Main navigation" className="mx-auto flex h-[74px] max-w-[1440px] items-center justify-between gap-6 px-6">
        <Link href="/" className="shrink-0" aria-label="Hireloop home">
          <Image src="/assets/images/logo.png" alt="Hireloop" width={154} height={44} priority className="h-[44px] w-[154px] object-contain" />
        </Link>

        <div className="hidden h-full w-[646px] items-center justify-between gap-4 lg:flex">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" nativeButton={false} render={<Link href="/login" />} className="h-[58px] w-[106px]">Log in</Button>
            <Button nativeButton={false} render={<Link href="/post-job" />} className="h-[52px] w-[143px]">Post a Job</Button>
          </div>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open menu" className="rounded-md p-2 text-foreground hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring">
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="pr-10 text-xl font-semibold">Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} nativeButton={false} render={<Link href={link.href} />} className="rounded-md px-3 py-3 text-base text-foreground hover:bg-accent">
                    {link.label}
                  </SheetClose>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
                <SheetClose nativeButton={false} render={<Link href="/login" />} className="rounded-md px-3 py-2 text-center text-foreground hover:bg-accent">Log in</SheetClose>
                <SheetClose nativeButton={false} render={<Link href="/post-job" />} className="rounded-md bg-primary px-3 py-2 text-center font-medium text-primary-foreground hover:bg-primary/80">Post a Job</SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
