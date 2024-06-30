import {
  Twitter,
  Linkedin,
  Github,
  FileText,
  Download,
  ChevronsRight,
  MoveUpRight,
  MousePointerClick
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { homePageData } from "@/constants";
import Swal from "sweetalert2";
import Hover from "../Hover";
import Typewriter from "typewriter-effect"

export const Hero = () => {
  const heroAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-70%)" }
  });
  
  return (
    <section className="relative min-h-screen md:flex md:justify-center md:items-center sm:max-w-3xl">
      {/* Gradient Effect */}
      <div className="gradient_effect"></div>

      <animated.div className="transition duration-100" style={heroAnimation}>
        <div className="md:flex md:gap-2 md:flex-row-reverse md:justify-between">
          <div className="w-32 md:w-auto">
            <Image
              src={homePageData?.photo?.url || ""}
              width={300}
              height={300}
              alt={homePageData?.photo?.alt || "Pritam Panda"}
            />
          </div>

          <div className="md:flex-1">
            <span className="leading-7 hover:animated-text text-3xl flex items-center gap-2 font-light">
              Hello there! <span className="wave text-5xl">👋</span>
            </span>
            <span></span>
            <h1 className="text-black text-2xl font-ranade-bold dark:text-white">
              {homePageData?.tagline2}
            </h1>
    <div classname="text-5xl text-xl md:text-2xl my-3">
            <h2><Typewriter
              options={{
                strings: [
                  "I'm a MERN-stack developer.",
                  "I love solving problems.",
                  "I'm a competitive programmer.",
                  "I love javascript and c++.",
                  "I am learning different javascript frameworks rn.",
                ],
                autoStart: true,
                loop: true,
              }}
            /></h2></div>

          
            
          </div>
        </div>

        {/* Socials & CTA */}
        <div className="ml-6 md:m-0 md:flex md:gap-4 md:items-center">
          <div className="mt-8 md:m-0 flex items-center gap-4">
            {homePageData?.socials?.map((platform, index) => (
              <Link target="_blank" key={index} href={platform.link || ""}>
                <button className="social_icon" type="button">
                  {platform.name === "twitter" ? (
                    <Twitter />
                  ) : platform.name === "linkedin" ? (
                    <Linkedin />
                  ) : (
                    <Github />
                  )}
                </button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-wrap mt-10 md:m-0">
            <Link href={homePageData?.resumelink || ""} target="_blank">
              <button className="resume_btn" type="button">
                <Download size={20} />
                Download Resume
              </button>
            </Link>
            <Link href="/projects">
              <button className="work_btn" type="button">
                <MousePointerClick size={16} />
                My Work
              </button>
            </Link>
          </div>
        </div>
      </animated.div>
    </section>
  );
};
