import { z } from "zod";

export const registerSchema = z
  .object({
    completeName: z
      .string()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .max(100, "El nombre debe tener menos de 100 caracteres"),
    email: z.string().email("El correo electrónico debe ser válido"),
    password: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
      ),
    confirmPassword: z
      .string()
      .min(8, "La contraseña debe tener al menos 8 caracteres")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
      ),
    terms: z.boolean().refine((val) => val === true, {
      message: "Debes aceptar los términos y condiciones",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"], // Especifica dónde mostrar el error
  });
  export type UserFormData = z.infer<typeof registerSchema>