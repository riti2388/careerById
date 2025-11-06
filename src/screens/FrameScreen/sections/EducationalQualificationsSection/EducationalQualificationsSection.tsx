import React from "react";

const jobSummaryContent = [
  "We are looking for a talented Salesforce Developer to design world-class Salesforce applications for our evolving CRM requirements. As a Salesforce Developer, you would be responsible for developing, implementing, integrating, and managing applications on products & features provided by Salesforce.",
  "To ensure success as a Salesforce developer, you should have extensive experience working with Salesforce CRM platforms, application development skills, and the ability to solve complex software problems. Ultimately, a top-class Salesforce developer can create dynamic, maintainable, efficient, and scalable Salesforce applications that meet the changing needs of the company. You should be able to write complex APEX logic, Aura Components, and LWC Components by taking Salesforce Best Practices into consideration.",
];

const educationalQualifications = [
  "Proven work experience in designing, developing, customizing, and implementing Salesforce solutions",
  "Bachelor's degree in Computer Science, Software Engineering, or a related field.",
  "Certifications in the related field is a plus.",
];

const keyResponsibilities = [
  "Collaborate with stakeholders to gather and analyze requirements for Salesforce solutions.",
  "Design, develop, and implement custom Salesforce solutions using Apex, Visualforce, Lightning components, and other Salesforce technologies.",
  "Customize and configure Salesforce to meet business requirements, including creating and modifying objects, fields, workflows, and validation rules.",
  "Maintaining the security and integrity of the application software.",
  "Design innovative solutions and facilitate deployment resulting in customer satisfaction.",
  "Develop and maintain integrations between Salesforce and other systems using APIs, web services, and middleware tools.",
  "Perform data migration and data cleansing activities as part of Salesforce implementation or integration projects.",
  "Create and maintain technical documentation, including solution designs, technical specifications, and test plans.",
  "Conduct unit testing and support user acceptance testing (UAT) to ensure the quality and functionality of developed solutions.",
  "Collaborate with the Salesforce administration team to support ongoing system maintenance and enhancements.",
  "Stay updated with Salesforce platform updates, new features, and industry best practices to recommend and implement process improvements and optimizations.",
  "Review the code and work done by associate developers & ensure quality deliverables and coding best practices are followed.",
  "Mentor and lead a team of associate developers to deliver projects.",
  "Provide technical guidance and mentorship to junior developers or team members as needed.",
];

const keySkills = [
  "Collaborate with stakeholders to gather and analyze requirements for Salesforce solutions.",
  "Design, develop, and implement custom Salesforce solutions using Apex, Visualforce, Lightning components, and other Salesforce technologies.",
  "Customize and configure Salesforce to meet business requirements, including creating and modifying objects, fields, workflows, and validation rules.",
  "Maintaining the security and integrity of the application software.",
  "Design innovative solutions and facilitate deployment resulting in customer satisfaction.",
  "Develop and maintain integrations between Salesforce and other systems using APIs, web services, and middleware tools.",
  "Perform data migration and data cleansing activities as part of Salesforce implementation or integration projects.",
  "Create and maintain technical documentation, including solution designs, technical specifications, and test plans.",
  "Conduct unit testing and support user acceptance testing (UAT) to ensure the quality and functionality of developed solutions.",
  "Collaborate with the Salesforce administration team to support ongoing system maintenance and enhancements.",
  "Stay updated with Salesforce platform updates, new features, and industry best practices to recommend and implement process improvements and optimizations.",
  "Review the code and work done by associate developers & ensure quality deliverables and coding best practices are followed.",
  "Mentor and lead a team of associate developers to deliver projects.",
  "Provide technical guidance and mentorship to junior developers or team members as needed.",
];

export const EducationalQualificationsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-neutralwhite py-[100px]">
      <div className="max-w-[1170px] mx-auto px-4 flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[30px]">
          <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-neutralgray-700 text-[28px] tracking-[0] leading-normal">
            Job Summary
          </h2>
          <div className="flex flex-col gap-3.5">
            {jobSummaryContent.map((paragraph, index) => (
              <p
                key={index}
                className="[font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-lg tracking-[0] leading-normal"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-neutralgray-700 text-[28px] tracking-[0] leading-normal">
            Educational Qualification
          </h2>
          <div className="flex flex-col gap-3.5">
            {educationalQualifications.map((qualification, index) => (
              <p
                key={index}
                className="[font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-lg tracking-[0] leading-normal"
              >
                {qualification}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-neutralgray-700 text-[28px] tracking-[0] leading-normal">
            Key Responsibilities
          </h2>
          <div className="flex flex-col gap-3.5">
            {keyResponsibilities.map((responsibility, index) => (
              <p
                key={index}
                className="[font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-lg tracking-[0] leading-normal"
              >
                {responsibility}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h2 className="[font-family:'Montserrat',Helvetica] font-bold text-neutralgray-700 text-[28px] tracking-[0] leading-normal">
            Key Skills Required
          </h2>
          <div className="flex flex-col gap-3.5">
            {keySkills.map((skill, index) => (
              <p
                key={index}
                className="[font-family:'Nunito_Sans',Helvetica] font-normal text-neutralgray-600 text-lg tracking-[0] leading-normal"
              >
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
