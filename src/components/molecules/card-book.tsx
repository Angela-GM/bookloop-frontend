"use client";

import { Book } from "@/src/types/books";
import React from "react";
import { ImageCompo } from "../atoms/image-compo";

interface CardBookProps {
  book: Book;
}

export const CardBook = ({ book }: CardBookProps) => {
  return (
    <div key={book.id} className="flex flex-col">
      <div className="aspect-[3/4] bg-gradient-to-br from-book-page to-muted rounded-t-lg flex items-center justify-center overflow-hidden">
        {book.imageUrl && (
          <ImageCompo
            routeImage={book.imageUrl}
            classAlternative="object-cover w-full h-full"
            width={40}
            height={40}
          />
        )}
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-sm line-clamp-2">{book.title}</h3>
        <p className="text-xs text-muted-foreground">{book.author}</p>
      </div>
    </div>
  );
};
