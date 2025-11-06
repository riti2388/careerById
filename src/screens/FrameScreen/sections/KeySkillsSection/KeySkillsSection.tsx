import { BriefcaseIcon, FileTextIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

const jobDetails = [
  {
    icon: BriefcaseIcon,
    text: "Full-Time",
  },
  {
    icon: MapPinIcon,
    text: "Jaipur",
  },
  {
    icon: FileTextIcon,
    text: "3+ Years",
  },
];

export const KeySkillsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-[100px]">
      <img
        className="absolute bottom-0 left-0 w-[321px] h-[172px]"
        alt="Frame"
        src="/frame-1000005314.svg"
      />

      <div className="flex flex-col items-center gap-10 mx-auto max-w-[531px] px-4">
        <div className="flex flex-col items-center gap-[30px] w-full">
          <h1 className="[font-family:'Montserrat',Helvetica] font-bold text-primary-500 text-5xl text-center tracking-[0] leading-normal">
            Salesforce Developer
          </h1>

          <div className="flex items-center gap-10 max-w-[412px] w-full justify-center flex-wrap">
            {jobDetails.map((detail, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2"
              >
                <detail.icon className="w-6 h-6 text-neutralgray-600" />
                <span className="[font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-xl tracking-[0] leading-normal">
                  {detail.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Button className="h-auto px-[26px] py-3.5 bg-neutralwhite rounded-[50px] border-[none] relative before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-[50px] before:[background:linear-gradient(114deg,rgba(0,218,255,1)_0%,rgba(251,8,4,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-neutralwhite">
          <span className="[font-family:'Nunito_Sans',Helvetica] font-medium text-neutralgray-700 text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
            Apply Now
          </span>
        </Button>
      </div>
    </section>
  );
};
