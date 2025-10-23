import Link from "next/link";
import { CardSection } from "../atoms/card-section";
import { ImageCompo } from "../atoms/image-compo";
import { FaRegHeart } from "react-icons/fa";

interface BookCardProps {
  id: string;
  title: string;
  author: string;
  genre: string;
  condition: string;
  price: number;
  image?: string;
  userRating?: number;
  location?: string;
}

export const BookCardCopy = ({
  title,
  author,
  genre,
  condition,
  price,
  image,
  userRating,
  location,
}: BookCardProps) => {
  const conditionColors = {
    excellent: "bg-green-100 text-green-800",
    good: "bg-yellow-100 text-yellow-800",
    fair: "bg-orange-100 text-orange-800",
  };

  const conditionLabels = {
    excellent: "Excelente",
    good: "Bueno",
    fair: "Regular",
  };

  return (
    <CardSection>
      <div className="relative">
         {/* Favorite button */}
        <Link
          className="absolute -top-4 -right-8 h-8 w-8 p-0 " href={""}        >
          <FaRegHeart className="h-4 w-4" />
        </Link>
        {/* Book cover placeholder */}
        <div className="aspect-[3/4] bg-gradient-to-br from-book-page to-muted rounded-t-lg flex items-center justify-center overflow-hidden">
          {image ? (
            <ImageCompo
              routeImage={image}
              classAlternative="w-full h-full object-cover"
              width={0}
              height={0}
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

       

        {/* Condition badge */}
        {/* <Badge 
          className={`absolute top-2 left-2 ${conditionColors[condition]}`}
          variant="secondary"
        >
          {conditionLabels[condition]}
        </Badge> */}
      </div>

      <section className="p-4 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Title and author */}
          <div>
            <h3 className="font-semibold text-foreground line-clamp-2 mb-1">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{author}</p>
          </div>

          {/* Genre and location */}
          <div className="flex items-center justify-between text-xs">
            {/* <Badge variant="outline" className="text-xs">
              {genre}
            </Badge> */}
            {location && (
              <span className="text-muted-foreground">📍 {location}</span>
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
              {/* <Coins className="h-4 w-4 text-coin" /> */}
              <span className="font-semibold text-coin-foreground">
                {price} Bookis
              </span>
            </div>

            <div className="flex space-x-1">
              {/* <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MessageCircle className="h-4 w-4" />
              </Button>
              <Button size="sm" className="h-8 px-3 text-xs">
                Obtener
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </CardSection>
  );
};
