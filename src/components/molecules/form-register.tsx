"use client";

import { InputLabel } from "./input-label";
import { ButtonSubmit } from "../atoms/button-submit";
import { registerUserAction } from "@/src/app/actions/register.action";
import { RegisterActionState } from "@/src/types/actions";
import { useState, useEffect } from "react";
import { useActionState } from "react";
import { inputsFields } from "@/src/constants/register-fields";

export const FormRegister = () => {
  const [state, action, isPending] = useActionState<
    RegisterActionState | null,
    FormData
  >(registerUserAction, null);

  // Initialize controlled form state with empty strings (never undefined)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  // Update form data when server returns validation errors
  useEffect(() => {
    if (state?.data) {
      setFormData((prev) => ({
        ...prev,
        name: state.data?.name || "",
        email: state.data?.email || "",
        terms: state.data?.terms ?? false,
      }));
    }
  }, [state]);

  const handleInputChange = (name: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Helper function to render field errors
  const renderFieldErrors = (
    fieldName: keyof NonNullable<RegisterActionState["error"]>
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
              value={fieldName ? String(formData[fieldName]) : ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                fieldName && handleInputChange(fieldName, e.target.value)
              }
            />
            {field.name &&
              renderFieldErrors(
                field.name as keyof NonNullable<RegisterActionState["error"]>
              )}
          </div>
        );
      })}

      {/* Terms and conditions checkbox */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          checked={formData.terms}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange("terms", e.target.checked)
          }
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="terms" className="text-sm text-gray-700">
          Acepto los términos y condiciones
        </label>
      </div>
      {renderFieldErrors("terms")}

      {/* General error message */}
      {renderFieldErrors("general")}

      {/* Success message */}
      {state?.success && (
        <p className="text-green-500 text-sm">¡Cuenta creada exitosamente!</p>
      )}

      <ButtonSubmit disabled={isPending}>
        {isPending ? "Creando cuenta..." : "Crear cuenta"}
      </ButtonSubmit>
    </form>
  );
};
