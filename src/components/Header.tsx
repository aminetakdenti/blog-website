import React from "react";

export default function Header({ children }: { children: string }) {
  return (
    <div className="text-center">
      <hr />
      <h1 className="relative uppercase font-bold text-6xl sm:text-[133px] md:text-[170px] lg:text-[240px] xl:text-[265px] ">
        {children}
      </h1>
      <hr />
    </div>
  );
}
