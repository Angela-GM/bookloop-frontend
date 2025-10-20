"use server";

import { loginSchema } from "@/lib/validations";
import { API_URL } from "@/src/constants/env";
import { LoginActionState } from "@/src/types/actions";

export async function loginUserAction(
  prevState: LoginActionState | null,
  formData: FormData
): Promise<LoginActionState> {
  const rawData = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const result = loginSchema.safeParse(rawData);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;
    return {
      error: {
        email: fieldErrors.email,
        password: fieldErrors.password,
      },
      data: {
        email: rawData.email,
        password: rawData.password,
      },
    };
  }

  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: result.data.email,
        password: result.data.password,
      }),
      credentials: "include",
    });

    if (!response.ok) {
      const error = await response.json();
      return { error: { general: error.message || "Error al iniciar sesión" } };
    }

    const loginData = await response.json();
    
    return {
      success: true,
      token: loginData.token,
    };
  } catch (err: unknown) {
    console.log("error", err);
    const errorMessage =
      err instanceof Error ? err.message : "Error inesperado";
    return { error: { general: errorMessage } };
  }
}
