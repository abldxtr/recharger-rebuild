"use client";

import classNames from "classnames";
import { useState } from "react";

export default function Accord_child({ q, a }: { q: string; a: string }) {
  const [active, setActive] = useState(false);
  return (
    <div className="mx-auto max-w-3xl">
      {/* //start acc */}
      <div className="group border-b border-white/10">
        <div
          className="flex cursor-pointer items-center py-6"
          onClick={() => setActive(!active)}
        >
          <div className="text-white/75 hover:text-white transition">{q}</div>
          <div className="relative ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className={classNames(
                " h-6 w-6 text-white/50 transition-transform duration-500",
                active ? "rotate-180" : "rotate-45",
              )}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
        </div>

        {/* //asnwer */}
        <div
          style={{}}
          className={classNames(
            "overflow-hidden transition-all duration-500 will-change-[height]",
            active ? "h-[96px] " : "h-0",
          )}
        >
          <div className="pb-6 font-light text-white/75">{a}</div>
        </div>
      </div>
    </div>
  );
}
