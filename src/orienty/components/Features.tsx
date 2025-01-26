import * as React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/97fc010540f6188ee5cb935dbcd06c3ac53a7ce070ac0a722b67bcc3faec933a?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896",
    title: "Recommandations Personnalisées",
    description:
      "Nos algorithmes analysent votre parcours académique et vos passions pour proposer des carrières qui vous correspondent.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a3e1ec4cef5ceb8165588ba70f37e18e936ad0542b37e26675b3cf985189401?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896",
    title: "Exploration de Métiers",
    description:
      "Découvrez un éventail de métiers adaptés à vos compétences et aspirations grâce à notre plateforme intuitive.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3872c2ca59b299775f89c52226d997b91f44cbc6e55944c6919eb557254c48c4?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896",
    title: "Opportunités Éducatives",
    description:
      "Accédez à des informations sur les programmes éducatifs disponibles au Bénin, en Afrique, en ligne et partout dans le monde.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/62528c84765a36f346bbf126ccd71283126fe198b0e680a77ce444cbaa137dda?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896",
    title: "Conseils d'Experts",
    description:
      "Profitez des recommandations et de l'accompagnement de professionnels pour planifier votre avenir avec confiance.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/426643b16db748ebdca73e5a36ce55b408c1447ec92aecfb0b588256f2a639a9?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896",
    title: "Analyse des Intérêts",
    description:
      "Identifiez vos intérêts principaux à travers des questionnaires interactifs pour trouver des carrières alignées avec vos passions.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/44154ff33f36f556d313af50ed1ff808ceb5117e40a4b4572ff1f70d0b2858eb?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896",
    title: "Accès aux Ressources",
    description:
      "Consultez des outils et ressources pour réussir dans vos études et votre carrière, comme des guides et des ateliers.",
  },
];

export default function Features() {
  return (
    <section
      className="flex flex-col mt-24 w-full max-md:mt-10 max-md:max-w-full"
      aria-labelledby="features-title"
    >
      <h2 id="features-title" className="sr-only">
        Nos fonctionnalités
      </h2>
      <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
        {features.slice(0, 3).map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
      <div className="flex flex-wrap gap-10 items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
        {features.slice(3).map((feature, index) => (
          <FeatureCard key={index + 3} {...feature} />
        ))}
      </div>
    </section>
  );
}
