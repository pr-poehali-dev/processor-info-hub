
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold mt-4 mb-6">Страница не найдена</h2>
        <p className="text-muted-foreground mb-8">
          Извините, страница, которую вы ищете, не существует или была перемещена.
        </p>
        <Button asChild size="lg">
          <Link to="/" className="flex items-center">
            <Home className="mr-2 h-5 w-5" />
            На главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
