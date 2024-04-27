'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

  return (
       <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-40" , className)}
    >
     <Menu setActive={setActive}>

        <Link href={"/"} className="text-xl">
        <MenuItem setActive={setActive} active={active}
        item="Home">
        </MenuItem>
        </Link>


<Link href={"/courses"}  className="text-xl">
<MenuItem
setActive={setActive} active={active}
        item="Our Courses"
        >
</MenuItem>
</Link>

<Link href={"/"}  className="text-xl">
<MenuItem setActive={setActive} active={active}
        item="Contact us">
</MenuItem>
</Link>


     </Menu>

    </div>
  )
}
