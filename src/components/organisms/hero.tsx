import React from "react";
import { SectionContainer } from "../atoms/section-container";
import { Button } from "../atoms/button";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background image with overlay */}
      <div className="absolute hero-background inset-0 bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
      </div>

      {/* Content */}
      <SectionContainer>
        <div className="relative z-10 container py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Dale una nueva vida a tus libros
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Intercambia libros usados con nuestra moneda virtual. Lee más,
              gasta menos, cuida el planeta.
            </p>

            <section className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href={"/catalog"}
                className="inline-flex  justify-center gap-2 items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 rounded-md px-8 group"
              >
                Explorar libros <IoMdArrowForward />
              </Link>

              <Link
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border hover:text-accent-foreground h-11 rounded-md px-8 bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20"
                href={"/upload"}
              >
                Subir mi primer libro
              </Link>
            </section>

            {/* Feature cards */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-background/90 backdrop-blur border-0 shadow-card">
            <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-book-spine/10 rounded-lg">
            <BookOpen className="h-6 w-6 text-book-spine" />
            </div>
            <h3 className="font-semibold text-foreground">
            Catálogo infinito
            </h3>
            </div>
            <p className="text-muted-foreground">
            Miles de libros esperándote, desde clásicos hasta novedades.
            </p>
            </Card>
            
            <Card className="p-6 bg-background/90 backdrop-blur border-0 shadow-card">
            <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-coin/10 rounded-lg">
            <Recycle className="h-6 w-6 text-coin" />
                </div>
                <h3 className="font-semibold text-foreground">
                Economía circular
                </h3>
                </div>
                <p className="text-muted-foreground">
                Gana Bookis por cada libro que compartas con la comunidad.
                </p>
                </Card>
                
                <Card className="p-6 bg-background/90 backdrop-blur border-0 shadow-card">
                <div className="flex items-center space-x-3 mb-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">
                Comunidad lectora
                </h3>
                </div>
                <p className="text-muted-foreground">
                Conecta con otros amantes de los libros como tú.
                </p>
                </Card>
                </div> */}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
