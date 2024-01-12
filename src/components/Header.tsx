import React from "react";

export default function Header({ children }: { children: string }) {
  return (
    <div className="text-center">
      <hr />
      <h1 className="uppercase font-bold text-[130px] md:text-[240px] lg:text-[260px]">
        {children}
      </h1>
      <hr />
    </div>
  );
}
