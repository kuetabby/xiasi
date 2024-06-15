import { useMemo, useRef } from "react";
import Link from "next/link";
// import Image from "next/image";
import { usePathname } from "next/navigation";
// import { ConnectWallet } from "@thirdweb-dev/react";
import {
  Button,
  // Button,
  // Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  // DrawerFooter,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListItem,
} from "@chakra-ui/react";
// import { DollarOutlined, LineChartOutlined } from "@ant-design/icons";
import clsx from "clsx";

import Anchor from "@/components/Anchor";

import { useIsMounted } from "@/hooks/useIsMounted";
import { getHash } from "@/utils/hash";
import useHash from "@/hooks/useHashname";

import { eras } from "@/utils/font";

// import AppTitle from "@/assets/title-app.png";
import { socialsLink } from "@/constants/links";

import "../style.css";
import "./style.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const NavbarDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
  const btnRef = useRef() as any;

  const pathname = usePathname();
  const hashname = useHash();

  const isMounted = useIsMounted();

  const defaultHash = getHash();

  const tabsList = useMemo(() => {
    return [
      {
        href: "/",
        pathname: `/`,
        name: "HOME",
      },
      {
        href: "#about",
        pathname: `#about`,
        name: "ABOUT",
      },
      {
        href: "#tokenomics",
        pathname: `#tokenomics`,
        name: "TOKENOMICS",
      },
    ];
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Drawer
      // size={""}
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton
          className="mt-2 font-extrabold text-red-500"
          style={{ fontSize: 20 }}
        />
        <DrawerHeader className={`bg-xiasi h-24 ${eras.className}`}>
          <Link href="/" className={`logo-container text-white h-full`}>
            <div className="font-extrabold text-2xl">XIASI</div>
          </Link>
        </DrawerHeader>

        <DrawerBody className={`bg-xiasi ${eras.className}`}>
          <List spacing={3}>
            {tabsList.map((item) => {
              const isActive = !!defaultHash
                ? hashname === item.pathname
                : !defaultHash && pathname === item.pathname;

              // if (item.pathname === "/whitepaper") {
              //   return (
              //     <ListItem key={item.name} onClick={onClose}>
              //       <Link
              //         key={item.name}
              //         href={item.href}
              //         target="_blank"
              //         rel="noopener noreferrer"
              //         className="nav-anchor"
              //       >
              //         {item.name}
              //       </Link>
              //     </ListItem>
              //   );
              // }

              return (
                <ListItem key={item.name} onClick={onClose}>
                  <Anchor
                    href={item.href}
                    className={clsx(
                      "font-bold",
                      // "text-white p-2 hover:text-secondary font-bold",
                      // "text-sm md:text-base text-black dark:text-white p-2 hover:bg-dark-hover font-bold",
                      // isActive ? "#bf00ff" : "text-white"
                      isActive ? "nav-anchor-active" : "nav-anchor"
                    )}
                    style={{ transition: "250" }}
                  >
                    {item.name}
                  </Anchor>
                </ListItem>
              );
            })}
          </List>
        </DrawerBody>

        <DrawerFooter
          className={`bg-xiasi flex flex-wrap justify-center ${eras.className}`}
        >
          <Link
            href={socialsLink.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button
              className="w-full text-xiasi-yellow hover:text-xiasi rounded-3xl"
              colorScheme="gray"
              // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
            >
              Telegram
            </Button>
          </Link>

          <Link
            href={socialsLink.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-4"
          >
            <Button
              className="w-full text-xiasi hover:text-xiasi-yellow rounded-3xl"
              colorScheme="gray"
              // leftIcon={<DollarOutlined style={{ fontSize: "1.5em" }} />}
            >
              Twitter
            </Button>
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
