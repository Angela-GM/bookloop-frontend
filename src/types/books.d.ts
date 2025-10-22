export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  description: string;
  imageUrl: null;
  condition: string;
  available: boolean;
  createdAt: Date;
  updatedAt: Date;
  price: number;
  location: string;
  ownerId: string;
  owner: Owner;
}

export interface Owner {
  id: string;
  name: string;
}
