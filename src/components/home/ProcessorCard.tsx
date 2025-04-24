
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export interface Processor {
  id: string;
  name: string;
  manufacturer: 'Intel' | 'AMD' | 'Other';
  cores: number;
  threads: number;
  frequency: string;
  boost?: string;
  socket: string;
  tdp: number;
  price?: number;
  image?: string;
  url: string;
  isNew?: boolean;
}

interface ProcessorCardProps {
  processor: Processor;
}

const ProcessorCard = ({ processor }: ProcessorCardProps) => {
  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-300">
      <CardHeader className="relative pb-0">
        {processor.isNew && (
          <Badge className="absolute top-2 right-2" variant="default">
            Новинка
          </Badge>
        )}
        <div className="flex justify-center py-2">
          <img 
            src={processor.image || "/placeholder.svg"} 
            alt={processor.name} 
            className="h-24 object-contain"
          />
        </div>
        <CardTitle className="text-base mt-2 line-clamp-2">
          <Link to={processor.url} className="hover:text-primary transition-colors">
            {processor.name}
          </Link>
        </CardTitle>
        <CardDescription className="flex items-center justify-center mt-1">
          <Badge variant={processor.manufacturer === 'Intel' ? "secondary" : "default"} className="mr-2">
            {processor.manufacturer}
          </Badge>
          <span className="text-xs text-muted-foreground">Сокет {processor.socket}</span>
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-4">
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex flex-col">
            <span className="text-muted-foreground">Ядра/Потоки</span>
            <span className="font-medium">{processor.cores}/{processor.threads}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Частота</span>
            <span className="font-medium">{processor.frequency}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">Буст</span>
            <span className="font-medium">{processor.boost || "N/A"}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-muted-foreground">TDP</span>
            <span className="font-medium">{processor.tdp} Вт</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-2 border-t">
        {processor.price ? (
          <span className="font-bold text-lg">{processor.price.toLocaleString()} ₽</span>
        ) : (
          <span className="text-muted-foreground">Цена не указана</span>
        )}
        <Button variant="ghost" size="sm" asChild>
          <Link to={processor.url}>
            Подробнее <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProcessorCard;
