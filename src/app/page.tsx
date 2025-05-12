import { FreeTrialBanner } from "@/components/FreeTrial";
import LinkCard from "@/components/LinkCard";
import Image from "next/image";
import { CgShoppingCart } from "react-icons/cg";
import {
  FaBookOpen,
  FaHeadphones,
  FaInstagram,
  FaMailchimp,
  FaTiktok,
} from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { GrSpotify } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { PiBroadcast } from "react-icons/pi";
import gether_image from "../images/photos/gether_image.jpeg";

export default function Home() {
  const linksData = [
    {
      title: "Listen to the podcast! :)",
      link: "https://podcasts.apple.com/us/podcast/gather-the-gals-christian-women-bible-study-community/id1666097684",
      description:
        "We would love your support! Leave a review and share with a friend!",
      icon: PiBroadcast,
    },
    {
      title: "Grab the marriage guide here!!",
      link: "https://www.amazon.com/dp/B0D4DZ651L/ref=cm_sw_r_as_gl_api_gl_i_Y3A151H6P59ZHS0A0F5K?linkCode=ml1&tag=lynconmartine-20",
      description: "Visit this link!",
      icon: FaBookOpen,
    },
    {
      title: "Grab my devotional for the busy mom here! 🥰",
      link: "https://www.amazon.com/dp/B0CCCJBTDB/ref=cm_sw_r_as_gl_api_gl_i_1PT3ARR0MDXDZX1GHANB?linkCode=ml1&tag=lynconmartine-20",
      description: "Visit this link!",
      icon: FaBookOpen,
    },
    {
      title: "Shop my online store!",
      link: "https://www.gatherthegals.com/product-page/just-give-me-jesus-otto-hat",
      description: "Get all of the cute things here!",
      icon: CgShoppingCart,
    },
    {
      title: "Visit me on my website",
      link: "https://www.gatherthegals.com/",
      description: "",
      icon: FaGlobe,
    },
  ];

  const socialLinks = [
    {
      title: "Instagram",
      link: "https://www.instagram.com/Gatherthegals",
      description: "",
      icon: FaInstagram,
    },
    {
      title: "TikTok",
      link: "https://www.tiktok.com/@Gatherthegals",
      description: "",
      icon: FaTiktok,
    },
    {
      title: "Email",
      link: "mailto:Gatherthegals@gmail.com",
      description: "",
      icon: MdEmail,
    },
    {
      title: "Spotify",
      link: "https://open.spotify.com/show/7be7rblbyTDwrS8KMwSY2l?si=sEwyGztvSc2FS-Xt54P5Tw",
      description: "",
      icon: GrSpotify,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-pink-200">
      <main className="relative flex flex-col h-full w-full max-w-2xl mx-auto items-center justify-start sm:pt-8 pb-16 mb-5">
        <div className="text-center mb-8 ">
          <div className="relative">
            <div
              className="absolute sm:hidden h-[20dvh] -bottom-1 inset-x-0 bg-gradient-to-b from-transparent via-transparent to-[#fccee8] z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255, 237, 251, 0) 0%, #fccee8 50%, #fccee8 75%, #fccee8 100%)",
              }}
            />
            <div className="h-[55dvh] sm:h-64 md:h-72 sm:w-40 md:w-64 sm:mt-12 mx-auto">
              <img
                src={gether_image.src}
                className="w-full h-full object-fill sm:border-2 border-pink-400 sm:rounded-3xl object-center"
                alt="Gather the Gals"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-pink-500 mb-3 -mt-16 sm:mt-6 z-10 relative px-4">
            Gather the Gals
          </h1>
          <p className="text-lg text-pink-500 opacity-90 italic z-10 relative px-4">
            "Gather the gals is a global top Christian women’s podcast and
            ministry!"
          </p>
        </div>
        <div className="flex gap-5 w-full justify-center mb-8 mx-auto px-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-4 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <link.icon className="text-2xl text-pink-500" />
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-5 w-full px-4">
          {linksData.map((link, index) => (
            <LinkCard key={index} {...link} />
          ))}
        </div>
      </main>
      <FreeTrialBanner />
    </div>
  );
}
