"use client";

import { FormField } from "@/src/types/form";
import { InputLabel } from "./input-label";
import { ButtonSubmit } from "../atoms/button-submit";
import { loginUserAction } from "@/src/app/actions/login.action";
import { LoginActionState } from "@/src/types/actions";
import { useState, useEffect } from "react";
import { useActionState } from "react";
import { API_URL } from "@/src/constants/env";

export const FormLogin = () => {
  const [state, action, isPending] = useActionState<
    LoginActionState | null,
    FormData
  >(loginUserAction, null);

  // Initialize controlled form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Update form data when server returns validation errors
  useEffect(() => {
    if (state?.data) {
      setFormData((prev) => ({
        ...prev,
        email: state.data?.email || "",
        password: state.data?.password || "",
      }));
    }
  }, [state]);

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Helper function to render field errors
  const renderFieldErrors = (
    fieldName: keyof NonNullable<LoginActionState["error"]>
  ) => {
    const errors = state?.error?.[fieldName];
    if (!errors || (Array.isArray(errors) && errors.length === 0)) return null;

    if (Array.isArray(errors)) {
      return errors.map((error, index) => (
        <p key={index} className="text-red-500 text-sm mt-1">
          {error}
        </p>
      ));
    }

    return <p className="text-red-500 text-sm mt-1">{errors}</p>;
  };

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

  // Ejecutar whoami después del login exitoso
  useEffect(() => {
    console.log("Login state changed:", state);
    if (state?.success && state?.token) {
      console.log("Login exitoso, ejecutando whoami con token:", state.token);

      // Guardar token en localStorage
      localStorage.setItem("token", state.token);

      // Obtener datos del usuario
      fetch(`${API_URL}/auth/whoami`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
        .then((res) => {
          console.log("Whoami status:", res.status);
          return res.json();
        })
        .then((user) => {
          console.log("User data:", user);
        })
        .catch((err) => console.error("Error whoami:", err));
    }
  }, [state]);

  return (
    <form className="w-full flex flex-col gap-4" action={action}>
      {inputsFields.map((field, index) => {
        const fieldName = field.name as keyof typeof formData;
        return (
          <div key={index}>
            <InputLabel
              name={field.name || ""}
              label={field.label || ""}
              type={field.type}
              placeholder={field.placeholder}
              value={fieldName ? formData[fieldName] : ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                fieldName && handleInputChange(fieldName, e.target.value)
              }
            />
            {field.name &&
              renderFieldErrors(
                field.name as keyof NonNullable<LoginActionState["error"]>
              )}
          </div>
        );
      })}

      {/* General error message */}
      {renderFieldErrors("general")}

      {/* Success message */}
      {state?.success && (
        <p className="text-green-500 text-sm">¡Inicio de sesión exitoso!</p>
      )}

      <ButtonSubmit disabled={isPending}>
        {isPending ? "Iniciando sesión..." : "Iniciar sesión"}
      </ButtonSubmit>
    </form>
  );
};
