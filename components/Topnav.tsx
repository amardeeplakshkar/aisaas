'use client';
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
import { PanelsTopLeft, ScanLine } from "lucide-react";
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'

const Topnav = () => {
  return (
    <div className="navbar p-4 flex md:justify-end justify-between">
      <Sheet>
        <SheetTrigger className="md:hidden">
          <PanelsTopLeft />
        </SheetTrigger>
        <SheetContent className="bg-slate-900 w-80" side="left">
          <Navbar />
        </SheetContent>
      </Sheet>
      <div className="size-7">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>);
}

export default Topnav;