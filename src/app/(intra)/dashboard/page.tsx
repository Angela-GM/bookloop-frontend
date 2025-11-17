import { Metrics } from "@/src/components/organisms/metrics";
import { SectionContainer } from "../../../components/atoms/section-container";
import { CardSection } from "@/src/components/atoms/card-section";
import { H2Title } from "@/src/components/atoms/h2-title";
import { FaPlus } from "react-icons/fa6";
import { GoArrowUpRight, GoPlus } from "react-icons/go";
import { ButtonSubmit } from "@/src/components/atoms/button-submit";
import { BiBookOpen } from "react-icons/bi";
import { LinkButton } from "@/src/components/atoms/link-button";

export default function DashboardPage() {
  return (
    <section>
      <SectionContainer classProps="pt-8 mx-0">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          !Hola, Angela! 👋
        </h2>
        <h4 className="text-muted-foreground">
          Bienvenido a tu espacio literario. Descubre, intercambia y disfruta.
        </h4>

        {/* Metrics */}
        <Metrics />
        <div className="mt-8 grid sm:grid-cols-2 gap-4">

        <CardSection classProps="p-4 flex flex-col justify-between  cursor-pointer ">
          <h3 className="text-2xl font-semibold flex items-center gap-2"><GoPlus  className="size-6"/>Subir Libro</h3>
          <p className="text-sm text-primary/80 mb-4">Comparte tu libro con la comunidad</p>
          <ButtonSubmit classProps="flex items-center justify-center gap-2">Comenzar <GoArrowUpRight /></ButtonSubmit>

        </CardSection>
        <CardSection classProps="p-4 flex flex-col justify-between  cursor-pointer ">
          <h3 className="text-2xl font-semibold flex items-center gap-2"><BiBookOpen size={24} />Explorar catálogo</h3>
          <p className="text-sm text-primary/80 mb-4">Descubre libros increibles</p>
          <LinkButton href="/catalog">Explorar <GoArrowUpRight /></LinkButton>

        </CardSection>
        
        </div>
      </SectionContainer>
    </section>
  );
}
