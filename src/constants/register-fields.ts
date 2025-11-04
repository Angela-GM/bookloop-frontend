import { FormField } from "../types/form";

export const inputsFields: FormField[] = [
    {
      name: "name",
      label: "Nombre completo",
      type: "text",
      placeholder: "Name Lastname",
      required: true,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Correo electrónico",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "************",
      required: true,
    },
    {
      name: "confirmPassword",
      label: "Confirmar Password",
      type: "password",
      placeholder: "************",
      required: true,
    },
  ];