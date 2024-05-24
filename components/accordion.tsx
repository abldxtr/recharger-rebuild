import Accord_child from "@/components/accordion_child";

export default function Accord_Parent() {
  const faq: { q: string; a: string }[] = [
    {
      q: "What is Recharger?",
      a: "Recharger is an innovative app that allows you to chat directly with your PDF documents to extract the information you need. It simplifies document understanding and helps you save valuable time.",
    },
    {
      q: "How does Recharger work?",
      a: "Recharger uses advanced AI tech to understand the content of your PDFs. Just upload your document, ask the app questions as if you were chatting with a person, and get accurate and instant answers.",
    },
    {
      q: "What types of documents can I use with Recharger?",
      a: "Recharger works with any PDF document, making it a versatile tool — whether you're reading complex contracts, lengthy reports, or detailed user manuals.",
    },
    {
      q: "Is there a limit to the number of documents I can upload?",
      a: "The number of documents you can upload depends on the type of account you have. For specific details, please refer to our Pricing section.",
    },
  ];
  return (
    <div className="bg-white/2.5 relative py-16 md:rounded-3xl lg:rounded-[3rem] xl:px-24 xl:py-32">
      <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950 p-1.5">
        <div className="h-1.5 w-8 rounded-lg bg-white"></div>
      </div>
      <div className="absolute inset-x-12 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-950 p-1.5">
        <div className="h-1.5 w-8 rounded-lg bg-white"></div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-950 p-1.5">
        <div className="h-1.5 w-8 rounded-lg bg-white"></div>
      </div>
      <div className="  py-8 lg:py-16 ">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* //first */}

          <div className="flex flex-col md:items-center">
            <p className="font-mono text-sm tracking-tight text-accent">
              Questions?
            </p>

            <h2 className="mt-4 text-left font-display text-2xl font-light leading-[1.125] text-white md:text-center md:text-4xl lg:text-5xl">
              Not so frequently
              <span>
                asked <br />
                questions
              </span>
            </h2>

            <p className="mx-auto mt-4 text-left leading-relaxed text-white/50 md:max-w-2xl md:text-center lg:mt-8">
              Usually, these are made up as we have no users yet to ask any.{" "}
              <br className="hidden lg:block" />
              Anyway, you might learn something important here.
            </p>
          </div>
          {/* second */}
          <div className="mt-8 lg:mt-16">
            {faq.map((item, index) => {
              return <Accord_child key={index} q={item.q} a={item.a} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
