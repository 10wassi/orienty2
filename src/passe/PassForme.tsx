import * as React from "react";
import { Step } from "./Step";
import { SocialButton } from "./SocialButton";
import { RawImg } from "./RawImg";
import { PasswordInput } from "./PasswordInput";

export const PassForme: React.FC = () => {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("Passwords match");
    }
  };

  const steps = [
    { number: 1, description: "Entrez votre addresse mail" },
    { number: 2, description: "Renseignez vos informations basiques" },
    { number: 3, description: "Créer votre mots de passe!" },
  ];

  const socialButtons = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      altText: "Facebook",
      text: "S'inscrire avec Facebook",
    },
    {
      icon: "https://placehold.co/42x42/4285F4/4285F4",
      altText: "Google",
      text: "S'inscrire avec Google",
    },
  ];

  return (
    <div className="flex flex-col items-center px-20 pt-11 pb-28 min-h-screen bg-blue-50 max-md:px-5 max-md:py-11 mt-8">
      <div className="mb-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/89f35739a1bf6e91320f263b6e7e74260ed73aee0065cbb8a329520061d1394b?apiKey=fe6731e83b1d483d8bc810df093d0522&"
          alt="Orienty logo"
          className="h-auto w-[165px]"
        />
      </div>

      <h1 className="mb-2.5 text-2xl font-bold tracking-tight leading-10 text-center max-sm:text-xl">
        Créer un compte !
      </h1>

      <p className="mb-10 text-2xl tracking-tight leading-10 text-center max-sm:text-xl">
        Avez-vous déjà un compte?
        <a href="/login" className="text-sky-900 hover:underline ml-2">
          Connectez-vous!
        </a>
      </p>

      <nav
        className="flex justify-between items-center mb-10 w-full max-w-[814px] max-md:flex-col max-md:gap-5"
        role="list"
      >
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <Step {...step} />
            {index < steps.length - 1 && (
              <div
                className="grow mx-5 my-0 h-0.5 bg-black max-md:w-0.5 max-md:h-5"
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        ))}
      </nav>

      <form onSubmit={handleSubmit} className="w-full max-w-[814px]">
        <div className="flex gap-5 mb-8 max-md:flex-col">
          <PasswordInput
            id="password"
            label="Créer un mots de passe"
            placeholder="Entrez un mots de passe"
          />
          <PasswordInput
            id="confirmPassword"
            label="Confirmer le mots de passe"
            placeholder="Confirmez votre mots de passe"
          />
        </div>

        <button
           className="flex items-center justify-center px-4 py-0 mt-10 text-xl font-extrabold text-white rounded-full border-2 border-sky-900 shadow-sm !bg-sky-900 w-[500px] max-md:px-5 max-md:mt-10 mx-auto"
          aria-label="Continuer"
        >
          Continuer !
        </button>

        <div className="flex items-center mx-0 my-5 w-full max-w-[809px]">
        <div className="grow h-px bg-black" />
        <span className="px-5 py-0 text-lg">OU</span>
        <div className="grow h-px bg-black" />
      </div>


        <div className="flex gap-24 max-md:flex-col max-md:gap-5">
          {socialButtons.map((button) => (
            <SocialButton key={button.altText} {...button} />
          ))}
        </div> 
      </form>
    </div>
  );
};
export default PassForme;