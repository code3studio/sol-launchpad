"use client";
import { Logo } from "@images";
import Image from "next/image";
import Link from "next/link";
import { Home, Info, Menu, Mail, FileText, Wrench } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

type Props = {};

const Header = (props: Props) => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <header className="sticky top-0 z-10 flex justify-between w-full gap-8 px-4 py-2 bg-background font-monsterr">
      <Image src={Logo} alt="PRNT" width={50} height={50} />

      <div className="flex items-center justify-between lg:w-full">
        <nav className="hidden gap-4 lg:flex">
          <Link
            href="/"
            className="duration-500 cursor-pointer delay-600 animate-in fade-in zoom-in hover:text-tealClr"
          >
            Home
          </Link>
          <Link
            href="https://solgptai.gitbook.io/solgptai-guide"
            className="duration-500 cursor-pointer delay-600 animate-in fade-in zoom-in hover:text-tealClr"
          >
            Guide
          </Link>
          <Link
            href="https://github.com/SolGPTAI/docs"
            className="duration-500 cursor-pointer delay-600 animate-in fade-in zoom-in hover:text-tealClr"
          >
            Github
          </Link>
        </nav>

        <div className="flex items-center justify-center gap-4">
          <nav className="hidden gap-4 lg:flex">
            {/* <!-- Twitter SVG--> */}
            <Link href="https://x.com/AISolGPT" target="_blank" rel="noopener noreferrer">
              <svg
                width="23"
                height="23"
                viewBox="0 0 300 300"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="duration-500 cursor-pointer delay-600 animate-in fade-in zoom-in hover:text-tealClr"
              >
                <path
                  d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
                  fill="currentColor"
                />
              </svg>
            </Link>

            {/* <!-- Discord SVG --> */}
            <Link href="https://t.me/solgptai" target="_blank" rel="noopener noreferrer">
            <svg
          viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         style={{
            width: "23px",  // Adjust size if needed
           height: "23px", // Adjust size if needed
         }}
>
         <g id="SVGRepo_iconCarrier">
            <path
             fillRule="evenodd"
              clipRule="evenodd"
              d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
             fill="#FFFFFF"
          ></path>
         </g>
            </svg>

            </Link>
          </nav>

  

          <Sheet open={showSidebar} onOpenChange={setShowSidebar}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu size={30} />
              </Button>
            </SheetTrigger>

            <SheetContent className="w-[400px] sm:w-[540px]">
              <nav className="flex flex-col gap-4 text-[1.5em] mt-8">
                <Link
                  onClick={() => setShowSidebar(false)}
                  className="SidebarLink"
                  href="/"
                >
                  <Home size={28} />
                  <div className="text-[0.8em] ">Home</div>
                </Link>
                <Link
                  onClick={() => setShowSidebar(false)}
                  className="SidebarLink"
                  href="https://solgptai.gitbook.io/solgptai-guide"
                >
                  <Info size={28} />
                  <div className="text-[0.8em]">GitHub</div>
                </Link>
                <Link
                  onClick={() => setShowSidebar(false)}
                  className="SidebarLink"
                  href="https://github.com/SolGPTAI/docs"
                >
                  <Wrench size={28} />
                  <div className="text-[0.8em]">Guide</div>
                </Link>
                <Link
                  onClick={() => setShowSidebar(false)}
                  className="SidebarLink"
                  href="https://x.com/AISolGPT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 300 300"
                    version="1.1"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
                      fill="currentColor"
                    />
                  </svg>
                  <div className=" text-[0.8em]">Twitter</div>
                </Link>

                {/* <!-- Discord SVG --> */}
                <Link
                  onClick={() => setShowSidebar(false)}
                  className="SidebarLink"
                  href="https://t.me/solgptai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={{
    width: "23px",  // Adjust size if needed
    height: "23px", // Adjust size if needed
  }}
>
  <g id="SVGRepo_iconCarrier">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
      fill="#FFFFFF"
    ></path>
  </g>
</svg>

                  <div className="text-[0.8em]">Telegram</div>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
