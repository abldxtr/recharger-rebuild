"use client";

import classNames from "classnames";
import { useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);
  const menue = [
    {
      text: "Overview",
    },
    {
      text: "Features",
    },
    {
      text: "F.A.Q.",
    },
    {
      text: "Pricing",
    },
  ];

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-10 bg-zinc-950/30  duration-300 transition-all backdrop-blur-lg">
        <div className="relative mx-auto max-w-7xl z-[100] px-4 sm:px-6 lg:px-8">
          <header>
            <nav className="flex items-center justify-between py-4">
              <div className="   ">
                <a href="/" className="inline-flex items-center gap-2">
                  <div className="whitespace-nowrap text-lg font-normal md:text-2xl">
                    <span>re</span>
                    <span className="text-[rgb(34_211_238)]">char</span>
                    <span>ger</span>
                  </div>
                </a>
              </div>
              <div className="hidden items-center gap-x-8 md:flex">
                {menue.map((item, index) => {
                  return (
                    <a
                      key={index}
                      href="/"
                      className="inline-block text-sm text-white/75 transition hover:text-white"
                    >
                      {item.text}
                    </a>
                  );
                })}

                <a
                  href="/"
                  className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur transition duration-300 hover:bg-white/25"
                >
                  {" "}
                  Get started{" "}
                </a>
              </div>

              <div
                className="relative ml-auto inline-flex md:hidden cursor-pointer "
                onClick={() => setShow(!show)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6 transition duration-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  ></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="-rotate-180 opacity-0 absolute inset-0 h-6 w-6 transition duration-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            </nav>
          </header>
        </div>
      </div>

      <div className=" fixed top-12  bg-transparent  overflow-hidden origin-top w-full md:hidden z-10   transition-all  ">
        <div
          className={classNames(
            "flex flex-col py-4 overflow-hidden duration-300 relative w-full h-full bg-zinc-950/30 backdrop-blur-lg space-y-4 transition-all text-center",
            show ? "  h-full   translate-y-0 " : " h-0  -translate-y-full  ",
          )}
        >
          {menue.map((item, index) => {
            return (
              <a
                key={index}
                href="/"
                className="inline-block text-base font-medium text-white/75 w-full transition hover:text-white"
              >
                {item.text}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
