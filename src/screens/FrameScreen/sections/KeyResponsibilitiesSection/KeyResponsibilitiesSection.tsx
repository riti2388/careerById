import React from "react";
import { Button } from "../../../../components/ui/button";

export const KeyResponsibilitiesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-[100px]">
      <div className="flex flex-col items-center gap-[60px] px-4">
        <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-primary-500 text-5xl text-center tracking-[0] leading-[normal]">
          Ready to take the next step?
        </h2>

        <Button className="h-auto inline-flex items-center justify-center gap-2.5 px-[26px] py-3.5 bg-neutralwhite rounded-[50px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-[50px] before:[background:linear-gradient(114deg,rgba(0,218,255,1)_0%,rgba(251,8,4,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-neutralwhite">
          <span className="[font-family:'Nunito_Sans',Helvetica] font-medium text-neutralgray-700 text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
            Apply Now
          </span>
        </Button>
      </div>

      <img
        className="absolute top-0 right-0 w-[316px] h-[200px]"
        alt="Frame"
        src="/frame-1000005314.svg"
      />
    </section>
  );
};
