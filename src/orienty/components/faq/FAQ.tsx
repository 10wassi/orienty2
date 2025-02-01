import * as React from "react";
import { FAQCard } from "./FAQCard";
import { FAQSection } from "./FAQSection";

const faqData = [
  {
    title: "Comment créer un compte sur Orienty?",
    description:
      "Pour créer un compte sur Orienty, cliquez sur \"S'inscrire\" et remplissez le formulaire avec votre nom d'utilisateur, adresse e-mail et mot de passe. Vous recevrez un e-mail de confirmation pour activer votre compte. Assurez-vous de vérifier votre dossier de spam au cas où l'e-mail de confirmation s'y trouverait.",
    isExpanded: true,
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/f88a8644386488c928ca9d7ca6ff3d86e932720a7ae17b1aadbaae2aa9dae240?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
  },
  {
    title: "Que faire si je ne reçois pas l'e-mail de confirmation?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bad6555168ddbaa6844af0bf3a6edfff0eb1654e52dca8750a10411e5e1bc80a?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
  },
  {
    title: "Que faire si je ne reçois pas de mail?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bad6555168ddbaa6844af0bf3a6edfff0eb1654e52dca8750a10411e5e1bc80a?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
  },
  {
    title: "Comment me connecter à mon compte My Orienty",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bad6555168ddbaa6844af0bf3a6edfff0eb1654e52dca8750a10411e5e1bc80a?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
  },
  {
    title: "Que faire si j'oublie mon mots de passe",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bad6555168ddbaa6844af0bf3a6edfff0eb1654e52dca8750a10411e5e1bc80a?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
  },
  {
    title: "Comment modifier mes informations personnelles?",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bad6555168ddbaa6844af0bf3a6edfff0eb1654e52dca8750a10411e5e1bc80a?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
  },
  {
    title: "Comment consulter mes recommandations",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bad6555168ddbaa6844af0bf3a6edfff0eb1654e52dca8750a10411e5e1bc80a?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
  },
  {
    title: "Que faire si je souhaite me lancer dans une reconversion!",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/bad6555168ddbaa6844af0bf3a6edfff0eb1654e52dca8750a10411e5e1bc80a?placeholderIfAbsent=true&apiKey=fe6731e83b1d483d8bc810df093d0522",
  },
];

export function FAQ() {
  return (
    <div className="flex flex-col mt-20 w-full max-w-[1592px] max-md:mt-10 max-md:max-w-full">
      <FAQSection
        title="FAQ Orienty"
        subtitle="Foires Aux Questions"
        description="Retrouvez toutes les informations essentielles dans notre section FAQ, conçue pour répondre aux questions les plus fréquemment posées et vous guider dans vos choix éducatifs de manière éclairée."
      />
      <div className="flex flex-wrap gap-10 items-start mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          {faqData.slice(0, 4).map((faq, index) => (
            <div key={index} className={index > 0 ? "mt-8" : ""}>
              <FAQCard {...faq} />
            </div>
          ))}
        </div>
        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
          {faqData.slice(4).map((faq, index) => (
            <div key={index} className={index > 0 ? "mt-8" : ""}>
              <FAQCard {...faq} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default FAQ;