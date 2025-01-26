import React from "react";

export default function Footer() {
  return (
    <footer
      className="flex overflow-hidden flex-col self-stretch px-28 pt-24 pb-10 mt-56 w-full bg-white rounded-xl border-2 border-solid shadow-sm border-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full"
      role="contentinfo"
    >
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <div className="flex flex-col min-w-[240px] w-[519px] max-md:max-w-full">
          <div className="flex flex-col w-full text-xl max-md:max-w-full">
            <div className="flex gap-5 max-w-full font-bold text-black whitespace-nowrap w-[228px]">
              <img
                loading="lazy"
                src="/logo.svg"
                alt="Orienty Logo"
                className="object-contain shrink-0 aspect-[1.32] w-[66px]"
              />
              <div className="grow shrink my-auto w-[146px]">ORIENTY</div>
            </div>
            <p className="mt-5 font-medium leading-8 text-neutral-600 max-md:max-w-full">
              Premier système intelligent de recommandations des choix des
              filières!
            </p>
          </div>
          <address className="flex flex-col mt-12 w-full not-italic max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-2.5 items-center w-full rounded-md max-md:max-w-full">
              <div className="flex gap-2.5 items-center self-stretch p-2 my-auto w-10 h-10 bg-orange-50 rounded-md border-2 border-solid border-neutral-800">
                <img
                  loading="lazy"
                  src="/email-icon.svg"
                  alt=""
                  className="object-contain w-6 aspect-square"
                  aria-hidden="true"
                />
              </div>
              <a
                href="mailto:contacts@orienty.bj"
                className="flex-1 shrink self-stretch my-auto text-xl font-medium basis-4 text-neutral-800 max-md:max-w-full hover:underline focus:outline-2 focus:outline-offset-2"
              >
                contacts@orienty.bj
              </a>
            </div>
            <div className="flex flex-wrap gap-2.5 items-center mt-6 w-full rounded-md max-md:max-w-full">
              <div className="flex gap-2.5 items-center self-stretch p-2 my-auto w-10 h-10 bg-orange-50 rounded-md border-2 border-solid border-neutral-800">
                <img
                  loading="lazy"
                  src="/phone-icon.svg"
                  alt=""
                  className="object-contain w-6 aspect-square"
                  aria-hidden="true"
                />
              </div>
              <a
                href="tel:+22901620274"
                className="flex-1 shrink self-stretch my-auto text-xl font-medium basis-4 text-neutral-800 max-md:max-w-full hover:underline focus:outline-2 focus:outline-offset-2"
              >
                +229 01 62 02 74 28
              </a>
            </div>
            <div className="flex flex-wrap gap-2.5 items-center mt-6 w-full rounded-md max-md:max-w-full">
              <div className="flex gap-2.5 items-center self-stretch p-2 my-auto w-10 h-10 bg-orange-50 rounded-md border-2 border-solid border-neutral-800">
                <img
                  loading="lazy"
                  src="/location-icon.svg"
                  alt=""
                  className="object-contain w-6 aspect-square"
                  aria-hidden="true"
                />
              </div>
              <p className="flex-1 shrink self-stretch my-auto text-xl font-medium basis-4 text-neutral-800 max-md:max-w-full">
                Abomey-Calavi, Petit Portail Zogbadjè
              </p>
            </div>
          </address>
        </div>
        <nav
          className="flex flex-wrap flex-1 shrink gap-8 items-start text-xl basis-0 min-w-[240px] max-md:max-w-full"
          aria-label="Footer Navigation"
        >
          <div className="flex flex-col flex-1 shrink basis-0">
            <h2 className="font-semibold text-neutral-800">Home</h2>
            <ul className="flex flex-col mt-6 w-full font-medium text-zinc-800">
              <li>
                <a
                  href="#features"
                  className="block hover:underline focus:outline-2 focus:outline-offset-2"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="block mt-3.5 hover:underline focus:outline-2 focus:outline-offset-2"
                >
                  Our Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="block mt-3.5 hover:underline focus:outline-2 focus:outline-offset-2"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-1 shrink basis-0">
            <h2 className="font-semibold text-neutral-800">About Us</h2>
            <ul className="flex flex-col mt-6 w-full font-medium text-zinc-800">
              <li>
                <a
                  href="/mission"
                  className="block hover:underline focus:outline-2 focus:outline-offset-2"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href="/vision"
                  className="block mt-3.5 hover:underline focus:outline-2 focus:outline-offset-2"
                >
                  Our Vision
                </a>
              </li>
              <li>
                <a
                  href="/awards"
                  className="block mt-3.5 hover:underline focus:outline-2 focus:outline-offset-2"
                >
                  Awards and Recognitions
                </a>
              </li>
              <li>
                <a
                  href="/history"
                  className="block mt-3.5 hover:underline focus:outline-2 focus:outline-offset-2"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  href="/teachers"
                  className="block mt-3.5 hover:underline focus:outline-2 focus:outline-offset-2"
                >
                  Teachers
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-1 shrink basis-0">
            <h2 className="font-semibold text-neutral-800">Academics</h2>
            <ul className="flex flex-col mt-6 w-full font-medium text-zinc-800">
              <li>
                <a
                  href="/features"
                  className="block hover:underline focus:outline-2 focus:outline-offset-2"
                >
                  Special Features
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="block mt-3.5 hover:underline focus:outline-2 focus:outline-offset-2"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col flex-1 shrink basis-0">
            <h2 className="font-semibold text-neutral-800">Contact Us</h2>
            <ul className="flex flex-col mt-6 w-full font-medium text-zinc-800">
              <li>
                <a
                  href="/info"
                  className="block hover:underline focus:outline-2 focus:outline-offset-2"
                >
                  Information
                </a>
              </li>
              <li>
                <a
                  href="/map"
                  className="block mt-3.5 hover:underline focus:outline-2 focus:outline-offset-2"
                >
                  Map & Direction
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <hr className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-wrap gap-10 justify-between items-center mt-8 w-full max-md:max-w-full">
          <nav
            className="flex gap-4 items-start self-stretch my-auto text-lg font-medium min-w-[240px] text-zinc-800 w-[820px] max-md:max-w-full"
            aria-label="Legal Navigation"
          >
            <a
              href="/terms"
              className="hover:underline focus:outline-2 focus:outline-offset-2"
            >
              Conditions d'utilisation
            </a>
            <div
              className="shrink-0 self-stretch w-0 border-2 border-solid bg-neutral-800 border-neutral-800 h-[27px]"
              aria-hidden="true"
            />
            <a
              href="/privacy"
              className="w-[294px] hover:underline focus:outline-2 focus:outline-offset-2"
            >
              Politique de confidentialité
            </a>
            <div
              className="shrink-0 self-stretch w-0 border-2 border-solid bg-neutral-800 border-neutral-800 h-[27px]"
              aria-hidden="true"
            />
            <a
              href="/cookies"
              className="hover:underline focus:outline-2 focus:outline-offset-2"
            >
              Politique en matière de cookies
            </a>
          </nav>
          <div
            className="flex gap-3.5 items-start self-stretch my-auto"
            aria-label="Social Media Links"
          >
            <a
              href="https://facebook.com/orienty"
              className="flex gap-2.5 items-center p-4 w-14 h-14 rounded-lg border-2 border-solid bg-slate-500 border-neutral-800 hover:bg-slate-600 focus:outline-2 focus:outline-offset-2"
              aria-label="Facebook"
            >
              <img
                loading="lazy"
                src="/facebook-icon.svg"
                alt=""
                className="object-contain w-6 aspect-square"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://twitter.com/orienty"
              className="flex gap-2.5 items-center p-4 w-14 h-14 rounded-lg border-2 border-solid bg-slate-500 border-neutral-800 hover:bg-slate-600 focus:outline-2 focus:outline-offset-2"
              aria-label="Twitter"
            >
              <img
                loading="lazy"
                src="/twitter-icon.svg"
                alt=""
                className="object-contain w-6 aspect-square"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://instagram.com/orienty"
              className="flex gap-2.5 items-center p-4 w-14 h-14 rounded-lg border-2 border-solid bg-slate-500 border-neutral-800 hover:bg-slate-600 focus:outline-2 focus:outline-offset-2"
              aria-label="Instagram"
            >
              <img
                loading="lazy"
                src="/instagram-icon.svg"
                alt=""
                className="object-contain w-6 aspect-square"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
        <hr className="mt-8 w-full border border-solid bg-neutral-800 border-neutral-800 min-h-[1px] max-md:max-w-full" />
        <p className="mt-8 text-lg font-medium text-center text-stone-500 max-md:max-w-full">
          Copyright © {new Date().getFullYear()} Orienty by Unity of Digitia
          Innovation. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
