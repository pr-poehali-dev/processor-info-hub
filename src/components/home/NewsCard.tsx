
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CalendarIcon } from "lucide-react";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  category: string;
  url: string;
}

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={news.image || "/placeholder.svg"} 
          alt={news.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-primary px-2 py-1 rounded text-xs text-primary-foreground">
          {news.category}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg line-clamp-2">
          <Link to={news.url} className="hover:text-primary transition-colors">
            {news.title}
          </Link>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {news.description}
        </p>
      </CardContent>
      
      <CardFooter className="pt-2 border-t text-sm text-muted-foreground flex justify-between">
        <div className="flex items-center gap-1">
          <CalendarIcon className="h-4 w-4" />
          <span>{news.date}</span>
        </div>
        <Link to={news.url} className="text-primary hover:underline">
          Читать далее
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
