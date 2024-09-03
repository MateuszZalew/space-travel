"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./nav.module.css";

export default function Nav() {
  const [visibleNav, setVisibleNav] = useState(false);
  const pathname = usePathname();

  const handleNavToggle = () => {
    setVisibleNav(!visibleNav);
  };

  return (
    <header className={`${styles.primaryHeader} flex`}>
      <div>
        <Link href="/">
          <Image
            src="/assets/shared/logo.svg"
            alt="logo"
            width={48}
            height={48}
            className={styles.logo}
          />
        </Link>
      </div>
      <button
        className={`${styles.mobileNavToggle} ${
          visibleNav ? `${styles.closeNavImage}` : ""
        }`}
        aria-controls="primary-navigation"
        onClick={handleNavToggle}
      >
        <span className="sr-only" aria-expanded="false">
          Menu
        </span>
      </button>
      <nav className={styles.nav}>
        <ul
          id="primary-navigation"
          data-visible={visibleNav}
          className={`${styles.primaryNavigation} underline-indicators flex`}
        >
          <li className={`${pathname === "/" ? "active" : ""}`}>
            <Link className="uppercase text-white letter-spacing-2" href="/">
              <span aria-hidden="true">00</span>Home
            </Link>
          </li>
          <li className={`${pathname === "/destination" ? "active" : ""}`}>
            <Link
              className="uppercase text-white letter-spacing-2"
              href="/destination"
            >
              <span aria-hidden="true">01</span>Destination
            </Link>
          </li>
          <li className={`${pathname === "/crew" ? "active" : ""}`}>
            <Link
              className="uppercase text-white letter-spacing-2"
              href="/crew"
            >
              <span aria-hidden="true">02</span>Crew
            </Link>
          </li>
          <li className={`${pathname === "/technology" ? "active" : ""}`}>
            <Link
              className="uppercase text-white letter-spacing-2"
              href="/technology"
            >
              <span aria-hidden="true">03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
