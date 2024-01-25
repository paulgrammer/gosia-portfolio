"use client";

import { motion } from "framer-motion";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";

enum Themes {
  Light = "light",
  Dark = "dark",
}

const LOCAL_STORAGE_THEME_KEY = "theme";
const DARK_SCHEME_MATCHER = "(prefers-color-scheme: dark)";
const LIGHT_SCHEME_MATCHER = "(prefers-color-scheme: light)";

export default function ThemSwitch() {
  const [theme, setTheme] = useState(
    (function () {
      if (
        typeof window !== "undefined" &&
        window.matchMedia(LIGHT_SCHEME_MATCHER).matches
      ) {
        return Themes.Light;
      } else if (
        typeof window !== "undefined" &&
        window.matchMedia(DARK_SCHEME_MATCHER).matches
      ) {
        return Themes.Dark;
      } else if (
        typeof localStorage !== "undefined" &&
        localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
      ) {
        return localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
      }
    })()
  );

  const isDarkTheme = useMemo(() => theme === Themes.Dark, [theme]);

  const toggleSwitch = useCallback(
    (newTheme?: string) => {
      if (!newTheme) {
        newTheme = isDarkTheme ? Themes.Light : Themes.Dark;
      }

      // Save to localstorage
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
      }

      setTheme(newTheme);
    },
    [isDarkTheme]
  );

  const spring = useMemo(
    () => ({
      type: "spring",
      stiffness: 700,
      damping: 30,
    }),
    []
  );

  const addTheme = useCallback((name: string) => {
    document.documentElement.classList.add(name);
  }, []);

  const removeTheme = useCallback((name: string) => {
    document.documentElement.classList.remove(name);
  }, []);

  // Function to handle color scheme changes
  const handleColorSchemeChange = useCallback((event: MediaQueryListEvent) => {
    if (event.matches) {
      toggleSwitch(Themes.Dark);
    } else {
      toggleSwitch(Themes.Light);
    }
  }, []);

  useEffect(() => {
    // Create a media query for prefers-color-scheme
    const colorSchemeMediaQuery: MediaQueryList =
      window.matchMedia(DARK_SCHEME_MATCHER);

    // Add event listener for changes
    colorSchemeMediaQuery.addEventListener("change", handleColorSchemeChange);

    return () => {
      colorSchemeMediaQuery.removeEventListener(
        "change",
        handleColorSchemeChange
      );
    };
  }, []);

  useEffect(() => {
    if (theme) {
      // Dark
      if (theme === Themes.Dark) {
        removeTheme(Themes.Light);
        addTheme(Themes.Dark);
      }

      // Light
      if (theme === Themes.Light) {
        removeTheme(Themes.Dark);
        addTheme(Themes.Light);
      }
    }
  }, [theme]);

  return (
    <div
      onClick={() => toggleSwitch()}
      className={`flex-start flex h-[40px] w-[70px] rounded-[50px] bg-zinc-100 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${
        isDarkTheme && "place-content-end"
      }`}
    >
      <motion.div
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black/90"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          {isDarkTheme ? (
            <RiSunFill className="h-6 w-6 text-yellow-300" />
          ) : (
            <RiMoonClearFill className="h-6 w-6 text-slate-200" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
