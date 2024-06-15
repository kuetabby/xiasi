"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
// import { Divider } from "@chakra-ui/react";
import { CopyrightOutlined } from "@ant-design/icons";

import { useIsMounted } from "@/hooks/useIsMounted";

import { socialsLink } from "@/constants/links";
import { eras } from "@/utils/font";

// import AppLogo from "@/assets/logo-app.png";
// import AppBannerNav from "@/assets/banner-nav.png";

// import AppLogoTransparent from "@/assets/logo-transparent.png";
// import TwitterLogo from "@/assets/logo-twitter.png";
// import TelegramLogo from "@/assets/logo-telegram.png";
// import MediumLogo from "@/assets/logo-medium.png";
// import WebLogo from "@/assets/logo-web.png";
// import GitbookLogo from "@/assets/logo-gitbook.png";
// import EmailLogo from "@/assets/logo-email.png";

import "./style.css";

interface Props {}

const AppFooter: React.FC<Props> = () => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <footer className={clsx("app-footer", eras.className)}>
      <div className="app-footer-container">
        <div className="app-footer-wrapper z-30">
          {/* <div className="text-3xl text-center mb-6 z-50 relative">
          <Link
            href={socialsLink.email}
            className="w-auto text-white hover:!text-pelu-red mb-2"
          >
            team@pepelubu.meme
          </Link>
        </div> */}

          {/* <div className="w-full md:w-3/5 flex flex-wrap justify-center items-center text-white m-auto gap-4 z-50 relative">
            <Link
              href={socialsLink.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 hover:!text-primary"
            >
              <Image
                src={TelegramLogo}
                alt="telegram"
                className="w-full h-full cursor-pointer"
              />
            </Link>
            <Link
              href={socialsLink.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 hover:text-secondary"
            >
              <Image
                src={TwitterLogo}
                alt="twitter"
                className="w-full h-full cursor-pointer"
              />
            </Link>
          </div> */}

          <div className="h-6 sm:h-12" />

          <div className="w-full flex flex-wrap justify-between items-center px-2 py-2 md:py-4 text-white z-30">
            <div className="w-full text-base text-center z-50 relative">
              <Link
                href={socialsLink.email}
                className="w-auto text-white hover:!text-pelu-red mb-2"
              >
                team@pepelubu.meme
              </Link>
            </div>

            <div className="w-full text-base text-center font-semibold">
              <CopyrightOutlined className="mx-1" style={{ fontSize: "1em" }} />
              Copyright 2024 | All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
