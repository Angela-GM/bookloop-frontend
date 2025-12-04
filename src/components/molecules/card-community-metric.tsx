"use client";
import { ImageCompo } from "../atoms/image-compo";

interface CardCommunityMetricProps {
  image: string;
  metric: string;
  label: string;
  change: string;
}

export const CardCommunityMetric = ({
  image,
  metric,
  label,
  change,
}: CardCommunityMetricProps) => {
  return (
    <section className="rounded-lg bg-card text-card-foreground shadow-sm text-center p-6 border-0 shadow-card hover:shadow-book transition-shadow duration-300">
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-secondary rounded-full">
          <ImageCompo
            routeImage={image}
            width={32}
            height={32}
            classAlternative="mx-auto"
          />
        </div>
      </div>

      <div className="text-3xl font-bold text-foreground mb-2">{metric}</div>

      <div className="text-sm font-medium text-foreground mb-1">{label}</div>
      <div className="text-xs text-muted-foreground">{change}</div>
    </section>
  );
};
