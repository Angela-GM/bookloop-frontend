'use server';
import { upUploadBookSchema } from "@/lib/validations";
import { uploadBook } from "@/src/services/books.service";
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
    };
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
         },
      };
    }
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value; // Get the token from somewhere (e.g., context, state)
    await uploadBook(formData, token);

    return { success: true };
}
