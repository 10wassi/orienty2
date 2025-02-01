import * as React from "react";

const testimonials = [
  {
    name: "Jennifer B",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9c02448d91a4994ad20902f2fc716f4422011928dbe3bdad881becff4ab9860e?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896",
    text: "Grâce à Orienty, j'ai trouvé une formation qui me correspond. Je suis motivée pour ma nouvelle carrière. Merci !",
  },
  {
    name: "David K",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0a862b5788d7f9b9e84ff15a8ea402b92cc8849b24e7341dd5d335ca983890c4?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896",
    text: "Orienty m'a aidé à choisir une licence en ingénierie informatique adaptée à mes compétences. Leur plateforme est top !",
  },
  {
    name: "Emily L",
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/45328b9cd76e1f14e857c15a0b2183dbfc9722ffd09a320183f5d7f3d647b7ba?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896",
    text: "Avec Orienty, ma fille a trouvé une filière qui lui correspond. Je recommande leurs services à tous les parents.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="flex flex-col mt-7 w-full max-w-[1592px] max-md:max-w-full"
      aria-labelledby="testimonials-title"
    >
      <div className="flex flex-col px-72 w-full font-medium text-center text-zinc-800 max-md:px-5 max-md:max-w-full">
        <div className="overflow-hidden gap-2.5 self-center px-5 py-2.5 text-lg bg-white rounded-lg border-2 border-black border-solid">
          Leurs mots heureux 🤗
        </div>
        <h2
          id="testimonials-title"
          className="mt-5 text-4xl font-bold leading-tight text-zinc-900 max-md:max-w-full max-md:text-4xl"
        >
          Nos témoignages
        </h2>
        <p className="mt-5 text-lg leading-7 max-md:max-w-full">
          Nos témoignages reflètent avec sincérité l'environnement bienveillant
          que nous offrons, où chaque étudiant s'épanouit tant sur le plan
          académique qu'émotionnel.
        </p>
      </div>
      <div className="flex flex-wrap gap-1 items-center mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <button
          className="flex overflow-hidden gap-2.5 items-center self-stretch p-3.5 my-auto bg-white rounded-lg border-2 border-solid border-zinc-800 h-[58px] w-[58px]"
          aria-label="Previous testimonial"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75349f86a66567a419da3dcdd0ff4b14723a738b0ed22908cc12a10bb593539a?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896"
            alt=""
            className="object-contain aspect-square w-[30px]"
          />
        </button>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex overflow-hidden flex-col flex-1 shrink self-stretch p-12 my-auto bg-white rounded-xl border-2 border-solid shadow-sm basis-0 border-neutral-800 min-w-[240px] max-md:px-5 max-md:max-w-full"
          >
            <div className="flex flex-col w-full">
              <div className="flex gap-2.5 items-center self-center p-2.5 w-20 h-20 border border-solid bg-slate-500 border-zinc-800 rounded-[100px]">
                <img
                  loading="lazy"
                  src={testimonial.image}
                  alt={`Photo de ${testimonial.name}`}
                  className="object-contain aspect-square w-[60px]"
                />
              </div>
              <div className="mt-3 text-2xl font-semibold text-center text-zinc-800">
                {testimonial.name}
              </div>
            </div>
            <div className="flex gap-1.5 items-start self-center mt-8">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7981a5ebdac53c5d03c59d0b4b5491817befb2e990182163921e4026f7b6e94?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896"
                  alt=""
                  className="object-contain shrink-0 w-6 rounded-sm aspect-square"
                />
              ))}
            </div>
            <p className="mt-8 text-xl font-medium leading-8 text-center text-zinc-800">
              {testimonial.text}
            </p>
          </div>
        ))}
        <button
          className="flex overflow-hidden gap-2.5 items-center self-stretch p-3.5 my-auto bg-white rounded-lg border-2 border-solid border-zinc-800 h-[58px] w-[58px]"
          aria-label="Next testimonial"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aed7fc1846a7f6cc91f9fdf545e7167d661a5c96171a46678db14c7187311cf3?placeholderIfAbsent=true&apiKey=5705775dd0bc422794e6407a3b218896"
            alt=""
            className="object-contain aspect-square w-[30px]"
          />
        </button>
      </div>
    </section>
  );
}
