"use server";

import { registerSchema } from "@/lib/validations";
import { API_URL } from "@/src/constants";
import { RegisterActionState } from "@/src/types/actions";

export async function registerUserAction(
  prevState: RegisterActionState | null,
  formData: FormData
): Promise<RegisterActionState> {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
    terms: formData.get("terms") === "on" || formData.get("terms") === "true",
  };

  const result = registerSchema.safeParse(rawData);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    return {
      error: {
        name: fieldErrors.name,
        email: fieldErrors.email,
        password: fieldErrors.password,
        confirmPassword: fieldErrors.confirmPassword,
        terms: fieldErrors.terms,
      },
      data: {
        name: rawData.name,
        email: rawData.email,
        terms: rawData.terms,
      },
    };
  }

  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: result.data.name,
        email: result.data.email,
        password: result.data.password,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return { error: { general: error.message || "Error al registrar" } };
    }

    return { success: true };
  } catch (err: unknown) {
    console.log("error",err);
    const errorMessage =
      err instanceof Error ? err.message : "Error inesperado";
    return { error: { general: errorMessage } };
  }
}
