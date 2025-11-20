"use server";
import { upUploadBookSchema } from "@/lib/validations";
import { uploadBook } from "@/src/services/books.service";
import { whoami } from "@/src/services/whoami.service";
import { UploadBookActionState } from "@/src/types/actions";
import { cookies } from "next/headers";

export async function uploadBookAction(
  prevState: UploadBookActionState | null,
  formData: FormData
): Promise<UploadBookActionState> {
  const rawData = {
    isbn: formData.get("isbn") as string,
    title: formData.get("title") as string,
    author: formData.get("author") as string,
    description: formData.get("description") as string,
    condition: formData.get("condition") as string,
    price: Number(formData.get("price")),
    image: formData.get("image") as File | null,
    location: formData.get("location") as string,
    
  };
  // 🔑 Paso 1: Obtener token de cookies
  const cookieStore = await cookies();
  const token = cookieStore.get("token_bookloop")?.value;

  // 🔑 Paso 2: Validar que existe el token PRIMERO
  if (!token) {
    return { error: { general: "No estás autenticado. Inicia sesión." } };
  }

  // 🔑 Paso 3: Ahora sí, llamar whoami() con token válido
  try {
    const whoamiData = await whoami(token);
    console.log("whoamiData:", whoamiData);
    const ownerId = whoamiData?.id; // ← Extrae el ID

    if (!ownerId) {
      return { error: { general: "Usuario no identificado." } };
    }

    console.log("ownerId:", ownerId);

    const result = upUploadBookSchema.safeParse(rawData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as string;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      });
      return {
        error: fieldErrors as UploadBookActionState["error"],
        data: {
          isbn: rawData.isbn,
          title: rawData.title,
          author: rawData.author,
          description: rawData.description,
          condition: rawData.condition,
          price: rawData.price,
          image: rawData.image,
          location: rawData.location,
          ownerId: ownerId,
        },
      };
    }
    // 🔑 Paso 3: Pasar el token al servicio
    try {
      const uploadFormData = new FormData();
      uploadFormData.append("title", result.data.title);
      uploadFormData.append("author", result.data.author);
      uploadFormData.append("isbn", result.data.isbn);
      uploadFormData.append("description", result.data.description);
      uploadFormData.append("condition", result.data.condition);
      uploadFormData.append("price", String(result.data.price)); // ← STRING
      uploadFormData.append("location", result.data.location);
      uploadFormData.append("ownerId", ownerId || "");

      // Obtener el archivo del FormData original
      const imageFile = formData.get("image") as File;
      if (imageFile) {
        uploadFormData.append("image", imageFile);
      }

      await uploadBook(uploadFormData, token);
      return { success: true };
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Error al subir libro";
      return { error: { general: errorMessage } };
    }
  } catch {
    return { error: { general: "Error al obtener datos del usuario" } };
  }
}
