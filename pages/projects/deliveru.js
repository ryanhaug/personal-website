import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function DeliverU() {
  return (
    <div className="h-full">
      <div className="p-10 flex flex-col gap-5 text-foreground">
        <h1 className="text-center text-2xl md:text-6xl text-purple font-bold">
          DeliverU
        </h1>

        <p>Date: Sep 26, 2022</p>
        <div className="flex justify-center">
          <div className="relative h-56 w-72 md:h-96 md:w-full">
            <Image
              src="/DeliverULogoWhite.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <p>
          In January 2022, me and two other college students began a startup
          company. We were bored and tried googling side hustles for college. In
          our search we found deliver food for students, the article meant to
          become a Dasher for DoorDash or a worker for UberEats but instead we
          took it as making our own food delivery platform. So we began
          DeliverU, a company dedicated to delivering food from on-campus dining
          locations directly to dorms employing students to work on a gig
          economy basis allowing them to work when they want how they want.
        </p>
        <p>
          We launched our MVP at{" "}
          <abbr title="Rochester Institute of Technology">RIT</abbr> a few weeks
          into the spring semester and began taking orders. Originally under the
          name Dorm Dash, we developed a Wordpress website to host the order
          form for deliveries. Users didn't actually place orders for food on
          our website only delivery. We hung up posters around campus to spread
          word of the new company and being recruiting workers to do deliveries
          for us.
        </p>
        <div className="flex justify-center">
          <div className="relative h-72 w-56 md:h-[50rem] md:w-[40rem]">
            <Image
              src="/first-delivery.png"
              layout="fill"
              objectFit="contain"
              title="First Delivery"
            />
          </div>
        </div>
        <p>I serve as CTO of the company and manage all of its tech.</p>
        <p>
          In the first semester we did 470 orders and over $2,000 in revenue. We
          managed to get into talks with RIT Dining to begin working out a
          contract. At the end of the semester we hosted a table at Imagine RIT
          which is an event open to the public where RIT students can showcase
          their innovative ideas.
        </p>
        <div className="flex justify-center">
          <div className="relative h-56 w-72 md:h-96 md:w-full">
            <Image
              src="/imagine-rit.jpg"
              layout="fill"
              objectFit="contain"
              title="First Delivery"
            />
          </div>
        </div>
        <p>
          Over the summer we worked on acquiring new colleges to add to our
          platform. We also redesigned the tech side of the system. We brought
          on two coders to help us develop theses improvements. The new backend
          is RESTful API coded in nodejs by our programmer. The new system
          frontend is coded in Nextjs which I personally coded after we had to
          let go of the one coder who wasn't doing his job. You can see this
          system in use at{" "}
            <Link href="https://deliveru.app/"><a className="text-purple">DeliverU.app</a></Link>
        </p>
        <div className="flex flex-wrap gap-5 justify-center">
          <div className="relative h-72 w-56 md:h-96 md:w-72">
            <Image
              src="/Screenshot_1.png"
              layout="fill"
              objectFit="contain"
              title="First Delivery"
            />
          </div>
          <div className="relative h-72 w-56 md:h-96 md:w-72">
            <Image
              src="/Screenshot_2.png"
              layout="fill"
              objectFit="contain"
              title="First Delivery"
            />
          </div>
          <div className="relative h-72 w-56 md:h-96 md:w-72">
            <Image
              src="/Screenshot_3.png"
              layout="fill"
              objectFit="contain"
              title="First Delivery"
            />
          </div>
          <div className="relative h-72 w-56 md:h-96 md:w-72">
            <Image
              src="/Screenshot_4.png"
              layout="fill"
              objectFit="contain"
              title="First Delivery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
