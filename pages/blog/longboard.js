import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Longboard() {
  return (
    <div className="h-full">
      <div className="p-10 flex flex-col gap-5 text-foreground">
        <h1 className="text-center text-2xl md:text-6xl text-purple font-bold">
          How To Slide Your Longboard
        </h1>

        <p>Date: Aug 27, 2021</p>
        <p>
          There are lots of guides and tutorials online about how to do downhill
          slides from professionals online, but this is a guide coming from a
          fellow beginner who recently just figured it out and can share what
          worked for them. To start with, these are the guides that I followed
          when I was learning:
        </p>
        <Link href="https://downhill254.com/coleman-slide-for-longboard-downhill-pendulum-slide/" className="text-purple">
          Downhill245
        </Link>
        <Link href="https://youtu.be/5JuuF785SPY" className="text-purple">Landyachtz</Link>
        <h2 className="text-center text-xl md:text-4xl text-red font-bold">Beginning Sliding</h2>
        <p>To start learning to slide you need:</p>
        <div className="bg-background-darker text-green rounded-xl p-5 drop-shadow-2xl">
        <ul className="list-disc list-inside">
          <li>slide gloves</li>
          <li>helmet</li>
          <li>slide wheels</li>
          <li>any longboard</li>
        </ul>
        </div>
        <div className="flex justify-center">
        <div className="relative h-56 w-72 md:h-96 md:w-full">
          <Image src="/pushup-slide.gif" layout="fill" objectFit="contain" />
        </div>
        </div>
        <p>
          The first slide I learned was the two hand down pushup slide. For
          anyone afraid of sliding, this is perfect because there is almost zero
          risk of falling. Go on a small hill (you don't need much speed) and as
          you carve to approach the slide, squat down, put your hands out, and
          push out your body into a pushup position. Don't worry about not
          getting it the first time because even if your wheels don't break into
          a slide you will just go in a straight line and since you are on small
          hill just wait till you slow down and get back up.
        </p>
        <h2 className="text-center text-xl md:text-4xl text-red font-bold">Coleman</h2>
        <div className="flex justify-center">
        <div className="relative h-56 w-72 md:h-96 md:w-full">
          <Image src="/coleman.gif" layout="fill" objectFit="contain" />
        </div>
        </div>
        <p>
          The Coleman slide was named after its inventor, Cliff Coleman. The
          Coleman is also known as a Heelside slide because your heels are to
          the hill. I originally began practicing this slide by going as fast as
          possible and then trying to twist my board into a slide. This method
          resulted in either the board not breaking into a slide and I would
          simply turn very hard or the wheels would catch and throw me off the
          board. What I found to be the best method to practice was finding a
          medium hill and going slowly down it (faster than for the pushup slide
          though). In this I started by only trying to slide to a stop. I tried
          to focus on really leaning my weight back onto the hand behind me and
          off of my wheels and anticipating the board pushing back so that I
          wouldn't be thrown off the board.
        </p>
        <p>
          Once I was able to slide to a stop, I went down a larger hill and
          worked on trying to hook my coleman back up to keep going down the
          hill without stopping. For this step it really helped me a lot to wear
          knee pads, because whenever I fell I would always go to the hands and
          knees position (sliding on knee pads and slide gloves). Another thing
          I found helpful when getting out of the slide was to leave my hand
          down for a second longer than seemed nessesary in order to use it for
          balance as I stood up.
        </p>
        <h2 className="text-center text-xl md:text-4xl text-red font-bold">Toeside</h2>
        <div className="flex justify-center">
        <div className="relative h-56 w-72 md:h-96 md:w-full">
          <Image src="/toeside.gif" layout="fill" objectFit="contain" />
        </div>
        </div>
        <p>
          The Toeside slide is essentially the pushup slide but only putting one
          hand down. The way I learned to do it was to grab rail of my board
          infront of my front foot and really lean into my hand on the ground as
          I put it down. It feels a lot different to do than leaning back in the
          Coleman, because you lean into/over it and not back.{" "}
          <Link href="https://youtu.be/hJajtKI6ED0" className="text-purple">
            This video of Zak Maytum from Venom Bushings really helped me
            visualize the movement of how to kick out into the slide.
          </Link>
        </p>
        <h2 className="text-center text-xl md:text-4xl text-red font-bold">Next Step</h2>
        <p>
          Once you learn how to slide your longboard it is time to begin good
          practices to avoid flatspots. I got quite a few from the earlier steps
          and am still working on getting all them out now that I know how to
          slide. You get flatspots on your wheels from sliding your board
          perpendicular to the hill. You should keep your board at a slight
          angle to allow your wheels to spin while you slide resulting in an
          even wear pattern. The best way I found to do this was to pendulum
          slide. This method is done exactly how it sounds, you swing the board
          out past perpendicular and bring it back all in one motion without the
          board stopping in one place.
        </p>
        <h3>Have fun and stay safe out there!</h3>
      </div>
    </div>
  );
}
