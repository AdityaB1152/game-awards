import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

// import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
        The Most Awarded Game of 2024 – A Journey Worth the Wait! 
        </p>

        <AnimatedTitle
          title="<b> G<b>ame <b>o<b>f<b> <b>th<b>e<b> <b>Ye<b>ar<b> 20<b>24</b></b>"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext" style={{marginTop:'75px'}}>
          <p>Astro Bot by Team ASOBI and Sony Interactive Entertainment</p>
          <p className="text-gray-500">
          Astro Bot dominated the gaming scene in 2024, winning prestigious accolades including Game of the Year, Best Family Game, Best Game Direction, and Best Action/Adventure. With its captivating gameplay, imaginative design, and heartwarming appeal, Astro Bot cemented its place as a masterpiece that resonated with players of all ages.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;