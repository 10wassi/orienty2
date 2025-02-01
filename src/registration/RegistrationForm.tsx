import * as React from "react";
import { RegistrationStep } from "./RegistrationStep";
import { InputField } from "./InputField";
import { SocialButton } from "./SocialButton";
import { REGISTRATION_STEPS, SOCIAL_BUTTONS } from "./constants";
import { RegistrationFormData } from "./types";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState<RegistrationFormData>({
    lastName: "",
    firstName: "",
    username: "",
  });

  const [errors, setErrors] = React.useState<Partial<RegistrationFormData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof RegistrationFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<RegistrationFormData> = {};

    if (!formData.lastName) newErrors.lastName = "Le nom est requis";
    if (!formData.firstName) newErrors.firstName = "Le prénom est requis";
    if (!formData.username)
      newErrors.username = "Le nom d'utilisateur est requis";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
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

      <div className="flex justify-between items-center mb-10 w-full max-w-[814px] max-sm:flex-col max-sm:gap-5">
        {REGISTRATION_STEPS.map((step, index) => (
          <React.Fragment key={step.number}>
            <RegistrationStep {...step} isActive={index === 1} />
            {index < REGISTRATION_STEPS.length - 1 && (
              <div className="grow mx-5 my-0 h-px bg-black max-sm:w-px max-sm:h-5" />
            )}
          </React.Fragment>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[1046px]"
        noValidate
      >
        <div className="flex gap-5 mb-8 w-full max-md:flex-col">
          <InputField
            id="lastName"
            label="Votre nom"
            placeholder="Entrez votre nom"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            error={errors.lastName}
          />
          <InputField
            id="firstName"
            label="Votre prénom"
            placeholder="Entrez votre prénom"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            error={errors.firstName}
          />
          <InputField
            id="username"
            label="Votre nom d'utilisateur"
            placeholder="Entrez votre nom d'utilisateur"
            value={formData.username}
            onChange={handleInputChange}
            required
            error={errors.username}
          />
        </div>

        <button
          onClick={() => navigate("/passe")}
           className="flex items-center justify-center px-4 py-0 mt-10 text-xl font-extrabold text-white rounded-full border-2 border-sky-900 shadow-sm !bg-sky-900 w-[500px] max-md:px-5 max-md:mt-10 mx-auto"
          aria-label="Continuer"
        >
          Continuer !
        </button>
      </form>

      <div className="flex items-center mx-0 my-5 w-full max-w-[809px]">
        <div className="grow h-px bg-black" />
        <span className="px-5 py-0 text-lg">OU</span>
        <div className="grow h-px bg-black" />
      </div>

      <div className="flex gap-24 w-full max-w-[1046px] max-md:flex-col max-md:gap-5">
        {SOCIAL_BUTTONS.map((button) => (
          <SocialButton
            key={button.altText}
            {...button}
            onClick={() => handleSocialLogin(button.altText)}
          />
        ))}
      </div>
    </div>
  );
};
export default RegistrationForm;