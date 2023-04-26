import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Bench() {
  return (
    <div className="h-full">
      <div className="p-10 flex flex-col gap-5 text-foreground">
        <h1 className="text-center text-2xl md:text-6xl text-purple font-bold">
          Outdoor Bench
        </h1>
        <p>Date: July 14, 2020</p>
        <div className="relative h-40 md:h-96 w-full">
          <Image
            src="/bench-finished.jpg"
            layout="fill"
            objectFit="contain"
            title="Bench"
          />
        </div>
        <p>
          For my eagle scout project I planned to make a mile long trail in one
          of my town's parks. I wanted to add two benches to this trail to give
          seating at some of the nice outlook points on the trail. I searched
          online for a simple bench made out of standard 2x4 lumber with
          concrete pillar supports and was unable to find a design to my liking.
          I came up with my own design, here it is if you would like to
          replicate it:
        </p>
        <h2 className="text-center text-xl md:text-4xl text-red font-bold">
          Schematics
        </h2>
        <div className="relative h-52 md:h-screen w-full">
          <Image
            src="/bench-assembly.jpg"
            layout="fill"
            objectFit="contain"
            title="Bench assembly diagram"
          />
        </div>
        <div className="relative h-52 md:h-screen w-full">
          <Image
            src="/bench-assembly-parts-list.jpg"
            layout="fill"
            objectFit="contain"
            title="Parts needed for bench"
          />
        </div>
        <h2 className="text-center text-xl md:text-4xl text-red font-bold">
          The Process
        </h2>
        <p>Parts List</p>
        <div className="bg-background-darker text-green rounded-xl p-5 drop-shadow-2xl">
          <ul className="list-disk list-inside">
            <li>2x4s</li>
            <li>4x4 post</li>
            <li>1/2" LAG BOLT x 2</li>
            <li>3/8"-16 UNC x 3-1/2 bolts and nuts</li>
            <li>1/2"-13 UNC x 4 bolts and nuts</li>
            <li>
              <a
                className="text-purple underline"
                href="https://www.homedepot.com/p/Superstrut-4-Hole-90-Degree-Angle-Strut-Bracket-Silver-Galvanized-ZAB205EG-10/202077397"
              >
                this bracket
              </a>
            </li>
            <li>concrete</li>
          </ul>
        </div>
        <p>
          To assemble cut the 2x4s into 3 lengths of 6ft, and with the leftovers
          make 5 sections of 12 3/8 in. Drill holes in them following the
          pattern below:
        </p>
        <div className="relative h-52 md:h-screen w-full">
          <Image
            src="/2x4-6.jpg"
            layout="fill"
            objectFit="contain"
            title="drill pattern for 6ft sections"
          />
        </div>
        <div className="relative h-52 md:h-screen w-full">
          <Image
            src="/2x4-12.jpg"
            layout="fill"
            objectFit="contain"
            title="drill pattern for 12.5in sections"
          />
        </div>
        <p>
          Cut the 4x4 post to 2 lengths of 28in. Drill a clearance hole into the
          top of each of the 4x4s for a bolt to overhang into (four posts are in
          the picture because I made 2 benches). Then bolt together and drill
          holes to fit for the lag screws for attaching the brackets to the
          sides of the 4x4 posts.
        </p>
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="relative h-56 w-56 md:h-96 md:w-96">
            <Image
              src="/bench-4x4-drilled.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-56 w-56 md:h-96 md:w-96">
            <Image src="/bench-bracket.jpg" layout="fill" objectFit="contain" />
          </div>
          <div className="relative h-56 w-56 md:h-96 md:w-96">
            <Image
              src="/bench-how-assemble.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <p>
          Pour concrete into 1 foot diameter sonotubes that are a foot tall.
          Screw scrap wood to the side to hold it up while the concrete sets
          properly.
        </p>
        <div className="flex justify-center">
          <div className="relative h-56 w-56 md:h-96 md:w-full">
            <Image
              src="/bench-concrete.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <p>All done, enjoy the bench!</p>
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="relative h-56 w-56 md:h-96 md:w-96">
            <Image
              src="/bench-comparison-1.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-56 w-56 md:h-96 md:w-96">
            <Image
              src="/bench-comparison-2.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
