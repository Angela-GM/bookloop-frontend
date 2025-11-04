import { ImageCompo } from "../atoms/image-compo";
import { Badge } from "../atoms/badge";
import { Card, CardContent } from "../atoms/card";
import { FaRegHeart } from "react-icons/fa";
import { LuCoins, LuMessageCircle } from "react-icons/lu";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  genre: string;
  condition: "NEW" | "GOOD" | "FAIR" | "POOR";
  price: number;
  image?: string;
  userRating?: number;
  location?: string;
}

export const CardBook = ({
  title,
  author,
  genre,
  condition,
  price,
  image,
  userRating,
  location,
}: BookCardProps) => {
  const conditionColors: Record<string, string> = {
    NEW: "bg-green-100 text-green-800",
    GOOD: "bg-yellow-100 text-yellow-800",
    FAIR: "bg-orange-100 text-orange-800",
    POOR: "bg-red-100 text-red-800",
  };

  const conditionLabels: Record<string, string> = {
    NEW: "Nuevo",
    GOOD: "Bueno",
    FAIR: "Regular",
    POOR: "Malo",
  };

  return (
    <Card className="group hover:shadow-book transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-card">
      <div className="relative">
        {/* Book cover placeholder */}
        <div className="aspect-[3/4] bg-gradient-to-br from-book-page to-muted rounded-t-lg flex items-center justify-center overflow-hidden">
          {image ? (
            <ImageCompo
              routeImage={image}
              classAlternative="w-full h-full object-cover"
              height={0}
              width={0}
            />
          ) : (
            <div className="text-center p-4">
              <div className="text-4xl mb-2">📚</div>
              <div className="text-sm font-medium text-muted-foreground line-clamp-2">
                {title}
              </div>
            </div>
          )}
        </div>

        {/* Favorite button */}
        <button
          className="absolute top-2 right-2 p-2 rounded-lg bg-white/80 hover:bg-white transition-colors shadow-sm"
          onClick={() => {
            // TODO: Implementar funcionalidad de favoritos
            console.log("Favorito clickeado");
          }}
        >
          <FaRegHeart className="corazon text-red-500 w-4 h-4" />
        </button>

        {/* Condition badge */}
        <Badge
          className={`absolute top-2 left-2 ${conditionColors[condition]}`}
          variant="secondary"
        >
          {conditionLabels[condition]}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Title and author */}
          <div>
            <h3 className="font-semibold text-foreground line-clamp-2 mb-1">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{author}</p>
          </div>

          {/* Genre and location */}
          <div className="flex items-center justify-between text-xs flex-wrap gap-1">
            <Badge variant="outline" className="text-xs">
              {genre}
            </Badge>
            {location && (
              <span className="text-foreground/70 text-xs font-medium">📍 {location}</span>
            )}
          </div>

          {/* User rating */}
          {userRating && (
            <div className="flex items-center text-xs text-muted-foreground">
              <span className="mr-1">⭐</span>
              <span>{userRating}/5 vendedor</span>
            </div>
          )}

          {/* Price and actions */}
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center space-x-1">
              <LuCoins className="text-coin text-md leading-none" />{" "}
              <span className="font-semibold text-coin-foreground">
                {price} Bookis
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button 
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => {
                  // TODO: Implementar chat
                  console.log('Chat clickeado');
                }}
              >
                <LuMessageCircle className="h-5 w-5 text-muted-foreground" />
              </button>
              <button
                className="px-4 py-1.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium text-sm"
                onClick={() => {
                  // TODO: Implementar obtener
                  console.log('Obtener clickeado');
                }}
              >
                Obtener
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
