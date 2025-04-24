
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b sticky top-0 z-50 w-full bg-background">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-foreground">
            <span className="font-black">Binary Epoch</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="flex items-center">
            <div className="flex items-center space-x-8 mr-8">
              <Link to="/processors" className="text-foreground font-medium hover:text-primary transition-colors">
                Процессоры
              </Link>
              <Link to="/compare" className="text-foreground font-medium hover:text-primary transition-colors">
                Сравнения
              </Link>
              <Link to="/news" className="text-foreground font-medium hover:text-primary transition-colors">
                Новости
              </Link>
              <Link to="/contacts" className="text-foreground font-medium hover:text-primary transition-colors">
                Контакты
              </Link>
            </div>
            
            {/* Burger menu icon always visible */}
            <Button 
              variant="ghost" 
              size="icon" 
              className=""
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t">
            <div className="container mx-auto py-4 space-y-4">
              <Link 
                to="/processors" 
                className="block text-foreground font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Процессоры
              </Link>
              <Link 
                to="/compare" 
                className="block text-foreground font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Сравнения
              </Link>
              <Link 
                to="/news" 
                className="block text-foreground font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Новости
              </Link>
              <Link 
                to="/contacts" 
                className="block text-foreground font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-secondary py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Binary Epoch</h3>
              <p className="text-muted-foreground">
                Ваш источник информации о процессорах и компьютерных технологиях
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-muted-foreground hover:text-primary">Главная</Link></li>
                <li><Link to="/processors" className="text-muted-foreground hover:text-primary">Процессоры</Link></li>
                <li><Link to="/compare" className="text-muted-foreground hover:text-primary">Сравнения</Link></li>
                <li><Link to="/news" className="text-muted-foreground hover:text-primary">Новости</Link></li>
                <li><Link to="/contacts" className="text-muted-foreground hover:text-primary">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Свяжитесь с нами</h3>
              <p className="text-muted-foreground">info@binaryepoch.ru</p>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-secondary-foreground/20 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Binary Epoch. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
