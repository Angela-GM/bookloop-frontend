"use client";

import Link from "next/link";
import { H2Title } from "../atoms/h2-title";
import { SectionContainer } from "../atoms/section-container";
import { IoMdArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { getAllBooks } from "@/src/services/books.service";
import { Book } from "@/src/types/books";
import { CardBook } from "../molecules/card-book";

export const TopBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks(1, 10);
        setBooks(data.data || data);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    console.log("Books state updated:", books);
  }, [books]);

  return (
    <section className="py-16">
      <SectionContainer>
        <section className="flex justify-between">
          <div>
            <H2Title>Libros destacados</H2Title>
            <p className="text-muted-foreground">
              Los más buscados de nuestra comunidad lectora
            </p>
          </div>
          <Link
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 group"
            href={"/catalog"}
          >
            Ver todos <IoMdArrowForward />
          </Link>
        </section>

        <section className="mt-8">
          {loading ? (
            <p className="text-center text-muted-foreground">
              Cargando libros...
            </p>
          ) : books.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {books.map((book: Book) => (
                <CardBook
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  genre={book.description}
                  condition={book.condition as "NEW" | "GOOD" | "FAIR" | "POOR"}
                  price={book.price}
                  image={book.imageUrl || ""}
                  location={book.location}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">
              No hay libros disponibles
            </p>
          )}
        </section>
      </SectionContainer>
    </section>
  );
};
