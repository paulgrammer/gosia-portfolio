import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemSwitch from "./components/ThemeSwitch";
import PrelineScript from "./components/PrelineScript";
import { NavLinks, linkToCV } from "./data/links";
import { details } from "./data/details";

import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: details.name,
  description: details.decription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = "/";

  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-slate-900 bg-main`}>
        {/* ========== HEADER ========== */}
        <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
          <nav
            className="relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700 shadow-md"
            aria-label="Global"
          >
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="flex-none font-semibold dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <div className="text-xl text-gray-800 dark:text-neutral-50">
                  {details.name}
                </div>
                <div className="text-xs text-gray-500">{details.email}</div>
              </Link>
              <div className="md:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  data-hs-collapse="#navbar-collapse-with-animation"
                  aria-controls="navbar-collapse-with-animation"
                  aria-label="Toggle navigation"
                >
                  <svg
                    className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1={3} x2={21} y1={6} y2={6} />
                    <line x1={3} x2={21} y1={12} y2={12} />
                    <line x1={3} x2={21} y1={18} y2={18} />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
            >
              <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
                {NavLinks.map((navlink, idx) => (
                  <Link
                    key={idx}
                    target={navlink.target}
                    className={`${
                      pathname === navlink.href
                        ? "text-blue-600 dark:text-blue-500"
                        : "text-gray-500 dark:text-gray-400"
                    } font-medium  hover:text-gray-400 md:py-6 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}
                    href={navlink.href}
                  >
                    {navlink.name}
                  </Link>
                ))}

                <ThemSwitch />

                <div className="md:border-s md:border-gray-300 md:ps-6 dark:border-gray-700">
                  <a
                    target="_blank"
                    href={linkToCV}
                    className="select-none py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Download CV
                    <svg
                      className="flex-shrink-0 w-4 h-4"
                      fill="none"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/* ========== END HEADER ========== */}
        {/* ========== MAIN CONTENT ========== */}
        <main id="content" role="main">
          <div className="max-w-[85rem] mx-auto pt-12 pb-10 px-4 sm:px-6 lg:px-8 md:pt-24">
            {children}
          </div>
        </main>
      </body>

      <PrelineScript />
    </html>
  );
}
