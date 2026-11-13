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
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/companies" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  return (
    <header className="relative z-20 mx-auto mt-6 w-[calc(100%-48px)] max-w-[1320px] rounded-2xl bg-accent">
      <nav aria-label="Main navigation" className="flex h-[74px] items-center justify-between gap-6 px-6">
        <Link href="/" className="shrink-0" aria-label="Hireloop home">
          <Image src="/assets/images/logo.png" alt="Hireloop" width={154} height={44} priority className="h-[44px] w-[154px] object-contain" />
        </Link>

        <div className="hidden h-full w-[646px] items-center justify-between gap-4 lg:flex">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-base font-normal text-foreground transition-colors duration-200 hover:text-secondary">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="mr-1 h-8 w-px bg-border" />
            <Button variant="ghost" nativeButton={false} render={<Link href="/login" />} className="h-[58px] w-[106px] bg-transparent text-base font-medium text-primary transition-colors duration-300 hover:bg-transparent hover:text-secondary focus-visible:bg-transparent">Sign In</Button>
            <Button nativeButton={false} render={<Link href="/signup" />} className="h-[52px] w-[143px] rounded-xl text-base font-medium hover:bg-primary/90">Get Started</Button>
          </div>
        </div>

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger aria-label="Open menu" className="rounded-md p-2 text-foreground transition-[color,background-color,transform] duration-200 ease-out hover:rotate-90 hover:bg-accent hover:text-primary active:scale-90 focus-visible:outline-2 focus-visible:outline-ring motion-reduce:transition-none">
              <Menu className="size-6" />
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="pr-10 text-xl font-semibold">Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <SheetClose key={link.href} nativeButton={false} render={<Link href={link.href} />} className="rounded-md px-3 py-3 text-base text-foreground transition-[color,background-color,transform] duration-200 ease-out hover:bg-accent hover:text-primary active:scale-[0.98] motion-reduce:transition-none">
                    {link.label}
                  </SheetClose>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
                <SheetClose nativeButton={false} render={<Link href="/login" />} className="rounded-md px-3 py-2 text-center text-primary transition-[color,background-color,transform] duration-200 ease-out hover:bg-accent hover:text-secondary active:scale-[0.98] motion-reduce:transition-none">Sign In</SheetClose>
                <SheetClose nativeButton={false} render={<Link href="/signup" />} className="rounded-md bg-primary px-3 py-2 text-center font-medium text-primary-foreground transition-[background-color,transform] duration-200 ease-out hover:bg-primary/80 active:scale-[0.98] motion-reduce:transition-none">Get Started</SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
