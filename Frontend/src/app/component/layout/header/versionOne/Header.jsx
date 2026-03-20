"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import FetchHeaderData from "../../../../api/versionOne/Header";
import americanFlag from "../../../../assets/image/American Flag.webp";
import goldenBorderTexture from "../../../../assets/image/Golden Border.jpg";
import headerTexture from "../../../../assets/image/Header Background Dark Green.jpg";

const topHeaderStyle = {
  backgroundColor: "#1f3417",
  backgroundImage: `linear-gradient(rgba(7, 12, 6, 0.18), rgba(7, 12, 6, 0.18)), url("${headerTexture.src}")`,
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
};

const goldTextureStyle = {
  backgroundColor: "#d7b355",
  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.16), rgba(130, 84, 10, 0.2)), url("${goldenBorderTexture.src}")`,
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
};

const heroFrameStyle = {
  backgroundColor: "#3a5125",
  backgroundImage: `linear-gradient(rgba(7, 12, 6, 0.16), rgba(7, 12, 6, 0.16)), url("${headerTexture.src}")`,
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
  backgroundSize: "cover",
};

const pageBackdropStyle = {
  backgroundImage:
    "linear-gradient(to bottom, #8a2a33 0%, #aa5248 24%, #dfd6b0 54%, #9b9988 78%, #2e3e55 100%)",
};

export default function HeaderV1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerOptionList, setHeaderOptionList] = useState([]);
  const [hasLoadedHeader, setHasLoadedHeader] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadHeaderOptions() {
      try {
        const headerData = await FetchHeaderData();

        if (!isMounted) {
          return;
        }

        const limitedHeaderData = [...headerData]
          .sort((firstOption, secondOption) => firstOption.id - secondOption.id)
          .slice(0, 6);

        if (headerData.length > 6) {
          console.warn(
            "Header: Only 6 options are allowed. Extra items were ignored.",
          );
        }

        setHeaderOptionList(limitedHeaderData);
      } catch (error) {
        if (isMounted) {
          console.error("Failed to load header options:", error);
          setHeaderOptionList([]);
        }
      } finally {
        if (isMounted) {
          setHasLoadedHeader(true);
        }
      }
    }

    loadHeaderOptions();

    return () => {
      isMounted = false;
    };
  }, []);

  const leftOptions = headerOptionList.slice(0, 3);
  const rightOptions = headerOptionList.slice(3, 6);

  const navLinkClassName =
    "flex items-center justify-center px-3 py-2 text-[0.95rem] font-semibold tracking-[0.05em] text-[#efcc75] transition hover:text-[#ffe59c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3d479] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f3417] lg:text-[1rem]";

  const mobileLinkClassName =
    "flex items-center rounded-sm border border-[#d8b55d]/70 bg-[#24391b] px-4 py-3 text-sm font-semibold tracking-[0.05em] text-[#f0d488] transition hover:bg-[#314c24] hover:text-[#ffe7a8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3d479] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f3417]";

  return (
    <header className="flex w-full flex-col">
      <div
        className="flex w-full flex-col border-b border-[#d8b55d]/70"
        style={topHeaderStyle}
      >
        <div className="flex h-10 w-full items-center justify-between border-b border-[#d8b55d]/40 px-4 sm:px-6">
          <p className="flex items-center text-[0.7rem] font-semibold tracking-[0.12em] text-[#f0d488] sm:text-sm">
            Honor the legends, preserve the stories.
          </p>
          <p className="hidden items-center text-right text-[0.7rem] font-semibold tracking-[0.12em] text-[#f0d488] sm:flex sm:text-sm">
            Get today&apos;s edition by morning
          </p>
        </div>

        <div className="flex w-full items-center px-3 py-3 sm:px-4 lg:hidden">
          <div className="flex w-full items-center justify-between gap-3">
            <Link
              href="/"
              className="flex items-center text-[1.02rem] font-semibold tracking-[0.08em] text-[#f0d488] transition hover:text-[#ffe7a8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3d479] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f3417]"
              onClick={() => setIsMenuOpen(false)}
            >
              Never Forgotten
            </Link>

            <button
              type="button"
              className="flex h-10 items-center justify-center rounded-sm border border-[#d8b55d]/80 bg-[#24391b] px-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#f0d488] transition hover:bg-[#314c24] hover:text-[#ffe7a8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3d479] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f3417]"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              Menu
            </button>
          </div>
        </div>

        <div className="hidden w-full lg:flex">
          <div className="flex flex-row justify-between w-full items-stretch">
            <nav
              className="w-1/3 flex flex-row justify-evenly items-center gap-1 px-4 xl:gap-2 xl:px-6"
              aria-label="Primary navigation left"
            >
              {leftOptions.map((option) => (
                <Link
                  key={option.id}
                  href={option.href}
                  className={navLinkClassName}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {option.name}
                </Link>
              ))}
            </nav>

            <div className="w-1/3 flex items-center justify-center px-2 py-1">
              <div className="flex h-24 w-full items-center justify-center border border-[#d8b55d] px-4 shadow-[0_8px_24px_rgba(0,0,0,0.35)] xl:h-28">
                <div
                  className="flex h-full w-full items-center justify-center px-4 py-2"
                  style={goldTextureStyle}
                >
                  <div className="flex flex-col items-center text-center">
                    <Link
                      href="/"
                      className="flex items-center justify-center text-[1.5rem] font-semibold tracking-[0.03em] text-green-950 transition hover:text-green-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f3d479] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f3417] xl:text-[1.95rem]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Never Forgotten
                    </Link>
                    <span className="mt-1 flex items-center justify-center text-[0.72rem] font-semibold tracking-[0.1em] text-green-950 transition hover:text-green-900 sm:text-[0.8rem]">
                      Honor the legends. Preserve the stories.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <nav
              className="w-1/3 flex flex-row justify-evenly items-center gap-1 px-4 xl:gap-2 xl:px-6"
              aria-label="Primary navigation right"
            >
              {rightOptions.map((option) => (
                <Link
                  key={option.id}
                  href={option.href}
                  className={navLinkClassName}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {option.name}
                </Link>
              ))}
              <button
                className="flex items-center justify-center font-bold text-2xl px-3 py-2 rounded-lg text-green-950"
                style={goldTextureStyle}
              >
                Login
              </button>
            </nav>
          </div>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="flex w-full flex-col border-b border-[#d8b55d]/70 bg-[#172710] px-4 py-4 lg:hidden">
          <nav
            id="mobile-navigation"
            className="flex w-full flex-col gap-2"
            aria-label="Mobile navigation"
          >
            {headerOptionList.map((option) => (
              <Link
                key={option.id}
                href={option.href}
                className={mobileLinkClassName}
                onClick={() => setIsMenuOpen(false)}
              >
                {option.name}
              </Link>
            ))}

            {hasLoadedHeader && headerOptionList.length === 0 ? (
              <span className="flex items-center rounded-sm border border-[#d8b55d]/60 bg-[#24391b]/70 px-4 py-3 text-sm text-[#f2ddb0]/80">
                No header items found.
              </span>
            ) : null}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
