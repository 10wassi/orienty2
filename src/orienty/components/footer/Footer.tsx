import * as React from "react";
import { SocialIcon } from "./SocialIcon";
import { ContactItem } from "./ContactItem";
import { FooterLinkSection } from "./FooterLinkSection";

const contactItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ec71fa4cb5f57d4ddbe943f8d7d0dd81c0761e61417c62096ca9fb4f4feb942?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
    text: "contacts@orienty.bj",
    alt: "Email icon",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cfaa9ab3c2b3288451102484bdd7b2dd07a9d5352ea26ca1d4b640d480098af4?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
    text: "+229 01 62 02 74 28",
    alt: "Phone icon",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5743b08d4d6c084b0f60ecab03f1a1da8f85e6df38a418cdf1486827b7dcab6?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
    text: "Abomey-Calavi, Petit Portail Zogbadjè",
    alt: "Location icon",
  },
];

const footerSections = [
  {
    title: "Home",
    links: ["Features", "Our Testimonials", "FAQ"],
  },
  {
    title: "About Us",
    links: [
      "Our Mission",
      "Our Vission",
      "Awards and Recognitions",
      "History",
      "Teachers",
    ],
  },
  {
    title: "Academics",
    links: ["Special Features", "Gallery"],
  },
  {
    title: "Contact Us",
    links: ["Information", "Map & Direction"],
  },
];

const socialIcons = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1290950c42fdad1074fdea07c5ee349f14b5c78ee4be4f06ceafc1f0f28ebe1e?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
    alt: "Social media icon 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a99b8566a66625aed0de9866bd6e121279641784310b3272d7512ba25a381545?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
    alt: "Social media icon 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c1ffbb08f5b969128e830b27f623d5164692c6590932242725e5d53bd03508a?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
    alt: "Social media icon 3",
  },
];

export const Footer: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col self-stretch px-28 pt-24 pb-10 mt-56 w-full bg-white rounded-xl border-2 border-solid shadow-sm border-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        <div className="flex flex-col min-w-[240px] w-[519px] max-md:max-w-full">
          <div className="flex flex-col w-full text-xl max-md:max-w-full">
            <div className="flex gap-5 max-w-full font-bold text-black whitespace-nowrap w-[228px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e2913817db4f844f618c0b562e0a5d11f7635dc62cd5964e4d5e1695d110515?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522"
                alt="Orienty logo"
                className="object-contain shrink-0 aspect-[1.32] w-[66px]"
              />
              <div className="grow shrink my-auto w-[146px]">ORIENTY</div>
            </div>
            <div className="mt-5 font-medium leading-8 text-neutral-600 max-md:max-w-full">
              Premier système intelligent de recommandations des choix des
              filières!
            </div>
          </div>
          <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
            {contactItems.map((item, index) => (
              <div key={index} className={index > 0 ? "mt-6" : ""}>
                <ContactItem {...item} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap flex-1 shrink gap-8 items-start text-xl basis-0 min-w-[240px] max-md:max-w-full">
          {footerSections.map((section, index) => (
            <FooterLinkSection key={index} {...section} />
          ))}
        </div>
      </div>
      <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="w-full border border-solid bg-neutral-800 border-neutral-800 min-h-[1px] max-md:max-w-full" />
        <div className="flex flex-wrap gap-10 justify-between items-center mt-8 w-full max-md:max-w-full">
          <div className="flex gap-4 items-start self-stretch my-auto text-lg font-medium min-w-[240px] text-zinc-800 w-[820px] max-md:max-w-full">
            <div>Conditions d'utilisation</div>
            <div className="shrink-0 self-stretch w-0 border-2 border-solid bg-neutral-800 border-neutral-800 h-[27px]" />
            <div className="w-[294px]">Politique de confidentialité</div>
            <div className="shrink-0 self-stretch w-0 border-2 border-solid bg-neutral-800 border-neutral-800 h-[27px]" />
            <div>Politique en matière de cookies</div>
          </div>
          <div className="flex gap-3.5 items-start self-stretch my-auto">
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
        </div>
        <div className="mt-8 w-full border border-solid bg-neutral-800 border-neutral-800 min-h-[1px] max-md:max-w-full" />
        <div className="mt-8 text-lg font-medium text-center text-stone-500 max-md:max-w-full">
          Copyright © {new Date().getFullYear()} Orienty by Unity of Digitia
          Innovation. Tous droits réservés.
        </div>
      </div>
    </div>
  );
};
export default Footer;