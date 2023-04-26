import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="h-screen">
      <div className="p-10 flex flex-col gap-5 text-foreground">
        <h1 className="text-center text-2xl md:text-6xl text-purple font-bold">
          Projects
        </h1>
        <div className="flex flex-wrap gap-5">
          <Link href="/projects/jet-engine">
            <div className="bg-background-darker p-5 text-bold hover:text-purple rounded-xl border-2 border-background-darker hover:border-purple drop-shadow-2xl">
              Jet Engine
            </div>
          </Link>
          <Link href="/projects/bench">
            <div className="bg-background-darker p-5 text-bold hover:text-purple rounded-xl border-2 border-background-darker hover:border-purple drop-shadow-2xl">
              Bench
            </div>
          </Link>
          <Link href="/projects/deliveru">
            <div className="bg-background-darker p-5 text-bold hover:text-purple rounded-xl border-2 border-background-darker hover:border-purple drop-shadow-2xl">
              DeliverU
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
