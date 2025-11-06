import React from "react";
import { EducationalQualificationsSection } from "./sections/EducationalQualificationsSection";
import { FooterSection } from "./sections/FooterSection";
import { JobSummarySection } from "./sections/JobSummarySection";
import { KeyResponsibilitiesSection } from "./sections/KeyResponsibilitiesSection";
import { KeySkillsSection } from "./sections/KeySkillsSection";
import { NavbarSection } from "./sections/NavbarSection";

export const FrameScreen = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start relative">
      <NavbarSection />
      <KeySkillsSection />
      <EducationalQualificationsSection />
      <KeyResponsibilitiesSection />
      <JobSummarySection />
      <FooterSection />
    </div>
  );
};
