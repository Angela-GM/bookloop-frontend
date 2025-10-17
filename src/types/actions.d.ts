export type RegisterActionState = {
  success?: boolean;
  error?: {
    name?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
    terms?: string[];
    general?: string;
  };
  data?: {
    name?: string;
    email?: string;
    terms?: boolean;
  };
};
