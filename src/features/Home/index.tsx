"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
// import { Button, ListItem, UnorderedList } from "@chakra-ui/react";
// import { ArrowRightOutlined } from "@ant-design/icons";

import YinLoader from "@/components/Loader/Custom";

import { useIsMounted } from "@/hooks/useIsMounted";

// import { contractAddress, findUsLink, socialsLink } from "@/constants/links";
// import { rubik, satoshi } from "@/utils/font";
// import { ecosystemList } from "./constants/ecosystem";
// import { roadmapList } from "./constants/roadmap";

// import { FeatureArrow } from "@/utils/Icon/arrow";

import BannerApp from "@/assets/xiasi-banner.png";
import HeroApp from "@/assets/xiasi-logo.png";

// import HeroApp from "@/assets/hero-app.png";
// import MapApp from "@/assets/map-app.png";
import DextoolsLogo from "@/assets/logo-dextools.png";
// import EtherscanLogo from "@/assets/logo-etherscan.png";
import TwitterLogo from "@/assets/logo-twitter.png";
import TelegramLogo from "@/assets/logo-telegram.png";
// import Dexscreener from "@/assets/dexscreener.png";
// import Uniswap from "@/assets/uniswap.png";
// import Solidproof from "@/assets/solidproof.png";
// import Coingecko from "@/assets/coingecko.png";

import "./style.css";
import { contractAddress, findUsLink, socialsLink } from "@/constants/links";
import { TelegramIcon } from "@/utils/Icon/Telegram";
import { TwitterIcon } from "@/utils/Icon/Twitter";

interface Props {}

// const introVidUrl =
//   "https://res.cloudinary.com/dwppcshmi/video/upload/f_auto:video,q_auto/v1/rabbit_images/cqf6n5ikkmjsod1jpfxl";

// const contentStyle: React.CSSProperties = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "transparent",
// };

const Home: React.FC<Props> = () => {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isTokensVisible, setIsTokensVisible] = useState(false);

  const welcomeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const tokensRef = useRef<HTMLDivElement | null>(null);

  const isMounted = useIsMounted();
  // const [copyContent] = useCopyText();

  // useEffect(() => {
  //   if (isMounted) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsWelcomeVisible(entry.isIntersecting);
  //     });

  //     observer.observe(welcomeRef.current as HTMLDivElement);
  //   }
  // }, [isMounted]);

  // useEffect(() => {
  //   if (isMounted) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsAboutVisible(entry.isIntersecting);
  //     });

  //     observer.observe(aboutRef.current as HTMLDivElement);
  //   }
  // }, [isMounted]);

  // useEffect(() => {
  //   if (isMounted) {
  //     const observer = new IntersectionObserver((entries) => {
  //       const entry = entries[0];
  //       setIsTokensVisible(entry.isIntersecting);
  //     });

  //     observer.observe(tokensRef.current as HTMLDivElement);
  //   }
  // }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="homepage-container">
        <YinLoader />
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <div id="welcome" className="h-4 sm:h-8 relative z-30" />
      <div ref={welcomeRef} className="homepage-body px-4">
        <Image
          src={HeroApp}
          alt="xiasi-hero"
          className="w-full h-full object-contain"
        />
      </div>

      <div id="about" className="h-12 sm:h-16 relative z-30" />
      <div ref={aboutRef} className="w-full h-full relative">
        <div className="text-5xl text-center mb-6">{contractAddress}</div>

        <div className="text-6xl font-bold text-center text-pelu-red">
          XIASI
        </div>

        <div className="w-full lg:w-1/2 mx-auto flex flex-wrap justify-center text-4xl text-center mt-20 mb-10">
          <span className="text-pelu-red font-bold">$XIASI</span> Born from the
          ancient folklore of China, the Xiasi Dog is more than just a symbol of
          good fortune. It's a guardian of the household, a hunter of legends,
          and now, the new star in the meme universe.
        </div>

        <div className="w-full flex flex-wrap justify-center px-2 lg:px-0">
          <div className="w-full lg:w-1/2">
            <div className="w-full text-3xl mt-4 lg:mt-0 text-center">
              The timeless loyalty and protection of the{" "}
              <span className="text-pelu-red font-bold">XIASI</span> Dog,
              celebrated for centuries as a faithful companion and a bringer of
              prosperity
            </div>
          </div>
        </div>

        <div className="h-10 sm:h-14 relative z-30" />
        <Image
          src={BannerApp}
          alt="pelu-banner"
          className="w-full h-[100vw] sm:h-[75vw] lg:h-[50vw] xl:h-full"
        />
        <div className="h-10 sm:h-14 relative z-30" />

        <div className="w-full lg:w-1/2 m-auto text-center text-3xl px-2">
          <div className="w-full text-4xl font-bold mb-4">
            Join the <span className="text-pelu-red">XIASI</span> Dog adventure
            and be part of a community that treasures both the past and the
            playful present.
          </div>
        </div>
        <br />
        <div className="w-full flex flex-wrap justify-center items-center text-white m-auto gap-4">
          <Link
            href={findUsLink.dextools}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 hover:!text-primary"
          >
            <Image
              src={DextoolsLogo}
              alt="dextools"
              className="w-full h-full"
            />
          </Link>
          <Link
            href={socialsLink.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 hover:!text-primary"
          >
            <Image
              src={TelegramLogo}
              alt="telegram"
              className="w-full h-full"
            />
          </Link>
          <Link
            href={socialsLink.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 hover:text-secondary"
          >
            <Image src={TwitterLogo} alt="twitter" className="w-full h-full" />
          </Link>
        </div>
      </div>

      <div id="tokenomics" className="h-24 sm:h-36 relative z-30" />
      <div ref={tokensRef} className="homepage-body">
        <div className="text-6xl font-bold text-center text-xiasi-yellow">
          TOKENOMICS
        </div>

        <div className="w-full md:w-11/12 xl:w-4/5 text-center flex flex-wrap justify-center items-center gap-y-8 mx-auto mt-12">
          <div className="w-full">
            <div className={`app-title text-5xl mb-2`}>TAX 0% Simple</div>
          </div>
          <div className="w-full">
            <div className={`app-title text-5xl mb-2`}>CONTRACT RENOUNCED</div>
          </div>
          <div className="w-full">
            <div className={`app-title text-5xl mb-2`}>LP BURNED </div>
          </div>
        </div>
      </div>
      <div className="h-24 sm:h-36" />
    </div>
  );
};

export default Home;
