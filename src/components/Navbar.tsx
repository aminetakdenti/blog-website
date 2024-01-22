"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRightIcon, X } from "lucide-react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const nav = [
    { name: "blog", route: "/" },
    { name: "projects", route: "/projects" },
    { name: "about", route: "/about" },
    { name: "newsletter", route: "/newsletter" },
  ];

  return (
    <div className="flex justify-between my-10 relative">
      <div>
        <h3 className="font-semibold text-2xl">Your Name</h3>
      </div>
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-col absolute top-10 w-full  items-center md:relative md:top-0 md:w-1/2 md:flex md:flex-row md:items-start justify-end`}
      >
        {nav.map((ele, index) => (
          <NavButton key={index} name={ele.name} route={ele.route} />
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

function NavButton({ name, route }: { name: string; route: string }) {
  return (
    <Button variant={"link"} className="hover:font-bold">
      <Link href={route} className="text-lg">
        {name}
      </Link>
    </Button>
  );
}
