"use client";

import { conditions } from "@/src/data/conditions";
import { ImageCompo } from "../atoms/image-compo";
//import { Label } from "../atoms/label";
import { InputLabel } from "./input-label";
import { SelectLabel } from "./select-label";
import { TextareaLabel } from "./textarea-label";
import { FiCamera } from "react-icons/fi";
import { Label } from "../atoms/label";
import { Input } from "../atoms/input";
import { LuUpload } from "react-icons/lu";
import { useActionState, useEffect, useState } from "react";
import { UploadBookActionState } from "@/src/types/actions";
import { uploadBookAction } from "@/src/app/actions/upload-book.action";
import { ButtonSubmit } from "../atoms/button-submit";


export const FormUploadBook = () => {
 const [state, action, isPending] = useActionState<UploadBookActionState | null, FormData>(uploadBookAction, null);
const [ previewImage, setPreviewImage ] = useState<string | null>(null);

  // Manejar vista previa de la imagen seleccionada
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      console.log(blobUrl);
      setPreviewImage(blobUrl);
      
    } else {
      console.log("No se ha seleccionado ninguna imagen.");
      setPreviewImage(null);
    }
  };


  const renderFieldErrors = (
    fieldName: keyof NonNullable<UploadBookActionState["error"]>
  ) => {
    const errors = state?.error?.[fieldName];
    if (!errors) return null;
    if (Array.isArray(errors)) {
      return errors.map((error, index) => (
        <p key={index} className="text-red-500 text-sm mt-1">
          {error}
        </p>
      ));
    }
    return <p className="text-red-500 text-sm mt-1">{errors}</p>;
  };

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

      <form action={action} className="flex flex-col gap-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputLabel name={"isbn"} label={"ISBN"} placeholder="Ej: 978-3-16-148410-0"  />
          {renderFieldErrors("isbn")}
          <InputLabel name={"location"} label={"Ubicación"} placeholder="Ej: Ciudad, País"  />
          {renderFieldErrors("location")}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <InputLabel name={"title"} label={"Título"} placeholder="Ej: Cien años de soledad"  />
          {renderFieldErrors("title")}
          <InputLabel name={"author"} label={"Autor"} placeholder="Ej: Gabriel García Márquez"  />
          {renderFieldErrors("author")}
        </div>
        <div>
          <TextareaLabel label={"Descripción"} name={"description"} placeholder="Describe el libro, su estado, notas especiales..."   />
          {renderFieldErrors("description")}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <SelectLabel name="condition" label="Condición" selectOptions={conditions}  />
          {renderFieldErrors("condition")}
          <InputLabel type={"number"} name={"price"} label={"Precio"} placeholder="Ej: 20.00"  />
          {renderFieldErrors("price")}
        </div>
        <div>
          <Label >Imagen del libro</Label>
        <div className="flex flex-col gap-2 border-dashed border-2 border-secondary rounded-md p-4 justify-center items-center text-center text-sm text-muted-foreground">
          <FiCamera size={40} />
          <p >Sube la portada del libro</p>

         <input type="file" name="image" id="image"  accept="image/*" className="hidden" onChange={handleImageChange} />
         <Label name="image" >
         <button className="cursor-pointer hover:bg-primary/10 rounded-md " onClick={(e) => {e.preventDefault(); document.getElementById('image')?.click()}  }>
          <span className="text-primary flex items-center gap-2 p-2 border border-primary rounded-md hover:"><LuUpload /> Seleccionar imagenes</span>
         </button>
         </Label>
        </div>
        {previewImage && (
          <div className="mt-4">
            <p className="mb-2 font-medium">Vista previa de la imagen seleccionada:</p>
            <ImageCompo
              routeImage={previewImage}
              width={150}
              height={150}
              classAlternative="mx-auto"
              altText="vista previa"
              unoptimized={true}
            />
          </div>
        )}
        </div>
        <ButtonSubmit disabled={isPending}>{isPending ? "Subiendo..." : "Subir libro"}</ButtonSubmit>
        {state?.error?.general && (
          <p className="text-red-500 text-sm">{state.error.general}</p>
        )}
        {state?.success && (
          <p className="text-green-500 text-sm">¡Libro subido correctamente!</p>
        )}
      </form>
    </section>
  );
};
