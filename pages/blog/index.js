import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="p-10 flex flex-col gap-5 text-foreground">
        <h1 className="text-center text-2xl md:text-6xl text-purple font-bold">
          Blog
        </h1>
        <p>
        This section isn't really a blog but I don't have a better name for it...
        </p>
        <div className="flex flex-wrap gap-5">
          <Link href="/blog/longboard">
            <div className="bg-background-darker p-5 text-bold hover:text-purple rounded-xl border-2 border-background-darker hover:border-purple drop-shadow-2xl">
              Longboard
            </div>
          </Link>
          <Link href="/blog/linux">
            <div className="bg-background-darker p-5 text-bold hover:text-purple rounded-xl border-2 border-background-darker hover:border-purple drop-shadow-2xl">
              Linux
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
