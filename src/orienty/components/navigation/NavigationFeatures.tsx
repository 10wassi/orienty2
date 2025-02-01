import * as React from "react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    title: "Guide des métiers",
    description:
      "Découvrez notre outil complet qui explore les carrières adaptées à vos compétences et passions. Trouvez votre voie parmi un large éventail d'options.",
    buttonText: "En savoir plus",
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/39d9d2ecd0c64114f8f9a9bb407915e2a0d6d9a230e65d0da2baf6b45b3d8bb7?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
  },
  {
    title: "My Orienty",
    description:
      "Accédez à un tableau de bord personnalisé pour suivre vos progrès et recevoir des recommandations sur mesure pour votre avenir académique et professionnel.",
    buttonText: "En savoir plus",
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/54f9b151ceaf6282d26833d2f7534820c83b28d77dce4edbae1b33fecdfee944?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
  },
  {
    title: "Orienty Chat",
    description:
      "Discutez avec notre assistant virtuel pour obtenir des réponses instantanées à vos questions. Profitez d'un accompagnement interactif et rapide.",
    buttonText: "En savoir plus",
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/54f9b151ceaf6282d26833d2f7534820c83b28d77dce4edbae1b33fecdfee944?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
  },
  {
    title: "Orienty Community",
    description:
      "Rejoignez une communauté d'apprenants, d'experts, et de mentors pour échanger, collaborer, et progresser ensemble vers vos objectifs.",
    buttonText: "En savoir plus",
    iconUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/54f9b151ceaf6282d26833d2f7534820c83b28d77dce4edbae1b33fecdfee944?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
  },
];

export const NavigationFeatures: React.FC = () => {
  return (
    <div className="flex flex-col mt-20 w-full max-w-[1596px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center px-32 w-full font-medium text-center text-zinc-800 max-md:px-5 max-md:max-w-full">
        <div className="overflow-hidden gap-2.5 px-5 py-2.5 text-lg bg-white rounded-lg border-2 border-black border-solid">
          Explorer davantages!
        </div>
        <h1 className="mt-5 text-3xl font-bold leading-tight text-zinc-900 max-md:max-w-full max-md:text-4xl">
          Naviguez à travers nos Fonctionnalités
        </h1>
        <p className="self-stretch mt-5 text-lg leading-8 max-md:max-w-full">
          Découvrez un univers d'outils et de services conçus pour vous guider
          dans votre orientation académique et professionnelle. Explorez chaque
          fonctionnalité pour maximiser votre potentiel et atteindre vos
          objectifs.
        </p>
      </div>
      <div className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
          {features.slice(0, 2).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
          {features.slice(2, 4).map((feature, index) => (
            <FeatureCard key={index + 2} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default NavigationFeatures;