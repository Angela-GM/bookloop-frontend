import { z } from "zod";

// const passwordRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "El nombre debe tener al menos 2 caracteres")
      .max(100, "El nombre debe tener menos de 100 caracteres"),
    email: z.string().email("El correo electrónico debe ser válido"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
    // .regex(
    //   passwordRegex,
    //   "La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
    // ),
    confirmPassword: z
      .string()
      .min(6, "La contraseña debe tener al menos 8 caracteres"),
    // .regex(
    //   passwordRegex,
    //   "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial"
    // ),
    terms: z.boolean().refine((val) => val === true, {
      message: "Debes aceptar los términos y condiciones",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"], // Especifica dónde mostrar el error
  });
export type UserFormData = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email("El correo electrónico debe ser válido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

export const upUploadBookSchema = z.object({
  isbn: z.string().min(10, "El ISBN debe tener al menos 10 caracteres").max(13, "El ISBN debe tener como máximo 13 caracteres"),
  title: z.string().min(1, "El título es obligatorio").max(200, "El título debe tener como máximo 200 caracteres"),
  author: z.string().min(1, "El autor es obligatorio").max(200, "El autor debe tener como máximo 200 caracteres"),
  description: z.string().min(1, "La descripción es obligatoria").max(1000, "La descripción debe tener como máximo 1000 caracteres"),
  condition: z.string().min(1, "La condición es obligatoria"),
  price: z.number().min(0, "El precio debe ser mayor o igual a 0"),
  location: z.string().min(1, "La ubicación es obligatoria").max(200, "La ubicación debe tener como máximo 200 caracteres"),
});
