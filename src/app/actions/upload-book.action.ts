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
  console.log("=== INICIO uploadBookAction ===");

  try {
    // 🔑 Paso 1: Obtener token de cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("token_bookloop")?.value;
    console.log("✅ Token obtenido:", !!token);

    if (!token) {
      console.log("❌ No hay token");
      return { error: { general: "No estás autenticado. Inicia sesión." } };
    }

    // 🔑 Paso 2: Obtener datos del usuario
    const whoamiData = await whoami(token);
    console.log("✅ whoamiData:", whoamiData);
    const ownerId = whoamiData?.id;

    if (!ownerId) {
      console.log("❌ No se obtuvo ownerId");
      return { error: { general: "Usuario no identificado." } };
    }

    // 🔑 Paso 3: Extraer datos del formulario
    const rawData = {
      isbn: formData.get("isbn") as string,
      title: formData.get("title") as string,
      author: formData.get("author") as string,
      description: formData.get("description") as string,
      condition: formData.get("condition") as string,
      price: Number(formData.get("price")),
      image: formData.get("image") as File | null,
      location: formData.get("location") as string,
      ownerId: ownerId, // ✅ Agregar ownerId AQUÍ
    };

    console.log("📦 rawData:", {
      ...rawData,
      image: rawData.image ? `File(${rawData.image.name}, ${rawData.image.size}b)` : null,
    });

    // 🔑 Paso 4: Validar con Zod
    const result = upUploadBookSchema.safeParse(rawData);
    if (!result.success) {
      console.log("❌ Validación fallida:", result.error.issues);
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as string;
        if (!fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      });
      return {
        error: fieldErrors as UploadBookActionState["error"],
      };
    }

    console.log("✅ Validación exitosa");

    // 🔑 Paso 5: Construir FormData para el backend
    const uploadFormData = new FormData();
    uploadFormData.append("title", result.data.title);
    uploadFormData.append("author", result.data.author);
    uploadFormData.append("isbn", result.data.isbn);
    uploadFormData.append("description", result.data.description);
    uploadFormData.append("condition", result.data.condition);
    uploadFormData.append("price", String(result.data.price));
    uploadFormData.append("location", result.data.location);
    uploadFormData.append("ownerId", result.data.ownerId);

    // ✅ Agregar imagen O URL de Google Books
    const imageFile = result.data.image;
    if (imageFile && imageFile.size > 0) {
      console.log("📸 Agregando imagen:", imageFile.name, imageFile.size);
      uploadFormData.append("image", imageFile);
    } else {
      const googleBooksUrl = formData.get("googleBooksImageUrl") as string | null;
      if (googleBooksUrl) {
        console.log("🌐 Agregando URL de Google Books:", googleBooksUrl);
        uploadFormData.append("imageUrl", googleBooksUrl);
      }
    }

    console.log("📤 Enviando uploadFormData al backend...");

    // 🔑 Paso 6: Llamar al backend
    await uploadBook(uploadFormData, token);

    console.log("✅ Libro subido exitosamente");
    return { success: true };
  } catch (err: unknown) {
    console.error("❌ Error en uploadBookAction:", err);
    const errorMessage = err instanceof Error ? err.message : "Error desconocido al subir libro";
    return { error: { general: errorMessage } };
  }
}
