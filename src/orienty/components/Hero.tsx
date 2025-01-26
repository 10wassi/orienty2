import * as React from "react";

export default function Hero() {
  return (
    <section
      className="flex flex-wrap gap-10 items-center self-end w-full max-w-[1724px] max-md:max-w-full"
      role="banner"
    >
      <div className="flex relative gap-2.5 items-start self-stretch my-auto bg-sky-900 min-h-[785px] min-w-[240px] w-[765px] max-md:max-w-full">
        <div className="flex absolute bottom-0 -left-2.5 z-0 flex-col items-center min-h-[792px] right-[755px] top-[-7px] w-[19px] max-md:hidden">
          <div className="flex w-5 h-5 bg-white rounded-full border-2 border-solid border-neutral-800 fill-white min-h-[20px] stroke-[2px] stroke-neutral-800" />
        </div>
        <div className="flex absolute right-px z-0 items-center bottom-[-7px] left-[-5px] min-h-[20px] min-w-[240px] top-[772px] w-[769px] max-md:max-w-full">
          <div className="flex self-stretch my-auto w-5 h-5 bg-white rounded-full border-2 border-solid border-neutral-800 fill-white min-h-[20px] stroke-[2px] stroke-neutral-800" />
        </div>
        <div className="flex absolute top-1 z-0 flex-col items-center bottom-[-3px] left-[750px] min-h-[784px] right-[-5px] w-[19px] max-md:hidden">
          <div className="flex flex-1 gap-2.5 justify-center px-1.5 h-full bg-white max-md:hidden">
            <div className="w-0 border-2 border-black border-solid min-h-[764px]" />
          </div>
          <div className="flex w-5 h-5 bg-white rounded-full border-2 border-solid border-neutral-800 fill-white min-h-[20px] stroke-[2px] stroke-neutral-800" />
        </div>
        <div className="flex absolute -top-2 left-3 z-0 items-center bottom-[773px] min-h-[20px] min-w-[240px] right-[-5px] w-[758px] max-md:max-w-full">
          <div className="flex self-stretch my-auto w-5 h-5 bg-white rounded-full border-2 border-solid border-neutral-800 fill-white min-h-[20px] stroke-[2px] stroke-neutral-800" />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6723f37bbc487dadbeb65e317129c00c1273b2bde7e06b485cb27f767f1a0f78?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896"
          alt="Hero illustration"
          className="object-contain absolute top-2/4 left-2/4 z-0 -translate-x-2/4 -translate-y-2/4 aspect-[0.92] h-[607px] min-w-[240px] w-[559px] max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[765px] max-md:max-w-full">
        <div className="flex flex-col w-full font-medium max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <h2 className="gap-2.5 self-start pb-1.5 text-2xl border-b-2 border-solid border-b-neutral-800 text-neutral-800">
              Bienvenue chez :
            </h2>
            <h1 className="text-6xl leading-[70px] text-zinc-900 max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
              <span className="font-extrabold">ORIENTY- </span>
              <span className="font-extrabold text-sky-900">
                Votre Avenir, Votre Choix.
              </span>
            </h1>
          </div>
          <p className="mt-8 text-xl leading-8 text-zinc-800 max-md:max-w-full">
            Libérez votre potentiel avec un guide de carrière qui vous
            accompagne, au diapason de vos rêves.
          </p>
        </div>
        <button
          className="flex overflow-hidden gap-3.5 items-start px-12 py-6 mt-16 max-w-full text-4xl font-extrabold text-white rounded-xl border-2 border-sky-900 border-solid shadow-sm bg-sky-900 bg-opacity-90 w-[870px] max-md:px-5 max-md:mt-10"
          aria-label="Démarrer votre orientation"
        >
          <span className="flex-1 shrink w-full min-w-[240px] max-md:max-w-full">
            Démarrez votre orientation maintenant
          </span>
        </button>
      </div>
    </section>
  );
}
