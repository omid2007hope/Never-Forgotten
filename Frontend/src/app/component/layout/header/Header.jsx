"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import FetchHeaderData from "../../../api/versionOne/Header";

export default function Header() {
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

        const limitedHeaderData = headerData
          .sort((firstOption, secondOption) => firstOption.id - secondOption.id)
          .slice(0, 6);

        if (headerData.length > 6) {
          console.warn("Header: Only 6 options are allowed. Extra items were ignored.");
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

  const leftOptions = headerOptionList.filter((option) => option.id <= 3);
  const rightOptions = headerOptionList.filter((option) => option.id > 3);

  const desktopLinkClassName =
    "flex items-center justify-center whitespace-nowrap px-3 py-2 text-sm font-medium text-amber-50 transition hover:text-yellow-300 lg:text-base";

  const mobileLinkClassName =
    "block rounded-md border border-white/10 px-4 py-3 text-sm font-medium text-amber-50 transition hover:border-yellow-300/40 hover:text-yellow-300";

  const renderDesktopOptions = (options) =>
    options.map((option) => (
      <Link
        key={option.id}
        href={option.href}
        className={desktopLinkClassName}
        onClick={() => setIsMenuOpen(false)}
      >
        {option.name}
      </Link>
    ));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-green-950/90 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between gap-4 lg:hidden">
          <Link
            href="/"
            className="text-base font-semibold tracking-[0.2em] text-yellow-300 sm:text-lg"
          >
            Never Forgotten
          </Link>
          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center rounded-md border border-white/15 px-3 py-2 text-sm font-medium text-amber-50 transition hover:border-yellow-300/40 hover:text-yellow-300"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            Menu
          </button>
        </div>

        <div className="hidden w-full items-center justify-between gap-6 lg:flex">
          <nav className="flex min-w-0 flex-1 items-center justify-start gap-1 xl:gap-3">
            {renderDesktopOptions(leftOptions)}
          </nav>
          <Link
            href="/"
            className="shrink-0 px-4 text-center text-xl font-semibold tracking-[0.3em] text-yellow-300 xl:text-2xl"
          >
            Never Forgotten
          </Link>
          <nav className="flex min-w-0 flex-1 items-center justify-end gap-1 xl:gap-3">
            {renderDesktopOptions(rightOptions)}
          </nav>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-white/10 px-4 pb-4 pt-3 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
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
              <span className="rounded-md border border-white/10 px-4 py-3 text-sm text-amber-50/70">
                No header items found.
              </span>
            ) : null}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
