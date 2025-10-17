import { FormField } from "@/src/types/form";
import { InputLabel } from "./input-label";
import { ButtonSubmit } from "../atoms/button-submit";

export const FormLogin = () => {
  const inputsFields: FormField[] = [
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
  ];

  return (
    <form className="w-full flex flex-col gap-3">
      {inputsFields.map((field, index) => (
        <InputLabel
          key={index}
          name={field.name || ""}
          label={field.label || ""}
          type={field.type}
          placeholder={field.placeholder}
        />
      ))}
      <ButtonSubmit>Iniciar sesión</ButtonSubmit>
    </form>
  );
};
