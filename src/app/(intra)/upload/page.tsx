import Link from "next/link";
import { SectionContainer } from "../../../components/atoms/section-container";
import { IoMdArrowBack } from "react-icons/io";
import { CardSection } from "@/src/components/atoms/card-section";
import { CardIntra } from "@/src/components/atoms/card-intra";
import { CiCamera } from "react-icons/ci";
import { IoCameraOutline } from "react-icons/io5";

export default function UploadPage() {
  return (
    <section>
      <SectionContainer classProps="pt-8">
        <Link
          href={"/dashboard"}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mb-4"
        >
          <IoMdArrowBack className="mr-2 h-4 w-4" />
          Volver al dashboard
        </Link>{" "}
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Subir nuevo libro
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Comparte tu libro con la comunidad y gana Bookis
        </p>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="col-span-1 md:col-span-2">
            <CardIntra>
              <form action="">form</form>
            </CardIntra>
          </section>

          <section className="col-span-1 flex flex-col gap-8">
            {/* Consejos */}
            <CardIntra>
              <section className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Consejos para subir tu libro
                </h3>
              </section>

              <section className="p-6 pt-0 space-y-4">
                <div className="flex items-start space-x-3">
                  <IoCameraOutline className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Fotos nítidas</p>
                    <p className="text-sm text-muted-foreground">
                      Incluye portada, contraportada y estado del libro
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <IoCameraOutline className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Descripción honesta</p>
                    <p className="text-sm text-muted-foreground">
                      Describe fielmente el estado y características
                    </p>
                  </div>
                </div>{" "}
                <div className="flex items-start space-x-3">
                  <IoCameraOutline className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Ubicación precisa</p>
                    <p className="text-sm text-muted-foreground">
                      Facilita los intercambios locales
                    </p>
                  </div>
                </div>
              </section>
            </CardIntra>
            {/* Precio sugerido */}
            <CardIntra>
              <section className="flex flex-col space-y-1.5 ">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Precio sugerido
                </h3>
              </section>
              <section className="pt-0 text-center">
                <p className="text-3xl font-bold text-primary">12-18</p>
                <p className="text-sm text-muted-foreground">Bookis promedio</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Basado en libros similares
                </p>
              </section>
            </CardIntra>
          </section>
        </section>
      </SectionContainer>
    </section>
  );
}
