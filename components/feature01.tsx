export default function Feature_01() {
  return (
    <div className="py-8 lg:py-12">
      <div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-16">
          <div>
            <div className="flex flex-col items-center bg-[radial-gradient(35%_128px_at_50%_100%,theme(backgroundColor.white/5%),transparent)] pb-8 lg:pb-16">
              <span className="font-mono text-sm tracking-tight text-accent">
                Features
              </span>
              <h2 className="font-lead mt-4 max-w-xl text-center text-xl font-light leading-tight tracking-wide text-white lg:text-3xl">
                Dive into AI-powered features. Chat, learn, and get the most out
                of your documents in no time
              </h2>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="mt-8 lg:mt-16">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-16">
              <div>
                <div className="flex items-center">
                  <div className="rounded border border-white/5 bg-white/5 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 fill-white/10 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4 text-lg">Document decoder</div>
                </div>
                <div className="ml-11 mt-2 pl-0.5 text-sm font-light leading-relaxed text-white/75">
                  Transform complex content into understandable format
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="rounded border border-white/5 bg-white/5 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 fill-white/10 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4 text-lg">Intelligent summarization</div>
                </div>
                <div className="ml-11 mt-2 pl-0.5 text-sm font-light leading-relaxed text-white/75">
                  Rapidly encapsulate main ideas and key points
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="rounded border border-white/5 bg-white/5 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 fill-white/10 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4 text-lg">Real-time chat</div>
                </div>
                <div className="ml-11 mt-2 pl-0.5 text-sm font-light leading-relaxed text-white/75">
                  Interact directly and personally with your document
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="rounded border border-white/5 bg-white/5 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 fill-white/10 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4 text-lg">Dynamic suggestions</div>
                </div>
                <div className="ml-11 mt-2 pl-0.5 text-sm font-light leading-relaxed text-white/75">
                  Get insightful suggestions based on content
                </div>
              </div>
              <div
                style={
                  {
                    // --delay:600ms;
                  }
                }
                className="transition-all delay-[--delay] duration-[--duration]"
              >
                <div className="flex items-center">
                  <div className="rounded border border-white/5 bg-white/5 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 fill-white/10 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4 text-lg">Metric identification</div>
                </div>
                <div className="ml-11 mt-2 pl-0.5 text-sm font-light leading-relaxed text-white/75">
                  Extract and calculate vital statistics instantly
                </div>
              </div>
              <div
                style={
                  {
                    // --delay:750ms;
                  }
                }
                className="transition-all delay-[--delay] duration-[--duration]"
              >
                <div className="flex items-center">
                  <div className="rounded border border-white/5 bg-white/5 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 fill-white/10 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4 text-lg">Smooth integration</div>
                </div>
                <div className="ml-11 mt-2 pl-0.5 text-sm font-light leading-relaxed text-white/75">
                  Simply drag and drop your PDFs to start chatting
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <div className="rounded border border-white/5 bg-white/5 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 fill-white/10 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4 text-lg">Contract decipher</div>
                </div>
                <div className="ml-11 mt-2 pl-0.5 text-sm font-light leading-relaxed text-white/75">
                  Simplify legal jargon in contracts and official documents
                </div>
              </div>
              <div className="">
                <div className="flex items-center">
                  <div className="rounded border border-white/5 bg-white/5 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 fill-white/10 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-4 text-lg">Detailed analysys</div>
                </div>
                <div className="ml-11 mt-2 pl-0.5 text-sm font-light leading-relaxed text-white/75">
                  Dive deep into documents for comprehensive insights.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
