import { ImageCompo } from "../atoms/image-compo";

export const SearchBar = () => {
  return (
    <form className="hidden md:block">
      <label id="search" className="block relative rounded-md left-20">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <ImageCompo routeImage={"/search-icon.svg"} width={16} height={16} />
        </span>
        <input
          type="search"
          name="search"
          className="outline-1 outline-input text-foreground bg-background rounded-md py-2 pr-4 w-60 lg:w-100 pl-8 placeholder:text-muted-foreground"
          placeholder="Buscar libros, autores, géneros..."
        />
      </label>
    </form>
  );
};
