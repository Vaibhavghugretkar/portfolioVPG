'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

  return (
        
       <div
      className={cn("absolute top-10 inset-x-0 max-w-2xl mx-auto z-40" , className)}
    >
     <Menu setActive={setActive}>

        <Link href={"/"} className="lg:text-xl sm:text-xs md:text-xl">
        <MenuItem setActive={setActive} active={active}
        item="Home">
        </MenuItem>
        </Link>


<Link href={"#skills"}  className="lg:text-xl sm:text-xs md:text-xl">
<MenuItem
setActive={setActive} active={active}
        item="Skills"
        >
</MenuItem>
</Link>

<Link href={"#projects"}  className="lg:text-xl sm:text-xs md:text-xl">
<MenuItem setActive={setActive} active={active}
     
        item="Projects">
</MenuItem>
</Link>

<Link href={"#contact"}  className="lg:text-xl sm:text-xs md:text-xl">
<MenuItem setActive={setActive} active={active}
     
        item="Contact">
</MenuItem>
</Link>


     </Menu>

    </div>
  )
}
