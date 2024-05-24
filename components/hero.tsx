export default function Hero() {
  return (
    <div className="relative pt-32">
      <div className=" bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='rgb(255 255 255 / 0.1)' viewBox='0 0 64 64'%3E%3Cpath d='M64 0H0v64'/%3E%3C/svg%3E');] pointer-events-none absolute inset-0 bg-center [mask-image:radial-gradient(white,transparent_85%)]"></div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-3xl font-light leading-tight lg:text-5xl">
            Yet another ChatGPT <br />
            wrapper{" "}
            <span className="bg-gradient-to-br from-white/90 to-white/30 bg-clip-text text-transparent">
              built different
            </span>
          </h1>
          <h2 className="mt-8 max-w-xl text-center text-lg text-white/60 lg:text-xl">
            Recharger is not like all those chat-with-pdf apps. It certainly has
            a slightly different UI, so it worths your money.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
            <a
              href="/"
              className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-zinc-950 transition duration-300 hover:bg-zinc-300"
            >
              {" "}
              Get started for free{" "}
            </a>
            <span className="text-sm">No credit card required</span>
          </div>

          <div className="relative mx-auto mt-8 w-full max-w-5xl lg:mt-16">
            <div className="absolute -top-8 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/25 blur-3xl lg:-top-8 lg:h-[32rem] lg:w-[32rem] lg:blur-[128px]"></div>
            <div className="relative w-full rounded-2xl bg-gradient-to-b from-white/5 to-white/10 p-2 shadow-2xl shadow-white/10 ring-1 ring-white/10 backdrop-blur-sm lg:rounded-3xl">
              <img
                src="https://recharger.lunarui.dev/_nuxt/app.99139841.png"
                alt="img"
                className="h-auto w-full rounded-xl border border-white/10 shadow-md shadow-zinc-950/50 lg:rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
