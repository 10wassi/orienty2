import * as React from "react";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
      <div className="flex gap-2.5 items-start pl-8 max-w-full w-[104px] max-md:pl-5">
        <div className="flex gap-2.5 items-center p-5 bg-sky-900 rounded-xl border-2 border-solid border-neutral-800 h-[74px] w-[74px]">
          <img
            loading="lazy"
            src={icon}
            alt={`${title} icon`}
            className="object-contain aspect-square w-[34px]"
          />
        </div>
      </div>
      <div className="flex overflow-hidden flex-col px-12 pt-20 pb-12 w-full bg-white rounded-xl border-2 border-solid shadow-sm border-neutral-800 max-md:px-5 max-md:max-w-full">
        <h3 className="text-3xl font-bold leading-9 text-zinc-900">{title}</h3>
        <p className="mt-5 text-xl font-medium leading-8 text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
}
