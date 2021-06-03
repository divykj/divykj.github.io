import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";
import { useMemo, useCallback } from "react";
import {
  AnimatePresence,
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

import useToggle from "helpers/useToggle";
import { navLinks } from "constants/routing";
import { fadeInDownMotion, fadeInMotion } from "constants/motion";

const breadcrumbVariants = fadeInDownMotion({ duration: 0.15, offset: 10 });
const pageLinkVariants = fadeInMotion({ duration: 0.15, initialDelay: 0.5 });
const navLinksVariants = fadeInDownMotion({ duration: 0.3, exitReverse: true });

const NAV_APPEAR_OFFSET = 500;
const NAV_HIDDEN_OFFSET = 80;

const Nav = ({}) => {
  const router = useRouter();
  const { scrollY } = useViewportScroll();
  const mobileNavLinks = useToggle(false);

  const paths = useMemo(
    () =>
      router.asPath
        .replace(/\/$/, "")
        ?.match(/\/?[^\/]+|\//g)
        ?.slice(0, -1),
    [router.asPath]
  );

  const navOffset = useTransform(
    scrollY,
    useCallback(
      (y) =>
        y < NAV_APPEAR_OFFSET &&
        typeof paths === "undefined" &&
        !mobileNavLinks.visible
          ? -NAV_HIDDEN_OFFSET
          : 0,
      [paths, mobileNavLinks.visible]
    )
  );
  const translateY = useSpring(navOffset, { damping: 25 });

  return (
    <>
      {typeof paths !== "undefined" && <div className="h-16" />}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-gray-800 shadow-sm"
        {...{ style: { translateY } }}
      >
        <motion.div className="flex items-center justify-between py-4 space-x-4 custom-container">
          <div className="flex">
            <Link passHref href="/" scroll>
              <motion.a
                initial="initial"
                animate="animate"
                exit="exit"
                variants={breadcrumbVariants}
                className="text-2xl plain-link"
                onClick={mobileNavLinks.hide}
              >
                divy
              </motion.a>
            </Link>
            <AnimatePresence>
              {paths &&
                paths.map((dir, i) => (
                  <Link
                    passHref
                    href={`${paths.slice(0, i + 1).join("")}`}
                    key={`title/${dir}`}
                  >
                    <motion.a
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      custom={i + 1}
                      variants={breadcrumbVariants}
                      className="text-2xl primary-link"
                    >
                      {dir}
                    </motion.a>
                  </Link>
                ))}
            </AnimatePresence>
          </div>
          {/* Desktop Nav Links */}
          <div className="hidden space-x-8 md:flex">
            {navLinks.map((link, i) => (
              <Link passHref href={link} key={`nav/${link}`}>
                <motion.a
                  initial="initial"
                  animate="animate"
                  custom={i}
                  variants={pageLinkVariants}
                  className={classNames("primary-link text-lg", {
                    "bg-black bg-opacity-20": router.asPath.startsWith(link),
                  })}
                >
                  {link}
                </motion.a>
              </Link>
            ))}
          </div>
          {mobileNavLinks.visible ? (
            <XIcon
              className="block w-12 h-12 p-3 text-2xl bg-black bg-opacity-20 primary-link md:hidden"
              onClick={mobileNavLinks.hide}
            />
          ) : (
            <MenuAlt1Icon
              className="block w-12 h-12 p-3 text-2xl bg-black bg-opacity-20 primary-link md:hidden"
              onClick={mobileNavLinks.show}
            />
          )}
        </motion.div>
      </motion.nav>
      <AnimatePresence>
        {mobileNavLinks.visible && (
          <motion.div
            className={classNames(
              "fixed z-40 pt-24 top-0 left-0 right-0 bottom-0 surface md:hidden"
            )}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={navLinksVariants}
            onClick={mobileNavLinks.hide}
          >
            {navLinks.map((link, i) => (
              <Link passHref href={link} key={`nav/${link}`}>
                <motion.div
                  className={classNames("px-6 py-3", {
                    "bg-black bg-opacity-20": router.asPath.startsWith(link),
                  })}
                  // onClick={mobileNavLinks.hide}
                  initial="initial"
                  animate="animate"
                  custom={i}
                  variants={pageLinkVariants}
                >
                  <motion.a className={classNames("primary-link text-lg")}>
                    {link}
                  </motion.a>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
