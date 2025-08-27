import React, { useRef, useEffect, useState } from "react";

import { Container } from "reactstrap";
import classes from "./header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#services",
    display: "Services",
  },
  {
    path: "#work",
    display: "Experience",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
  {
    path: "#blog",
    display: "Blog",
  },
  {
    path: "#contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("/");

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    
    // Set active section based on current route
    setActiveSection(router.pathname);

    return () => window.removeEventListener("scroll", headerFunc);
  }, [router.pathname]);

  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__active}`);

  const handleNavClick = (e) => {
    // Close mobile menu when a nav link is clicked
    if (menuRef.current && menuRef.current.classList.contains(`${classes.menu__active}`)) {
      menuRef.current.classList.remove(`${classes.menu__active}`);
    }
  };

  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          {/* ======== navigation logo ======== */}
          <div className={`${classes.logo}`}>
            <Link href="/" onClick={handleNavClick}>
              <h1>
                <span>R</span>ishabh
              </h1>
            </Link>
          </div>

          {/* ========= nav menu =========== */}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
          >
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link 
                  href={item.path} 
                  key={index} 
                  onClick={handleNavClick}
                  className={`${classes.nav__link} ${
                    (activeSection === item.path || 
                     (activeSection === "/" && item.path === "/")) 
                    ? classes.active 
                    : ""
                  }`}
                >
                  {item.display}
                </Link>
              ))}

              <div className={`${classes.nav__right}`}>
                <p className="d-flex align-items-center gap-2 mb-0">
                  <i className="ri-phone-line"></i> +918287233813
                </p>
              </div>
            </div>
          </div>

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};

export default Header;
