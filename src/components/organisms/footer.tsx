"use client";

import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ImageCompo } from "../atoms/image-compo";
import { SectionContainer } from "../atoms/section-container";
import { LuMail, LuMessageCircle } from "react-icons/lu";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-primary text-primary-foreground">
      <SectionContainer classProps="py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <ImageCompo
                routeImage={"/book-logo-white.svg"}
                width={32}
                height={32}
              />
              <h3 className="text-xl font-bold">BookCircle</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              La plataforma donde los libros encuentran nuevos hogares y los
              lectores descubren nuevas historias.
            </p>
            <div className="flex space-x-2">
              <Link
                target="_blank"
                href={"mailto:contact@bookloop.com"}
                className="text-primary-foreground hover:bg-primary-foreground/10 p-1 rounded-lg"
              >
                <LuMail className="h-4 w-4" />
              </Link>
              <Link
                target="_blank"
                href={"mailto:contact@bookloop.com"}
                className="text-primary-foreground hover:bg-primary-foreground/10 p-1 rounded-lg"
              >
                {" "}
                <LuMessageCircle className="h-4 w-4" />
              </Link>

              <Link
                target="_blank"
                href={"https://github.com/Angela-GM"}
                className="text-primary-foreground hover:bg-primary-foreground/10 p-1 rounded-lg"
              >
                <BsGithub className="h-4 w-4" />
              </Link>

              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/angela-garcia-mu"}
                className="text-primary-foreground hover:bg-primary-foreground/10 p-1 rounded-lg"
              >
                <BsLinkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Explorar</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link
                  href="/catalog"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Catálogo
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Géneros
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Novedades
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Más valorados
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4">Comunidad</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Normas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Centro de ayuda
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/privacity"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/termns"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>
            &copy; {currentYear} BookCircle. Una plataforma para lectores
            apasionados. 📚
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
};
