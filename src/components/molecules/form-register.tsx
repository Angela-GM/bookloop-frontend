import { FormField } from "@/src/types/form";
import { InputLabel } from "./input-label";
import { ButtonSubmit } from "../atoms/button-submit";

export const FormRegister = () => {
  const inputsFields: FormField[] = [
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

  return (
    <form className="w-full flex flex-col gap-4">
      {inputsFields.map((field, index) => (
        <InputLabel
          key={index}
          name={field.name || ""}
          label={field.label || ""}
          type={field.type}
          placeholder={field.placeholder}
        />
      ))}

      <ButtonSubmit>Crear cuenta</ButtonSubmit>
    </form>
  );
};
