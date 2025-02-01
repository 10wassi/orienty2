import * as React from "react";
import heroBackground from '../../assets/images/herobg.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section
        className="flex flex-row items-center justify-between w-full max-w-[1724px] max-md:max-w-full gap-10 mt-7"
        role="banner"
      >
        {/* Partie gauche avec l'image de fond */}
        <div
          className="relative flex gap-2.5 items-start w-[600px] min-h-[385px] bg-cover bg-center max-md:max-w-full"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          {/* Image principale */}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6723f37bbc487dadbeb65e317129c00c1273b2bde7e06b485cb27f767f1a0f78?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896"
            alt="Hero illustration"
            className="object-contain absolute top-2/4 left-2/4 z-0 -translate-x-2/4 -translate-y-2/4 aspect-[1.1] h-[507px] w-[300px] max-md:max-w-full"
          />
        </div>

        {/* Partie droite avec texte et bouton */}
        <div className="flex flex-col self-stretch w-[565px] max-md:max-w-full mt-8">
          <div className="flex flex-col w-full font-medium">
            <h2 className="gap-2.5 self-start pb-1.5 text-2xl text-neutral-800">
              Bienvenue chez :
            </h2>
            <h1 className="text-5xl leading-[60px] text-zinc-900 max-md:text-4xl max-md:leading-[57px]">
              <span className="font-extrabold">ORIENTY- </span>
              <span className="font-extrabold text-sky-900">
                Votre Avenir, Votre Choix.
              </span>
            </h1>
          </div>
          <p className="mt-6 text-lg leading-7 text-zinc-800">
            Libérez votre potentiel avec un guide de carrière qui vous accompagne, au diapason de vos rêves.
          </p>

          {/* Bouton */}
          <button
               onClick={() => navigate("/signup")}
               className="flex items-center justify-center px-8 py-4 mt-10 text-2xl font-extrabold text-white rounded-xl border-2 border-sky-900 shadow-sm !bg-sky-900 w-[500px] max-md:px-5 max-md:mt-10"
                aria-label="Démarrer votre orientation">
            <span className="block w-full text-center">
               Démarrez votre orientation maintenant
            </span>
          </button>
        </div>
      </section>

      {/* Partie principale sous l'image */}
      <main className="flex flex-col px-72 w-full font-medium text-center text-zinc-800 max-md:px-5 max-md:max-w-full mt-16 text-[16px]">
        <div
          role="banner"
          className="overflow-hidden gap-2.5 self-center px-5 py-2.5 text-lg bg-white rounded-lg border-2 border-black border-solid"
        >
          Avec Orienty
        </div>
        <h1 className="mt-5 text-3xl font-bold leading-[50px] text-zinc-900 max-md:max-w-full max-md:text-3xl max-md:leading-[50px]">
  Explorer les Carrières qui Vous Correspondent
        </h1>
        <p className="mt-5 text-lg leading-7 max-md:max-w-full">
          Grâce à nos algorithmes innovants, Orienty analyse minutieusement votre
          parcours et vos passions pour recommander des carrières alignées avec
          les opportunités éducatives au Bénin et en Afrique, ainsi que des
          parcours en ligne.
        </p>
      </main>
    </div>
  );
};

export default Hero;