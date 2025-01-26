import * as React from "react";

export default function Header() {
  return (
    <header className="flex flex-col self-end w-full font-bold max-w-[1712px] max-md:max-w-full">
      <div className="flex overflow-hidden flex-wrap gap-3.5 justify-center items-center py-3.5 w-full text-xl text-white bg-sky-900 rounded-lg border-2 border-solid border-neutral-800 max-md:max-w-full">
        <div className="self-stretch my-auto max-md:max-w-full">
          Plateforme d'Orientation Professionnelle
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/54f9b151ceaf6282d26833d2f7534820c83b28d77dce4edbae1b33fecdfee944?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896"
          alt="Platform logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
        />
      </div>
      <nav
        className="flex overflow-hidden flex-wrap gap-10 justify-between mt-3.5 w-full bg-white rounded-xl border-2 border-solid border-neutral-800 min-h-[139px] max-md:max-w-full"
        role="navigation"
      >
        <div className="flex gap-0 items-center px-6 my-auto text-4xl text-white whitespace-nowrap bg-sky-900 border-sky-900 border-x-2 min-h-[139px] min-w-[240px] max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ff7b482af3798d357e321e5067b2a25ac097ae2b74fc29e94f4e5e81a955fe1?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896"
            alt="Orienty logo"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[139px]"
          />
          <div className="self-stretch my-auto w-[198px]">ORIENTY</div>
        </div>
        <div className="flex flex-wrap h-full text-xl bg-white min-w-[240px] text-neutral-800 max-md:max-w-full">
          <a
            href="#accueil"
            className="gap-2.5 self-stretch px-9 py-5 text-white whitespace-nowrap bg-sky-900 border-solid border-l-neutral-800 border-r-neutral-800 border-x-2 h-[142px] w-[142px] max-md:px-5"
          >
            Acceuil
          </a>
          <a
            href="#about"
            className="gap-2.5 self-stretch px-9 py-5 h-full border-r-2 border-solid border-r-neutral-800 max-md:px-5"
          >
            A propos
          </a>
          <a
            href="#aide"
            className="gap-2.5 self-stretch px-9 py-5 h-full whitespace-nowrap border-r-2 border-solid border-r-neutral-800 max-md:px-5"
          >
            Aide
          </a>
          <a
            href="#orientation"
            className="gap-2.5 self-stretch px-9 py-5 h-full text-white bg-sky-900 border-r-2 border-solid border-r-neutral-800 min-w-[240px] max-md:px-5"
          >
            Mon Orientation
          </a>
        </div>
      </nav>
    </header>
  );
}
