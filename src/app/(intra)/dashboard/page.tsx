import { Metrics } from "@/src/components/organisms/metrics";
import { SectionContainer } from "../../../components/atoms/section-container";
export default function DashboardPage() {
  return (
    <section>
      <SectionContainer classProps="pt-8">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          !Hola, Angela! 👋
        </h2>
        <h4 className="text-muted-foreground">
          Bienvenido a tu espacio literario. Descubre, intercambia y disfruta.
        </h4>

        {/* Metrics */}
        <Metrics />
      </SectionContainer>
    </section>
  );
}
