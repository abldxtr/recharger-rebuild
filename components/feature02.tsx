export default function Feature_02() {
  const user = [
    {
      name: "Sophia Martinez",
      image:
        "https://images.generated.photos/TdA_3xKb49DtgqfPPu5REnQFiALErCu6i3M2I_1AqIA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwNTU5LmpwZw.jpg",
      position: "Lead writer, Avalon",
      feedback:
        "Absolutely a game changer! Recharger completely revolutionized how I extract data from my documents. It's like having an intelligent conversation with my PDFs!",
    },
    {
      name: "Caroline Lee",
      image:
        "https://images.generated.photos/mp3gkB9z2wwhyySWzQJMegNbvvLV6HbKQX1_h6BEYAc/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAwOTI5LmpwZw.jpg",
      position: "Project manager, Echo",
      feedback:
        "Recharger is a lifesaver. It's impressive how it understands my questions and presents information from a dense hundred-page report.",
    },
    {
      name: "Tyler Thompson",
      image:
        "https://images.generated.photos/vOkveSlBohR880A8z67aLHImhPr7UHdnXg06pifYvZ4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyNjg4LmpwZw.jpg",
      position: "Legal Advisor, DEF Law",
      feedback:
        "I use Recharger daily. Uploading my contracts, asking directly what I need to know, and getting an instant response - it doesn't get more convenient!",
    },
    {
      name: "Jake Harris",
      image:
        "https://images.generated.photos/d_r3VzW3lO5ZsdaHhoVX7msWku7YIrqP4Qn1yozJU54/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDAyMTQ4LmpwZw.jpg",
      position: "Researcher, GHI University",
      feedback:
        "Recharger's simplicity in understanding complex data is stunning. It has saved me hours of work and made my data analysis tremendously efficient.",
    },
  ];

  return (
    <div className="py-8 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex flex-col bg-[radial-gradient(35%_128px_at_50%_100%,hsla(0,0%,100%,.05),transparent)] pb-8 md:items-center lg:pb-16">
            <span className="font-mono text-sm tracking-tight text-accent">
              What others say
            </span>
            <h2 className="font-display mt-4 text-center text-2xl font-light leading-[1.125] text-white md:text-center md:text-4xl lg:text-5xl">
              Trusted by the experts, <br />
              <span className="text-white/50">used by the leaders</span>
            </h2>
            <p className="mx-auto mt-4 text-left leading-relaxed text-white/50 md:max-w-2xl md:text-center lg:mt-8">
              Don't just take our word for it. Read what others say about
              Recharger.
            </p>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

        <div className="mt-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] lg:mt-32">
          <div className="flex w-max animate-marquee items-stretch [--duration:50s] hover:[animation-play-state:paused]">
            {user.map((item, index) => {
              return (
                <div className="px-2.5" key={index}>
                  <div
                    style={
                      {
                        // --x:2392.04px; --y:-155.063px; --spotlight-color-stops:rgba(255,255,255,0.2),transparent; --spotlight-size:350px;
                      }
                    }
                    className="relative h-full w-[28rem] transform-gpu overflow-hidden rounded-[--radius] p-8 [--radius:theme(borderRadius.2xl)] before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))] lg:[--radius:theme(borderRadius.3xl)]"
                  >
                    <div className="from-white/15 absolute inset-x-0 bottom-[--radius] top-0 rounded-t-[--radius] bg-gradient-to-b to-transparent"></div>
                    <div className="absolute inset-x-[--radius] top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
                    <div className="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-zinc-950"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/3%),transparent)]"></div>
                    <div className="relative flex h-full flex-col">
                      <div className="pb-8 font-light text-white/75">
                        {item.feedback}
                      </div>
                      <div className="mt-auto flex items-center gap-4">
                        <img
                          alt={item.name}
                          src={item.image}
                          className="h-10 w-10 rounded-full"
                        />
                        <div className="flex flex-col">
                          <div className="text-white">{item.name}</div>
                          <div className="text-sm text-white/50">
                            {item.position}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
