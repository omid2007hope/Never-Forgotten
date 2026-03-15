"use client";

import { useState } from "react";
import Link from "next/link";

import FetchHeaderData from "../../../api/versionOne/Header";

export async function sendHeaderDataToApi(headerOptionList) {
  try {
    return await FetchHeaderData(headerOptionList);
  } catch (error) {
    console.error("Failed to sync header options:", error);
    return null;
  }
}

export default function Header() {
  // useState setOpen for Mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Header's option list - Limit 6 option in total
  const headerOptionList = [
    { name: "Home", id: 1, href: "/" },
    { name: "Legends", id: 2, href: "/" },
    { name: "Daily Edition", id: 3, href: "/" },
    { name: "Stories", id: 4, href: "/" },
    { name: "Submit & Tribute", id: 5, href: "/" },
    { name: "Login", id: 6, href: "/" },
  ];

  // Prevents CSS Probelm when there are more than 6 option in the DataBase

  if (headerOptionList.id > 6) {
    alert("Header: Only 6 option is allowed, more causes CSS problems");
    return;
  }

  // Left side - filter - id === 3 or id < 3
  const leftOptions = headerOptionList.filter((option) => option.id <= 3);
  // Right side -  filter - id > 3
  const rightOptions = headerOptionList.filter((option) => option.id > 3);

  // Global CSS Style for Dekstop
  const desktopLinkClassName =
    "flex items-center justify-center whitespace-nowrap px-3 py-2 text-sm font-medium text-amber-50 transition hover:text-yellow-300 lg:text-base";

  // Global CSS Style for Mobile
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
          </nav>
        </div>
      ) : null}
    </header>
  );
}
