"use client";

import { CardSection } from "../atoms/card-section";
import { SectionContainer } from "../atoms/section-container";

export const Metrics = () => {
  return (
    <SectionContainer classProps="mt-8">
      <section className="grid grid-cols-4 gap-4">
        <CardSection>Lorem ipsum dolor, sit amet</CardSection>
        <CardSection>Lorem ipsum dolor, sit amet</CardSection>
        <CardSection>Lorem ipsum dolor, sit amet</CardSection>
        <CardSection>Lorem ipsum dolor, sit amet</CardSection>
      </section>
    </SectionContainer>
  );
};
