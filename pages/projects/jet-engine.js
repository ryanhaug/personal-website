import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function JetEngine() {
  return (
    <div className="h-full">
      <div className="p-10 flex flex-col gap-5 text-foreground">
        <h1 className="text-center text-2xl md:text-6xl text-purple font-bold">
          Turbojet Engine Project
        </h1>
        <p>Date: Jun 22, 2021</p>
        <h2 className="text-center text-xl md:text-4xl text-red font-bold">
          Turbojet Engine Research
        </h2>
        <p>
          To start with let's go over the basic principles of jet engines,
          "suck, squeeze, bang, blow".
        </p>
        <div className="bg-background-darker text-green rounded-xl p-5 drop-shadow-2xl">
          <ol className="list-decimal list-inside">
            <li>Air is drawn into intake</li>
            <li>Air is compressed which leads to a rise in air pressure</li>
            <li>Fuel is burned in combustion chamber</li>
            <li>
              Combustion imparts heat on the air which causes it to expand
              rapidly and produce high speed, hot airflow
            </li>
          </ol>
        </div>

        <p>
          A turbojet engine consits of three parts: the compressor, the burner,
          and the turbine.{" "}
        </p>
        <h3 className="text-center text-xl md:text-3xl text-cyan font-bold">
          The Compressor
        </h3>
        <p>There are two types of compressors, axial and centrifugal:</p>
        <div className="bg-background-darker text-green rounded-xl p-5 drop-shadow-2xl">
          <ul className="list-disc list-inside">
            <li>
              In an axial compressor the flow through the compressor travels
              parallel to the axis of rotation
            </li>
            <li>
              In a centrifugal compressor the flow through the compressor is
              turned perpendicular to the axis of rotation
            </li>
          </ul>
        </div>

        <p>
          Most modern engines use axial compressor because they can achieve
          higher compression ratios (today's compressors have a ratio of over
          40:1).
        </p>
        <p>
          Jet turbines generally have two different compressors, each on its own
          shaft, a high pressure and a low pressure compressor.
        </p>
        <div className="flex flex-wrap md:gap-20 items-center">
          <div className="bg-background-darker text-green rounded-xl p-5 drop-shadow-2xl">
            <ul className="list-disc list-inside">
              <li>
                Ram pressure or Ram effect is more air being forced into engine
              </li>
              <li>
                Static pressure is pressure without taking into account pressure
                caused by motion
              </li>
              <li>Total pressure is the sum of Static and Ram pressure</li>
              <li>Stator vanes slow down air and increase Static pressure</li>
              <li>
                Rotor blades increase air velocity and increase Ram pressure
              </li>
              <li>
                Rotor blade velocity increase and stator vane velocity decrease
                effectively cancel each other out
              </li>
            </ul>
          </div>
          <div className="relative h-56 w-56 md:h-96 md:w-96">
            <Image
              src="/rotor-and-stator.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <p>
          The tapered gaspath in an axial compressor is as a{" "}
          <strong>
            <em>result</em>
          </strong>{" "}
          of compression, not the cause!!
        </p>
        <p>
          As pressure goes up (because rotors and stators), volume of air goes
          down.
        </p>
        <p>
          remember: P<sub>1</sub>V<sub>1</sub>=P<sub>2</sub>V<sub>2</sub>
        </p>
        <p>P = pressure</p>
        <p>V = volume</p>
        <h3 className="text-center text-xl md:text-3xl text-cyan font-bold">
          The Burner/Combustor/Combustion Chamber
        </h3>
        <p>
          The combustor is where combustion occurs and where the air temperature
          is raised with a slight decrease in pressure. When designing a
          combustion chamber, it is important to follow these design criteria:
        </p>
        <ul>
          <li>Completely combust fuel</li>
          <li>
            Low pressure loss across the combustor, the turbine which the
            compressor feeds needs high pressure to operate efficiently
          </li>
          <li>
            The flame must be held inside the combustor. Combustion further back
            in the engine can result in damage to the turbines
          </li>
          <li>Efficiently mix air and fuel to ensure efficient combustion</li>
        </ul>
        <div className="bg-background-darker text-green rounded-xl p-5 drop-shadow-2xl">
          <p>There are three types of combustors:</p>
          <ul>
            <li>Can: each Can has both a liner and a casing</li>
            <li>
              Can-Annular: Can-shaped individual liners with annular casing
            </li>
            <li>Annular: annular liner and casing</li>
          </ul>
        </div>
        <h3 className="text-center text-xl md:text-3xl text-cyan font-bold">
          Airflow Paths in Combustor:
        </h3>
        <div className="flex flex-wrap gap-10 items-center">
          <div>
            <p>
              Primary air (~20-40%): Main combustion air, fed either through the
              main channel in the dome of the combustor or the first set of
              liner holes.
            </p>
            <p>
              Dilution air (~40-60%): Airflow injected through holes in liner at
              the end of the combustion chamber to cool the air before it
              reaches the turbine stages.
            </p>
          </div>
          <div className="relative h-40 md:h-62 w-full">
            <Image
              src="/1920px-Combustor_diagram_airflow.jpg"
              layout="fill"
              objectFit="contain"
              title="Diagram of a gas turbine combustor. Sourced from wikimedia commons under creative commons license."
            />
          </div>
        </div>

        <p>
          Use some of the excess air to cool the combustor walls, keep flame
          away from liner. Re-circulating vortex infront of fuel nozzle promotes
          air mixing and holds flame.
        </p>
        <h3 className="text-center text-xl md:text-3xl text-cyan font-bold">
          Sources From Research
        </h3>
        <Link
          href="https://www.summaryplanet.com/engineering/Jet-engine-design.html"
          className="text-purple"
        >
          https://www.summaryplanet.com/engineering/Jet-engine-design.html
        </Link>
        <Link
          href="https://nptel.ac.in/content/storage2/courses/112104117/chapter_4/4_9.html"
          className="text-purple"
        >
          https://nptel.ac.in/content/storage2/courses/112104117/chapter_4/4_9.html
        </Link>
        <Link
          href="https://en.wikipedia.org/wiki/Axial_compressor"
          className="text-purple"
        >
          https://en.wikipedia.org/wiki/Axial_compressor
        </Link>
        <Link
          href="https://Linkerospaceengineeringblog.com/jet-engine-compressor/"
          className="text-purple"
        >
          https://Linkerospaceengineeringblog.com/jet-engine-compressor/
        </Link>
        <Link
          href="https://www.sciencedirect.com/science/Linkrticle/pii/S2212540X16300025?via%3Dihub"
          className="text-purple"
        >
          https://www.sciencedirect.com/science/Linkrticle/pii/S2212540X16300025?via%3Dihub
        </Link>
        <Link
          href="https://en.wikipedia.org/wiki/Isentropic_nozzle_flow"
          className="text-purple"
        >
          https://en.wikipedia.org/wiki/Isentropic_nozzle_flow
        </Link>
        <Link
          href="https://www.grc.nasa.gov/www/k-12/Linkirplane/wrong1.html"
          className="text-purple"
        >
          https://www.grc.nasa.gov/www/k-12/Linkirplane/wrong1.html
        </Link>
        <h2 className="text-center text-xl md:text-4xl text-red font-bold">
          Designing and Building the Engine
        </h2>
        <p>
          The engine will be a low bypass turbo jet engine with an annular type
          combustion chamber. This engine seemed to be the easiest to make with
          the materials and tools I had at hand in high school. The casing is
          made out of a coffee can and the bearings are the same as used in
          skateboards. The difficulties will come in manufacturing the turbine
          blades, rotor blades, and stator vanes. This is because getting them
          all to the proper angle of attack and concave while remaining
          perfectly symmetrical and balanced.
        </p>
        <h3 className="text-center text-xl md:text-3xl text-cyan font-bold">
          Designing and Building Turbines
        </h3>
        <p>
          The turbine blades with experince high heat and have to withstand the
          full force of the engine, so steel is the preferred material. It is
          difficult to machine blades out of steel without precision machinery
          from a professional level shop. Bending sheetmetal to make flat blades
          out of a disk seemed like the best way to achieve the proper angle of
          attack while keeping a balanced turbine rotor. In searching online I
          found{" "}
          <Link href="https://www.instructables.com/Homemade-Tin-Can-Turbine-With-3d-printed-Compresso/">
            someone else
          </Link>{" "}
          who had a similar idea and pressed the metal in sheet metal press made
          out of 3d printed dies.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <div className="relative h-56 w-56 md:h-96 md:w-96">
            <Image
              src="/turbine-finished-press.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-56 w-56 md:h-96 md:w-96">
            <Image
              src="/press-after-use.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <p>
          I made models to show where the sheet metal should be cut before being
          put in the press. It is important to drill the hole{" "}
          <strong>
            <em>before</em>
          </strong>{" "}
          putting the turbine in the press. Also, err on the smaller side when
          cutting so that you don't have to grind down the blades later.
        </p>
        <h3 className="text-center text-xl md:text-3xl text-cyan font-bold">
          Designing and Building Combustor
        </h3>
        <p>
          In all my research I found that a large portion of the combustor is
          designed by trial and error, either by building and testing prototypes
          or trying different designs in a{" "}
          <abbr title="Computational Fluid Dynamics">CFD</abbr> program. I
          decided to split the gas path after leaving the compressor into an
          inner flow and one to the outside of the liner to cool the engine
          housing.
        </p>
        <div className="flex justify-center">
          <div className="relative h-56 w-56 md:h-96 md:w-full">
            <Image src="/full-drawing.jpg" layout="fill" objectFit="contain" />
          </div>
        </div>

        <p>
          The combustion liner is made of a sheet metal cone and cylinder with
          holes drilled in them. Here are the tests from the{" "}
          <abbr title="Computational Fluid Dynamics">CFD</abbr> program I ran on
          my different hole configurations.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <div className="relative h-32 w-56 md:h-72 md:w-96">
            <Image
              src="/fluid-simulation1.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-32 w-56 md:h-72 md:w-96">
            <Image
              src="/fluid-simulation2.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-32 w-56 md:h-72 md:w-96">
            <Image
              src="/fluid-simulation3.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <p>
          Once the liner was drilled and spot welded together we bolted it into
          the engine housing. Then the copper tubing with holes in it serving as
          the fuel line was inserted.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          <div className="relative h-32 w-56 md:h-72 md:w-96">
            <Image
              src="/combustion-liner-in-can-top.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="relative h-32 w-56 md:h-72 md:w-96">
            <Image
              src="/combustion-liner-in-can.jpg"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <h3 className="text-center text-xl md:text-3xl text-cyan font-bold">
          Designing and Building Compressor
        </h3>
        <p>
          The rotor blades increase the ram pressure by speeding up the air. The
          stator vanes increase the static pressure by slowing down the air. By
          alternating these rotors and vanes in multiple stages, the presssure
          will be increased as the volume decreases. The length of the blades
          decreases in the later stages as the number of blades increases.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
        <div className="relative h-32 w-56 md:h-72 md:w-96">
          <Image src="/shellpic.png" layout="fill" objectFit="contain" />
        </div>
        <div className="relative h-32 w-56 md:h-72 md:w-96">
          <Image src="/shell-stages.jpg" layout="fill" objectFit="contain" />
        </div>
        </div>
        <h3 className="text-center text-xl md:text-3xl text-cyan font-bold">Machining the Axle</h3>
        <p>
          The axle is threaded on each end to take lock nuts to keep itself
          centered in the engine. The axle will also be keyed to take 1/8 in
          square bar so that the turbines can torque the axle when they are
          being turned. The mill in our school's tech wing was not set up as a
          result of our tech wing being remodeled. So we had a friend at a
          professional shop mill it for us.
        </p>
        <h3 className="text-center text-xl md:text-3xl text-cyan font-bold">The Test</h3>
        <p>
          The first test was just the combustion liner in the housing. We used
          compressed air to simulate the air from the air compressor.
        </p>
        <Link href="https://youtu.be/qZWnE_8dQdU" className="text-purple">https://youtu.be/qZWnE_8dQdU</Link>
        <p>
          The second and final test was putting it all together and spinning it
          up with compressed air. Once spun up to speed, the velocity imparted
          on the air by the combustion should be enough for the engine to
          sustain itself. It did not create enough thrust to sustain itself. We
          belive it did not do this because we never build a diffuser to slow
          down the airspeed between the compressor section and the combustor
          section.
        </p>
        <Link href="https://youtu.be/sN9D55REclQ" className="text-purple">https://youtu.be/sN9D55REclQ</Link>
        <br></br>
        <div className="flex flex-wrap gap-5">
          <Link href="https://github.com/ryanhaug/JetEngine">
            <div className="bg-background-darker p-5 text-bold hover:text-purple rounded-xl border-2 border-background-darker hover:border-purple drop-shadow-2xl">
                github page for all 3d print files and sheet metal templates
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
