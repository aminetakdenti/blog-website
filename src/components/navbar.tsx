"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRightIcon, X } from "lucide-react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(true);
  const nav = ["blog", "projects", "about", "newsletter"];

  return (
    <div className="flex justify-between my-10 relative">
      <div>
        <h3 className="font-semibold text-2xl">Your Name</h3>
      </div>
      <div
        className={`${showMenu ? "flex" : "hidden"
          } flex-col bg-red-300 absolute top-10 w-full  items-center md:w-1/2 md:flex md:flex-row md:items-start justify-end`}
      >
        {nav.map((ele, index) => (
          <NavButton key={index}>{ele}</NavButton>
        ))}
      </div>

      <Button
        onClick={() => setShowMenu(!showMenu)}
        variant="outline"
        size="icon"
        className="flex md:hidden"
      >
        {!showMenu ? <ChevronRightIcon /> : <X />}
      </Button>
    </div>
  );
}

function NavButton({ children }: { children: string }) {
  return (
    <Button variant={"link"} className="hover:font-bold">
      <Link href={`${children}`} className="text-lg">
        {children}
      </Link>
    </Button>
  );
}
