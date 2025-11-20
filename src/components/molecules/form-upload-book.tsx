"use client";

import { conditions } from "@/src/data/conditions";
import { ImageCompo } from "../atoms/image-compo";
import { InputLabel } from "./input-label";
import { SelectLabel } from "./select-label";
import { TextareaLabel } from "./textarea-label";
import { FiCamera } from "react-icons/fi";
import { Label } from "../atoms/label";
import { Input } from "../atoms/input";
import { LuUpload } from "react-icons/lu";
import { useActionState, useState } from "react";
import { UploadBookActionState } from "@/src/types/actions";
import { uploadBookAction } from "@/src/app/actions/upload-book.action";
import { ButtonSubmit } from "../atoms/button-submit";

export const FormUploadBook = () => {
  const [state, action, isPending] = useActionState<UploadBookActionState | null, FormData>(
    uploadBookAction,
    null
  );
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [googleBooksImageUrl, setGoogleBooksImageUrl] = useState<string | null>(null);

  const [isbn, setIsbn] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSearchISBN = async () => {
    if (!isbn) {
      console.log("Por favor, ingresa un ISBN.");
      return;
    }
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
      const data = await response.json();
      if (data.totalItems > 0) {
        const book = data.items[0].volumeInfo;
        setTitle(book.title || "");
        setAuthor((book.authors && book.authors.join(", ")) || "");
        setDescription(book.description || "");
        console.log("Libro encontrado:", book);

        // ✅ Solo guardar la URL, sin descargar
        const imageUrl = book.imageLinks?.thumbnail;
        if (imageUrl) {
          setPreviewImage(imageUrl);
          setGoogleBooksImageUrl(imageUrl);
          console.log("Imagen de Google Books encontrada:", imageUrl);
        }
      } else {
        console.log("No se encontró el libro con el ISBN proporcionado.");
      }
    } catch (error) {
      console.error("Error al buscar el libro por ISBN:", error);
    }
  };

  // Manejar carga manual de imagen
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    if (file) {
      const blobUrl = URL.createObjectURL(file);
      console.log(blobUrl);
      setPreviewImage(blobUrl);
      setGoogleBooksImageUrl(null); // ✅ Limpiar URL de Google si sube imagen manual
    } else {
      console.log("No se ha seleccionado ninguna imagen.");
      setPreviewImage(null);
    }
  };

  const renderFieldErrors = (fieldName: keyof NonNullable<UploadBookActionState["error"]>) => {
    const errors = state?.error?.[fieldName];
    if (!errors) return null;
    if (Array.isArray(errors)) {
      return errors.map((error, index) => (
        <p
          key={index}
          className='text-red-500 text-sm mt-1'
        >
          {error}
        </p>
      ));
    }
    return <p className='text-red-500 text-sm mt-1'>{errors}</p>;
  };

  // ✅ Crear wrapper para enviar URL a Google Books si es necesario
  const handleFormSubmit = async (formData: FormData) => {
    // Si se usó la imagen de Google Books, agregar la URL al FormData
    if (googleBooksImageUrl && !formData.get("image")) {
      formData.append("googleBooksImageUrl", googleBooksImageUrl);
    }
    action(formData);
  };

  return (
    <section>
      <section className='flex items-center gap-3'>
        <ImageCompo
          routeImage={"/book-logo-brown.svg"}
          width={20}
          height={20}
        />
        <h3 className='text-2xl font-semibold leading-none tracking-tight flex space-x-2'>
          Información del libro
        </h3>
      </section>
      <p className='text-sm text-muted-foreground mt-2'>Proporciona los detalles de tu libro</p>

      <form
        action={handleFormSubmit}
        className='flex flex-col gap-4 mt-4'
      >
        {googleBooksImageUrl && (
          <input
            type='hidden'
            name='googleBooksImageUrl'
            value={googleBooksImageUrl}
          />
        )}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div className='flex items-end relative'>
            <InputLabel
              name={"isbn"}
              label={"ISBN"}
              placeholder='Ej: 978-3-16-148410-0'
              renderFieldErrors={renderFieldErrors("isbn")}
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
            <button
              className=' text-sm text-muted-foreground w-full pb-2 pt-2  rounded-r-lg border border-border bg-accent/20 hover:bg-muted '
              type='button'
              onClick={handleSearchISBN}
            >
              Buscar
            </button>
          </div>

          <InputLabel
            name={"location"}
            label={"Ubicación"}
            placeholder='Ej: Ciudad, País'
            renderFieldErrors={renderFieldErrors("location")}
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <InputLabel
            name={"title"}
            label={"Título"}
            placeholder='Ej: Cien años de soledad'
            renderFieldErrors={renderFieldErrors("title")}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputLabel
            name={"author"}
            label={"Autor"}
            placeholder='Ej: Gabriel García Márquez'
            renderFieldErrors={renderFieldErrors("author")}
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <TextareaLabel
            label={"Descripción"}
            name={"description"}
            placeholder='Describe el libro, su estado, notas especiales...'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {renderFieldErrors("description")}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <SelectLabel
            name='condition'
            label='Condición'
            selectOptions={conditions}
          />
          {renderFieldErrors("condition")}
          <InputLabel
            type={"number"}
            name={"price"}
            label={"Precio"}
            placeholder='Ej: 20.00'
            renderFieldErrors={renderFieldErrors("price")}
          />
        </div>
        <div>
          <Label>Imagen del libro</Label>
          <div className='flex flex-col gap-2 border-dashed border-2 border-secondary rounded-md p-4 justify-center items-center text-center text-sm text-muted-foreground'>
            {previewImage ? (
              <>
                <p className='mb-2 font-medium'>Vista previa:</p>
                <ImageCompo
                  routeImage={previewImage}
                  width={150}
                  height={150}
                  classAlternative='mx-auto'
                  altText='vista previa'
                  unoptimized={true}
                />
                <button
                  type='button'
                  onClick={() => {
                    setPreviewImage(null);
                    setGoogleBooksImageUrl(null);
                  }}
                  className='text-sm text-red-500 hover:text-red-700 mt-2'
                >
                  Cambiar imagen
                </button>
              </>
            ) : (
              <>
                <FiCamera size={40} />
                <p>Sube la portada del libro</p>
              </>
            )}

            <input
              type='file'
              name='image'
              id='image'
              accept='image/*'
              className='hidden'
              onChange={handleImageChange}
            />
            <Label name='image'>
              <button
                className='cursor-pointer hover:bg-primary/10 rounded-md'
                type='button'
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("image")?.click();
                }}
              >
                <span className='text-primary flex items-center gap-2 p-2 border border-primary rounded-md hover:bg-primary/5'>
                  <LuUpload /> Seleccionar imagen
                </span>
              </button>
            </Label>
          </div>
        </div>
        <ButtonSubmit disabled={isPending}>
          {isPending ? "Subiendo..." : "Subir libro"}
        </ButtonSubmit>
        {state?.error?.general && <p className='text-red-500 text-sm'>{state.error.general}</p>}
        {state?.success && <p className='text-green-500 text-sm'>¡Libro subido correctamente!</p>}
      </form>
    </section>
  );
};
