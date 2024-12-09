"use client";

import Logo from "../assets/logo.svg";
import Link from "next/link";
import MenuClose from "../assets/icons/icon-menu-close.svg";
import MenuOpen from "../assets/icons/icon-menu.svg";
import { useState } from "react";
import { usePathname } from "next/navigation";

const paths = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "New",
    path: "/new",
  },
  {
    label: "Popular",
    path: "/popular",
  },
  {
    label: "Trending",
    path: "/trending",
  },
  {
    label: "Categories",
    path: "/categories",
  },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="mx-4 my-12">
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Logo">
          <Logo />
        </Link>
        {
          <>
            <div className={`${isMenuOpen ? "visible block" : "invisible hidden"} lg:invisible lg:hidden absolute top-0 left-0 inset-0 bg-inverse/50`} />
            <div
              className={`fixed h-full top-0 right-0 w-2/3 bg-default grid content-center transition-transform duration-300 lg:invisible lg:hidden ${isMenuOpen ? "" : "translate-x-full"} `}
              aria-hidden={isMenuOpen}
              data-state={isMenuOpen ? "visible" : "hidden"}
            >
              <button
                className="absolute top-8 right-8"
                onClick={handleCloseMenu}
                aria-label="close menu"
                name="close menu"
              >
                <MenuClose />
              </button>
              <nav className="">
                <ul className="flex flex-col gap-6 mx-8">
                  {
                    paths.map(p => (
                      <li key={p.path} data-role="menuitem">
                        <Link
                          className={`text-xl text-default ${pathname === p.path ? "text-nav-link-active" : ""}`}
                          href="/"
                        >
                          {p.label}
                        </Link>
                      </li>

                    ))
                  }
                </ul>
              </nav>
            </div>
            <button
              className="lg:hidden lg:invisible"
              data-state={isMenuOpen ? "open" : "closed"}
              onClick={handleOpenMenu}
              aria-label="open menu"
              aria-expanded={isMenuOpen}
              name="open menu"
            >
              <MenuOpen />
            </button>
            <div className="invisible hidden lg:visible lg:block">
              <nav className="">
                <ul className="flex gap-12">
                  {
                    paths.map(p => (
                      <li key={p.path} data-role="menuitem">
                        <Link
                          className={`text-nav-link hover:text-nav-link-hover ${pathname === p.path ? "text-nav-link-active" : ""}`}
                          href="/"
                        >
                          {p.label}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </div>
          </>
        }
      </div>
    </header>
  );
};

export default Nav;