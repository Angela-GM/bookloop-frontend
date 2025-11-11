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
export type UploadBookActionState = {
  success?: boolean;
  error?: {
    title?: string;
    author?: string;
    isbn?: string;
    description?: string;
    condition?: string;
    price?: number;
    general?: string;
    image?: string[] | "";
    location?: string;
  };
  data?: {
    title?: string;
    author?: string;
    isbn?: string;
    description?: string;
    condition?: string;
    price?: number;
    image?: File | null;
    location?: string;
    ownerId?: string;
  };
};
