export interface FormField {
  name?: string;
  label?: string;
  type: "text" | "email" | "password";
  placeholder?: string;
  required?: boolean;
}