export default function Overview() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:items-center">
        <span className="font-mono text-sm tracking-tight text-[rgb(103_232_249)]">
          Overview
        </span>
        <h2 className="font-display mt-4 text-left text-2xl font-light leading-[1.125] text-white md:text-center md:text-4xl lg:text-5xl">
          Revolutionizing the way
          <span className="text-white/50">
            you <br />
            understand documents
          </span>
        </h2>
        <p className="mx-auto mt-4 text-left leading-relaxed text-white/50 md:max-w-2xl md:text-center lg:mt-8">
          Recharger lets you have a conversation with your documents.{" "}
          <br className="hidden lg:block" />
          Just ask and retrieve the information you need, all in a simple chat.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:gap-8 md:only:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 p-8">
          <div className="absolute inset-x-1 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

          <div>
            <div></div>
            <div className="flex items-center justify-center gap-4 py-6">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="relative h-8 w-8 fill-white/10 stroke-[1] text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  ></path>
                </svg>
              </div>
              <div className="w-[6.5rem] overflow-hidden">
                <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:6s]">
                  {[...new Array(17)].map((_, i) => {
                    return (
                      <div key={i} className="px-1">
                        <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="relative h-8 w-8 fill-cyan-400/10 stroke-[1] text-cyan-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-lg text-white">Upload documents</div>
              <p className="mt-4 text-sm font-light leading-relaxed text-white/75">
                Effortlessly upload the PDFs you want to chat with. Get things
                started with just a few clicks and your documents are ready for
                a chat.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 p-8">
          <div className="absolute inset-x-1 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

          <div>
            <div></div>
            <div className="flex items-center justify-center gap-4 py-6">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="relative h-8 w-8 fill-white/10 stroke-[1] text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  ></path>
                </svg>
              </div>
              <div className="w-9 overflow-hidden">
                <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:6s]">
                  {[...new Array(17)].map((_, i) => {
                    return (
                      <div key={i} className="px-1">
                        <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="relative h-8 w-8 fill-cyan-400/10 stroke-[1] text-cyan-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  ></path>
                </svg>
              </div>
              <div className="w-9 overflow-hidden">
                <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:6s]">
                  {[...new Array(17)].map((_, i) => {
                    return (
                      <div key={i} className="px-1">
                        <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="relative h-8 w-8 fill-teal-400/10 stroke-[1] text-teal-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-lg text-white">Real-time responses</div>
              <p className="mt-4 text-sm font-light leading-relaxed text-white/75">
                Pop the questions, pull out information, or get a quick summary
                of your documents using our smart AI. It's all instant and
                tailored for you.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 p-8">
          <div className="absolute inset-x-1 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div>
            <div></div>
            <div className="flex items-center justify-center gap-4 py-6">
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="relative h-8 w-8 fill-white/10 stroke-[1] text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  ></path>
                </svg>
              </div>
              <div className="w-9 overflow-hidden">
                <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:6s]">
                  {[...new Array(17)].map((_, i) => {
                    return (
                      <div key={i} className="px-1">
                        <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="relative h-8 w-8 fill-cyan-400/10 stroke-[1] text-cyan-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  ></path>
                </svg>
              </div>
              <div className="w-9 overflow-hidden">
                <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:6s]">
                  {[...new Array(17)].map((_, i) => {
                    return (
                      <div key={i} className="px-1">
                        <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="relative h-8 w-8 fill-teal-400/10 stroke-[1] text-teal-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-lg text-white">References included</div>
              <p className="mt-4 text-sm font-light leading-relaxed text-white/75">
                Every answer you receive comes directly from your uploaded
                documents – we always include the source for full transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
