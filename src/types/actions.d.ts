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

export type LoginActionState = {
  success?: boolean;
  token?: string;
  error?: {
    email?: string[];
    password?: string[];
    general?: string;
  };
  data?: {
    email?: string;
    password?: string;
  };
};
