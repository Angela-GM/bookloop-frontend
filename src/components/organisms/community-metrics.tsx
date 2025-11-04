import React from "react";
import { SectionContainer } from "../atoms/section-container";
import { CardCommunityMetric } from "../molecules/card-community-metric";

export const CommunityMetrics = () => {
  return (
    <section className="py-16">
      <SectionContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Una comunidad que crece
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada día más lectores se unen a nuestra misión de hacer la lectura
            más accesible y sostenible
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card metric */}
          <CardCommunityMetric
            image={"/readers.svg"}
            metric={"2,847"}
            label={"Lectores activos"}
            change={"+12% este mes"}
          />
          <CardCommunityMetric
            image={"/book-logo.svg"}
            metric={"15,632"}
            label={"Libros disponibles"}
            change={"+156 esta semana"}
          />
          <CardCommunityMetric
            image={"/recycle.svg"}
            metric={"8,924"}
            label={"Intercambios realizados"}
            change={"+89 hoy"}
          />
          <CardCommunityMetric
            image={"/up-arrow.svg"}
            metric={"142,785"}
            label={"Bookis en circulación"}
            change={"Economía saludable"}
          />
        </section>
      </SectionContainer>
    </section>
  );
};
