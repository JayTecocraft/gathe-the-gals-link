import { FreeTrialBanner } from "@/components/FreeTrial";
import LinkCard from "@/components/LinkCard";
import Image from "next/image";
import { CgShoppingCart } from "react-icons/cg";
import { FaBookOpen, FaHeadphones, FaInstagram, FaMailchimp, FaTiktok } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import { GrSpotify } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { PiBroadcast } from "react-icons/pi";

export default function Home() {
  const linksData = [
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
    {
      title: "Listen to the podcast! :)",
      link: "https://podcasts.apple.com/us/podcast/gather-the-gals-christian-women-bible-study-community/id1666097684",
      description: "We would love your support! Leave a review and share with a friend!",
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

  return (
    <div className="flex flex-col min-h-screen bg-light-pink">
      <main className="relative flex flex-col h-full w-full max-w-2xl mx-auto items-center justify-start px-4 pt-8 pb-16 mb-5">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-500 mb-3">
            Gather the Gals
          </h1>
          <p className="text-lg text-pink-500 opacity-90 italic">
            "Gather the gals is a global top Christian women’s podcast and
            ministry!"
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full">
          {linksData.map((link, index) => (
            <LinkCard key={index} {...link} />
          ))}
        </div>
      </main>
      <FreeTrialBanner/>
    </div>
  );
}
