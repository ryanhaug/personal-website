/*  ./components/Navbar.jsx     */
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <>
      <nav className="z-10 sticky top-0 w-full justify-between flex bg-background-darker flex-wrap p-3">
        <Link href="/">
          <a className="p-2 mr-4 text-xl text-pink font-bold uppercase tracking-wide">
            ryanhaug.xyz
          </a>
        </Link>

        <div className="">
          <div className="flex flex-row">
            <Link href="/">
              <a className="w-full px-3 py-2 rounded text-pink hover:text-foreground font-bold hover:bg-pink">
                Home
              </a>
            </Link>
            <Link href="/projects">
              <a className="w-full px-3 py-2 rounded text-pink hover:text-foreground font-bold hover:bg-pink">
                Projects
              </a>
            </Link>
            <Link href="/blog">
              <a className="w-full px-3 py-2 rounded text-pink hover:text-foreground font-bold hover:bg-pink">
                Blog
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
