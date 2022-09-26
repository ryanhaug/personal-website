import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="md:h-screen h-full">
      <div className="p-10 flex flex-col gap-5 text-foreground">
        <h1 className="text-center text-2xl md:text-6xl text-purple font-bold">
          Welcome to my personal website!
        </h1>
        <div className="bg-background-darker text-green rounded-xl p-5 drop-shadow-2xl">
          <h1 className="text-xl">Announcements</h1>
          <ul className="list-disc list-inside">
            <li>
              Working on{" "}
              <Link href="https://godeliveru.com">
                <a className="underline hover:text-purple">DeliverU</a>
              </Link>
            </li>
            <li>Going to college at Rochester Institute of Technology</li>
            <li>Looking for CO-OP opportunities</li>
          </ul>
        </div>
        <p>
          I am a mechanical engineer student. I enjoy building projects and will
          document them here for anyone who wants to build something similar.
        </p>
        <div className="flex flex-wrap gap-5">
          <Link href="https://www.youtube.com/channel/UCLSXRKD2kHdvGh86s68XtCg">
            <div className="bg-background-darker p-5 text-bold hover:text-purple rounded-xl border-2 border-background-darker hover:border-purple drop-shadow-2xl">
              Check out my YouTube channel
            </div>
          </Link>
          <Link href="https://github.com/ryanhaug">
            <div className="bg-background-darker p-5 text-bold hover:text-purple rounded-xl border-2 border-background-darker hover:border-purple drop-shadow-2xl">
              Check out my GitHub
            </div>
          </Link>
          <Link href="/RyanHaug_Resume.pdf">
            <div className="bg-background-darker p-5 text-bold hover:text-purple rounded-xl border-2 border-background-darker hover:border-purple drop-shadow-2xl">
              Check out my Resume
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/ryan-haug-672947235">
            <div className="bg-background-darker p-5 text-bold hover:text-purple rounded-xl border-2 border-background-darker hover:border-purple drop-shadow-2xl">
              Check out my LinkedIn
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
