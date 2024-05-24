import classNames from "classnames";

export default function Pricing() {
  const items = [
    {
      plan: "Starter",
      price: "$29",
      features: [
        "Real-time chat",
        "Dynamic suggestions",
        "Detailed analysis",
        "Chat history",
      ],
      button: {
        text: "Get started",
        link: "#",
      },
    },
    {
      plan: "Basic",
      price: "$49",
      features: [
        "Real-time chat",
        "Dynamic suggestions",
        "Detailed analysis",
        "Chat history",
        "Intelligent summarization",
        "Key metric identification",
      ],
      button: {
        text: "Get started for free",
        link: "#",
      },
    },
    {
      plan: "Enterprise",
      price: "$490",
      features: [
        "Dynamic suggestions",
        "Detailed analysis",
        "Intelligent summarization",
        "Key metric identification",
      ],
      button: {
        text: "Get started",
        link: "#",
      },
    },
  ];

  return (
    <div id="pricing" className="scroll-mt-8 py-8 lg:py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:items-center">
          <span className="text-accent-300 font-mono text-sm tracking-tight">
            Pricing
          </span>
          <h2 className="font-display mt-4 text-left text-2xl font-light leading-[1.125] text-white md:text-center md:text-4xl lg:text-5xl">
            Choose the plan <br />
            that
            <span className="text-white/50">fits you best</span>
          </h2>
          <p className="mx-auto mt-4 text-left leading-relaxed text-white/50 md:max-w-2xl md:text-center lg:mt-8">
            Get started for free and upgrade once you feel like it. There's a
            plan for everyone, from individual users to large teams.
          </p>
        </div>
        <div className="mt-8 lg:mt-16">
          <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-3 lg:gap-0">
            {items.map((item, index) => {
              return (
                <div key={index} className="lg:flex lg:items-end lg:pb-5">
                  <div
                    //   key={index}
                    style={
                      {
                        // --x:209px; --y:-159.063px; --spotlight-color-stops:rgba(255,255,255,0.2),transparent; --spotlight-size:350px;
                      }
                    }
                    className={classNames(
                      "relative w-full transform-gpu overflow-hidden  before:absolute before:inset-0 before:bg-[radial-gradient(350px_circle_at_209px_-159.063px,rgba(255,255,255,0.2))] ",
                      "rounded-3xl p-8 border border-zinc-200/20  lg:rounded-l-3xl   ",
                      index === 0 && " lg:border-r-0 lg:rounded-e-none ",
                      index === 1 && " lg:rounded-b-none  ",
                      index === 2 &&
                        " lg:border-l-0 lg:rounded-e-3xl lg:rounded-s-none ",
                    )}
                  >
                    <div className="lg:rounded-tb-none from-white/15 absolute inset-x-0 bottom-3xl top-0 rounded-3xl bg-gradient-to-b to-transparent lg:rounded-r-none lg:rounded-tl-3xl"></div>
                    <div className="absolute inset-px rounded-3xl bg-gradient-to-b from-zinc-950/75 to-zinc-950 lg:right-0 lg:rounded-r-none"></div>
                    <div className="relative">
                      <div className="font-mono text-white">{item.plan}</div>
                      <div className="mt-4 flex items-end">
                        <div className="font-lead text-4xl font-bold text-white">
                          {item.price}
                        </div>
                        <span className="ml-1 text-sm text-white/50">
                          / month
                        </span>
                      </div>
                      <div className="mt-8 divide-y divide-white/10 text-sm font-medium text-white/75">
                        {item.features.map((i, index) => {
                          return (
                            <div key={index} className="py-2">
                              {i}
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-12">
                        <a
                          href="#"
                          className={classNames(
                            "inline-block w-full rounded-lg  px-4 py-2 text-center font-medium  transition duration-300 ",
                            index === 1
                              ? " bg-white  text-zinc-950  hover:bg-white/80"
                              : "bg-white/5 text-white hover:bg-white/10",
                          )}
                        >
                          {item.button.text}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* </div> */}
            {/* <div className="lg:flex lg:items-end lg:pb-5">
              <div
                style={
                  {
                    // --x:209px; --y:-159.063px; --spotlight-color-stops:rgba(255,255,255,0.2),transparent; --spotlight-size:350px;
                  }
                }
                className="relative w-full transform-gpu overflow-hidden rounded-3xl p-8 [--radius:theme(borderRadius.2xl)] before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))] lg:rounded-l-3xl lg:rounded-r-none lg:[--radius:theme(borderRadius.3xl)]"
              >
                <div className="lg:rounded-tb-none from-white/15 absolute inset-x-0 bottom-3xl top-0 rounded-3xl bg-gradient-to-b to-transparent lg:rounded-r-none lg:rounded-tl-3xl"></div>
                <div className="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-gradient-to-b from-zinc-950/75 to-zinc-950 lg:right-0 lg:rounded-r-none"></div>
                <div className="relative">
                  <div className="font-mono text-white">Starter</div>
                  <div className="mt-4 flex items-end">
                    <div className="font-lead text-4xl font-bold text-white">
                      $29
                    </div>
                    <span className="ml-1 text-sm text-white/50">/ month</span>
                  </div>
                  <div className="mt-8 divide-y divide-white/10 text-sm font-medium text-white/75">
                    <div className="py-2">Real-time chat</div>

                    <div className="py-2">Dynamic suggestions</div>

                    <div className="py-2">Detailed analysis</div>

                    <div className="py-2">Chat history</div>
                  </div>
                  <div className="mt-12">
                    <a
                      href="#"
                      className="inline-block w-full rounded-lg bg-white/5 px-4 py-2 text-center font-medium text-white transition duration-300 hover:bg-white/10"
                    >
                      {" "}
                      Get started{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={
                {
                  // --x:509px; --y:-202.063px; --spotlight-color-stops:rgba(255,255,255,0.2),transparent; --spotlight-size:350px;
                }
              }
              className="relative transform-gpu overflow-hidden rounded-3xl p-8 [--radius:theme(borderRadius.2xl)] before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))] lg:[--radius:theme(borderRadius.3xl)]"
            >
              <div className="from-white/15 absolute inset-x-0 bottom-3xl top-0 rounded-t-3xl bg-gradient-to-b to-transparent"></div>
              <div className="absolute inset-x-3xl top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
              <div className="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-zinc-950"></div>
              <div className="absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/3%),transparent)]"></div>
              <div className="relative flex h-full flex-col">
                <div className="font-mono text-white">Basic</div>
                <div className="mt-4 flex items-end">
                  <div className="font-lead text-4xl font-bold text-white">
                    $49
                  </div>
                  <span className="ml-1 text-sm text-white/50">/ month</span>
                </div>
                <div className="mt-8 divide-y divide-white/10 text-sm font-medium text-white/75">
                  <div className="py-2">Real-time chat</div>
                  <div className="py-2">Dynamic suggestions</div>
                  <div className="py-2">Detailed analysis</div>
                  <div className="py-2">Chat history</div>
                  <div className="py-2">Intelligent summarization</div>
                  <div className="py-2">Key metric identification</div>
                </div>
                <div className="mt-12">
                  <a
                    href="#"
                    className="inline-block w-full rounded-lg bg-white px-4 py-2 text-center font-medium text-zinc-950 transition duration-300 hover:bg-white/80"
                  >
                    {" "}
                    Get started for free{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-end pb-5">
              <div
                style={
                  {
                    // --x:509px; --y:-137.06px; --spotlight-color-stops:rgba(255,255,255,0.2),transparent; --spotlight-size:350px;
                  }
                }
                className="relative w-full transform-gpu overflow-hidden rounded-3xl p-8 [--radius:theme(borderRadius.2xl)] before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))] lg:rounded-l-none lg:rounded-r-3xl lg:[--radius:theme(borderRadius.3xl)]"
              >
                <div className="from-white/15 absolute inset-x-0 bottom-3xl top-0 rounded-3xl bg-gradient-to-b to-transparent lg:rounded-l-none lg:rounded-tr-3xl"></div>
                <div className="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-gradient-to-b from-zinc-950/75 to-zinc-950 lg:left-0 lg:rounded-l-none lg:rounded-r-[calc(var(--radius)-1px)]"></div>
                <div className="relative">
                  <div className="font-mono text-white">Enterprise</div>
                  <div className="mt-4 flex items-end">
                    <div className="font-lead text-4xl font-bold text-white">
                      $490
                    </div>
                    <span className="ml-1 text-sm text-white/50">/ month</span>
                  </div>
                  <div className="mt-8 divide-y divide-white/10 text-sm font-medium text-white/75">
                    <div className="py-2">Dynamic suggestions</div>

                    <div className="py-2">Detailed analysis</div>

                    <div className="py-2">Intelligent summarization</div>

                    <div className="py-2">Key metric identification</div>
                  </div>
                  <div className="mt-12">
                    <a
                      href="#"
                      className="inline-block w-full rounded-lg bg-white/5 px-4 py-2 text-center font-medium text-white transition duration-300 hover:bg-white/10"
                    >
                      {" "}
                      Get started{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
