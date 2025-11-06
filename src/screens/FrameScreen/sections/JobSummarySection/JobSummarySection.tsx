import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const jobCards = [
  {
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
    description:
      "We are looking for a talented Salesforce Developer to design world-class Salesforce applications for our evolving CRM requirements. As a Salesforce Developer, you would be responsible for developing, implementing, integrating, and managing applications on products & features provided by Salesforce.",
    businessCenterIcon: "/business-center-1.png",
    locationIcon: "/location-on-1.png",
    contractIcon: "/contract-edit-1.png",
  },
  {
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
    description:
      "We are looking for a talented Salesforce Developer to design world-class Salesforce applications for our evolving CRM requirements. As a Salesforce Developer, you would be responsible for developing, implementing, integrating, and managing applications on products & features provided by Salesforce.",
    businessCenterIcon: "/business-center-2.png",
    locationIcon: "/location-on-2.png",
    contractIcon: "/contract-edit-2.png",
  },
  {
    title: "Salesforce Developer",
    type: "Full-Time",
    location: "Jaipur",
    experience: "3+ Years",
    description:
      "We are looking for a talented Salesforce Developer to design world-class Salesforce applications for our evolving CRM requirements. As a Salesforce Developer, you would be responsible for developing, implementing, integrating, and managing applications on products & features provided by Salesforce.",
    businessCenterIcon: "/business-center-3.png",
    locationIcon: "/location-on-3.png",
    contractIcon: "/contract-edit-3.png",
  },
];

export const JobSummarySection = (): JSX.Element => {
  return (
    <section className="w-full bg-neutralgray-50 py-[100px] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="flex items-center justify-center h-[59px] [font-family:'Montserrat',Helvetica] font-bold text-primary-500 text-5xl text-center tracking-[0] leading-[normal] mb-[60px]">
          Other Opportunities
        </h2>

        <div className="flex items-start gap-[30px] justify-center mb-[68px] flex-wrap lg:flex-nowrap">
          {jobCards.map((job, index) => (
            <Card
              key={index}
              className="flex flex-col w-full lg:w-[492px] items-center gap-6 bg-white rounded-lg overflow-hidden border-b-4 border-[#39b2df] shadow-[0px_4px_10px_#00000024] border-t-0 border-l-0 border-r-0"
            >
              <CardContent className="flex flex-col items-center gap-6 px-10 py-[30px] w-full">
                <h3 className="flex items-center justify-center self-stretch [font-family:'Montserrat',Helvetica] font-bold text-neutralgray-700 text-[28px] text-center tracking-[0] leading-[normal]">
                  {job.title}
                </h3>

                <div className="flex items-center gap-10 self-stretch w-full">
                  <div className="flex items-center justify-center gap-2 flex-1">
                    <img
                      className="w-6 h-6"
                      alt="Business center"
                      src={job.businessCenterIcon}
                    />
                    <span className="flex items-center justify-center [font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-lg tracking-[0] leading-[normal]">
                      {job.type}
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-2 flex-1">
                    <img
                      className="w-6 h-6"
                      alt="Location on"
                      src={job.locationIcon}
                    />
                    <span className="flex items-center justify-center text-neutralgray-600 text-lg leading-[normal] [font-family:'Nunito_Sans',Helvetica] font-normal tracking-[0]">
                      {job.location}
                    </span>
                  </div>

                  <div className="flex items-center justify-center gap-2 flex-1">
                    <img
                      className="w-6 h-6"
                      alt="Contract edit"
                      src={job.contractIcon}
                    />
                    <span className="flex items-center justify-center [font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-lg tracking-[0] leading-[normal]">
                      {job.experience}
                    </span>
                  </div>
                </div>

                <p className="[display:-webkit-box] items-center justify-center self-stretch h-[82px] [font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-lg text-center tracking-[0] leading-[normal] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                  {job.description}
                </p>

                <Button
                  variant="outline"
                  className="inline-flex items-center justify-center gap-2.5 px-[26px] py-3.5 h-auto bg-neutralwhite rounded-[50px] border-[none] before:content-[''] before:absolute before:inset-0 before:p-[1.5px] before:rounded-[50px] before:[background:linear-gradient(114deg,rgba(0,218,255,1)_0%,rgba(251,8,4,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                >
                  <span className="flex items-center justify-center [font-family:'Nunito_Sans',Helvetica] font-medium text-neutralgray-700 text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
                    Eplore
                  </span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="inline-flex items-start gap-[18px] justify-center w-full">
          <Button
            variant="ghost"
            size="icon"
            className="inline-flex items-center justify-center p-2.5 h-auto bg-[#39b2df] rounded-[100px] overflow-hidden -rotate-180 shadow-[0px_8px_23.3px_#39b2df80] hover:bg-[#39b2df]"
          >
            <img
              className="w-5 h-5 rotate-180"
              alt="Vuesax linear arrow"
              src="/vuesax-linear-arrow-right.svg"
            />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="inline-flex items-center justify-center p-2.5 h-auto rounded-[100px] overflow-hidden border border-solid border-[#dcdcdc]"
          >
            <img
              className="w-5 h-5"
              alt="Vuesax linear arrow"
              src="/vuesax-linear-arrow-right-1.svg"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
