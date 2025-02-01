import * as React from "react";
import { RawImg } from "./RawImg";
import { StepIndicator } from "./StepIndicator";
import { SocialButton } from "./SocialButton";
import { useNavigate } from "react-router-dom"; // Ajoute cette ligne
import "./styles.css";

const steps = [
  { number: 1, description: "Entrez votre addresse mail" },
  { number: 2, description: "Renseignez vos informations basiques" },
  { number: 3, description: "Créer votre mots de passe!" },
];

const socialButtons = [
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    altText: "Facebook",
    label: "S'inscrire avec Facebook",
  },
  {
    icon: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",
    altText: "Google",
    label: "S'inscrire avec Google",
  },
];

  const SignupForm = () => {
    const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/registration"); // Ajoute cette ligne pour rediriger
  };

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

      <div className="steps-container">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <StepIndicator {...step} />
            {index < steps.length - 1 && <div className="step-divider" />}
          </React.Fragment>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="email" className="form-label">
          Votre adresse mail!
        </label>
        <input
          id="email"
          type="email"
          placeholder="Entrez votre adresse email"
          className="email-input border border-black p-2 w-full"
          required
        />
        <button
           onClick={() => navigate("/registration")}
          className="flex items-center justify-center px-4 py-0 mt-10 text-xl font-extrabold text-white rounded-full border-2 border-sky-900 shadow-sm !bg-sky-900 w-[500px] max-md:px-5 max-md:mt-10 mx-auto"
          aria-label="Continuer"
        >
          Continuer !
        </button>

        <div className="divider">
          <div className="divider-line" />
          <div className="divider-text">OU</div>
          <div className="divider-line" />
        </div>

        <div className="social-buttons-container">
          {socialButtons.map((button, index) => (
            <SocialButton key={index} {...button} />
          ))}
        </div>
      </form>
    </div>
  );
};

export default SignupForm;