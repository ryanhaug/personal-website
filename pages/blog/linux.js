import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


export default function Linux() {
  return (
    <div className="h-full">
      <div className="p-10 flex flex-col gap-5 text-foreground">
        <h1 className="text-center text-2xl md:text-6xl text-purple font-bold">
          How To Try Linux
        </h1>

        <p>Date: Aug 28, 2021</p>
        <div className="flex justify-center">
          <div className="relative h-56 w-72 md:h-96 md:w-full">
            <Image
              src="/cautionary-xkcd.png"
              layout="fill"
              objectFit="contain"
              title="Comic sourced from xkcd"
            />
          </div>
        </div>

        <p>
          This is a very basic guide on how to try out Linux if you are unsure
          about switching from your current operating system. I use Linux as my
          daily driver, and find it better than Windows and macOS. Have fun
          trying it out, you may end up liking it :)
        </p>
        <h2 className="text-center text-xl md:text-4xl text-red font-bold">Which Linux Distro To Try?</h2>
        <p>
          There is a huge number of different Linux distributions to choose
          from. A distribution of Linux is essentially the same base operating
          system but a changed included software and desktop enviornment. This
          is really cool because it really allows you to fine tune your
          operating system to your preferences and workflow. There are sites
          like <Link href="https://distrowatch.com/"><a className="text-purple">Distro Watch</a></Link> that have a
          list of popular Linux distributions to choose from. This large number
          of choices may seem intimidating for some so in this guide we will
          only focus on two. Chances are you are a Windows or Mac user, and
          there are Linux distributions styled to feel familiar to these types
          of users:
        </p>
        <ul>
          <li>Windows -&gt; Linux Mint</li>
          <li>Mac -&gt; Ubuntu</li>
        </ul>
        <h2 className="text-center text-xl md:text-4xl text-red font-bold">How To Download</h2>
        <ul>
          <li>
            If you want to use Linux Mint go{" "}
            <Link href="https://linuxmint.com/download.php"><a className="text-purple">here</a></Link> and click
            Cinnamon
          </li>
          <li>
            If you want to use Ubuntu go{" "}
            <Link href="https://ubuntu.com/download/desktop"><a className="text-purple">here</a></Link>
          </li>
        </ul>
        <p>Go to the according website and download the .iso file</p>
        <h2 className="text-center text-xl md:text-4xl text-red font-bold">How To Create Bootable USB</h2>
        <p>
          If you are on Windows you will need to install{" "}
          <Link href="https://rufus.ie"><a className="text-purple">rufus</a></Link>
        </p>
        <p>
          If you are on Mac you will need to install{" "}
          <Link href="https://www.balena.io/etcher/"><a className="text-purple">etcher</a></Link>
        </p>
        <p>
          For both tools it works essentially the same. Insert a 8Gb or larger
          USB drive{" "}
          <strong>that you have backed up all previous data on!!!!</strong>{" "}
          Start your flashing software (rufus or etcher) and select the .iso
          file as the image you want to flash. Select the harddrive and hit
          start. You now have a USB with a live operating system! This means
          that you can run linux off of this USB without ever effecting what is
          on the harddrive of your computer. Of course, later if you wish to
          permanently change your computer's operating system you can also
          install Linux from the USB.
        </p>
        <h2 className="text-center text-xl md:text-4xl text-red font-bold">Try It Out!</h2>
        <p>
          Reboot your computer and press the button to pull up your boot options
          (usually one of the function keys, depends on your computers
          manufacturer). If you have trouble with this step and use Windows, you
          may have to turn fastboot off first. Once you pull up the boot menu,
          select the usb drive instead of your main harddrive and hit enter.
          This will boot you into the usb. Once here there should be two options
          presented to you: "try it out", and "install".{" "}
          <strong>
            Click "try it out" and <u>NOT</u> "install" unless you are
            absolutely sure that you want to overwrite your current operating
            system
          </strong>
          . If you clicked "try it out" you will be presented with a linux
          desktop. Congrats you made it!
        </p>
        <h2 className="text-center text-xl md:text-4xl text-red font-bold">A Few Tips</h2>
        <div className="bg-background-darker text-green rounded-xl p-5 drop-shadow-2xl">

        <ul className="list-disc list-inside">
          <li>To open the terminal hit CTRL+ALT+t</li>
          <li>
            There are many commands in Linux, a good starting point is typing{" "}
            <em>help help</em> which will give you help on how to use the help
            command
          </li>
          <li>
            For any command you are unsure of how to use or the syntax to use it
            in, type <em> man </em> and the command you are wondering about,
            which will bring up a page detailing how to use that command
          </li>
          <li>
            Type <em>vi</em> or <em>vim</em> to open the vim text editor
          </li>
          <li>
            Type <em>cd</em> to change the current directory
          </li>
          <li>
            Type <em>ls</em> to list the contents of the current directory
          </li>
          <li>
            Type <em>sudo</em> before a command to run it as an administrator
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}
