export default function Feature() {
  return (
    <div className="py-8 lg:py-16">
      <div className="bg-white/2.5 relative py-16 md:rounded-3xl lg:rounded-[3rem] xl:px-24 xl:py-32">
        <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950 p-1.5">
            <div className="h-1.5 w-8 rounded-lg bg-white"></div>
          </div>
        </div>
        <div className="absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-950 p-1.5">
          <div className="h-1.5 w-8 rounded-lg bg-white"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center md:items-center">
            <span className="font-mono text-sm tracking-tight text-accent">
              Features
            </span>
            <h2 className="mt-4 text-center text-2xl font-light leading-[1.125] text-white md:text-4xl lg:text-5xl">
              Love talking to machines? <br />
              <span className="text-white/50">We have got you covered</span>
            </h2>
            <p className="mx-auto mt-4 text-center leading-relaxed text-white/50 md:max-w-2xl lg:mt-8">
              Get insightful suggestions based on content you provide.{" "}
              <br className="hidden lg:block" />
              Extract and calculate key metrics from your reports instantly.
            </p>
          </div>
          <div className="mt-8 grid gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-8">
            <div className="lg:bg-white/2.5 lg:rounded-3xl lg:border lg:border-white/10 lg:p-2">
              <div className="bg-white/2.5 relative overflow-hidden rounded-2xl border border-white/10 shadow-md shadow-zinc-950/50 before:absolute before:inset-0 before:bg-[radial-gradient(640px_circle_at_476px_-64.0469px,rgba(255,255,255,0.1),transparent)]">
                <div className="p-6 lg:p-8">
                  <div className="text-lg text-white">Dynamic suggestions</div>
                  <p className="mt-4 font-light leading-relaxed text-white/75">
                    Recharger automatically gives you helpful hints and guesses
                    what you might ask next. This makes extracting data from
                    your documents more intuitive and efficient.
                  </p>
                </div>
                <div className="mt-2 pl-6 md:pl-8">
                  <div className="flex w-full flex-col items-start gap-3 rounded-tl-xl border-white/10 bg-white/5 p-3">
                    <div className="rounded-lg bg-white/10 px-3 py-2 text-xs font-light tracking-wide text-white">
                      Extract profit metrics from the financial report
                    </div>
                    <div className="rounded-lg bg-white/10 px-3 py-2 text-xs font-light tracking-wide text-white">
                      Extract the key findings
                    </div>
                    <div className="rounded-lg bg-white/10 px-3 py-2 text-xs font-light tracking-wide text-white">
                      Identify the milestones in the project plan
                    </div>
                    <div className="rounded-lg bg-white/10 px-3 py-2 text-xs font-light tracking-wide text-white">
                      Find the warranty conditions
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:bg-white/2.5 lg:rounded-3xl lg:border lg:border-white/10 lg:p-2">
              <div
                style={
                  {
                    // --x:879px; --y:-427.047px; --spotlight-color-stops:rgba(255,255,255,0.1),transparent; --spotlight-size:640px;
                  }
                }
                className="bg-white/2.5 relative transform-gpu overflow-hidden rounded-2xl border border-white/10 shadow-md shadow-zinc-950/50 before:absolute before:inset-0 before:bg-[radial-gradient(640px_circle_at_476px_-64.0469px,rgba(255,255,255,0.1),transparent)]"
              >
                <div className="px-6 md:px-8">
                  <div className="flex w-full flex-col items-start gap-2 rounded-b-xl border-white/10 bg-white/5 p-3 lg:gap-3">
                    <div className="w-full p-1 lg:p-2">
                      <div className="flex w-full items-center justify-between gap-3 lg:grid lg:grid-cols-5">
                        <div className="text-xs font-light text-white/75 lg:col-span-2">
                          Recurring revenue
                        </div>
                        <div className="col-span-2 hidden items-center lg:flex">
                          <div className="w-full rounded-full bg-white/25">
                            <div
                              style={
                                {
                                  // width:75%;
                                }
                              }
                              className="h-2 rounded-full bg-white/75"
                            ></div>
                          </div>
                        </div>
                        <div className="text-right text-xs font-light text-white lg:col-span-1">
                          $165,250
                        </div>
                      </div>
                    </div>
                    <div className="w-full p-1 lg:p-2">
                      <div className="flex w-full items-center justify-between gap-3 lg:grid lg:grid-cols-5">
                        <div className="text-xs font-light text-white/75 lg:col-span-2">
                          Gross revenue
                        </div>
                        <div className="col-span-2 hidden items-center lg:flex">
                          <div className="w-full rounded-full bg-white/25">
                            <div
                              style={
                                {
                                  // width:90%;
                                }
                              }
                              className="h-2 rounded-full bg-white/75"
                            ></div>
                          </div>
                        </div>
                        <div className="text-right text-xs font-light text-white lg:col-span-1">
                          $208,600
                        </div>
                      </div>
                    </div>
                    <div className="w-full p-1 lg:p-2">
                      <div className="flex w-full items-center justify-between gap-3 lg:grid lg:grid-cols-5">
                        <div className="text-xs font-light text-white/75 lg:col-span-2">
                          Operating expenses
                        </div>
                        <div className="col-span-2 hidden items-center lg:flex">
                          <div className="w-full rounded-full bg-white/25">
                            <div
                              style={
                                {
                                  // width:30%;
                                }
                              }
                              className="h-2 rounded-full bg-white/75"
                            ></div>
                          </div>
                        </div>
                        <div className="text-right text-xs font-light text-white lg:col-span-1">
                          $28,000
                        </div>
                      </div>
                    </div>
                    <div className="w-full p-1 lg:p-2">
                      <div className="flex w-full items-center justify-between gap-3 lg:grid lg:grid-cols-5">
                        <div className="text-xs font-light text-white/75 lg:col-span-2">
                          Net profit
                        </div>
                        <div className="col-span-2 hidden items-center lg:flex">
                          <div className="w-full rounded-full bg-white/25">
                            <div
                              style={
                                {
                                  // width:50%;
                                }
                              }
                              className="h-2 rounded-full bg-white/75"
                            ></div>
                          </div>
                        </div>
                        <div className="text-right text-xs font-light text-white lg:col-span-1">
                          $180,600
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 p-6 md:p-8">
                  <div className="text-lg text-white">Detailed analysis</div>
                  <p className="mt-4 font-light leading-relaxed text-white/75">
                    Recharger dives deep into your documents, identifying and
                    pulling crucial metrics, especially from complex financial
                    and data reports. Simplify your data processing and grasp
                    key insights effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
