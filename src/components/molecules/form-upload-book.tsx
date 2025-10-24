"use client";

import { ImageCompo } from "../atoms/image-compo";
import { Label } from "../atoms/label";
import { InputLabel } from "./input-label";
import { TextareaLabel } from "./textarea-label";

export const FormUploadBook = () => {
  return (
    <section>
      <section className="flex items-center gap-3">
        <ImageCompo
          routeImage={"/book-logo-brown.svg"}
          width={20}
          height={20}
        />
        <h3 className="text-2xl font-semibold leading-none tracking-tight flex space-x-2">
          Información del libro
        </h3>
      </section>
      <p className="text-sm text-muted-foreground mt-2">
        Proporciona los detalles de tu libro
      </p>

      <form action="" className="flex flex-col gap-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputLabel name={"title"} label={"Título"} placeholder="Ej: Cien años de soledad" />
          <InputLabel name={"author"} label={"Autor"} placeholder="Ej: Gabriel García Márquez" />
        </div>
        <div>
          <TextareaLabel label={"Descripción"} name={"description"} placeholder="Describe el libro, su estado, notas especiales..." />
        </div>
      </form>
    </section>
  );
};
