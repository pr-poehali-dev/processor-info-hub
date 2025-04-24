
import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { Search, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b sticky top-0 z-50 w-full bg-background">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
            <span className="text-primary">Binary</span>
            <span className="text-primary">CPU</span>
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className={navigationMenuTriggerStyle()}>
                    Главная
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Процессоры</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <NavigationMenuLink asChild>
                      <Link to="/processors/intel" className="block p-3 hover:bg-accent rounded-md">
                        Intel
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/processors/amd" className="block p-3 hover:bg-accent rounded-md">
                        AMD
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to="/processors/others" className="block p-3 hover:bg-accent rounded-md">
                        Другие производители
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/compare" className={navigationMenuTriggerStyle()}>
                    Сравнения
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/news" className={navigationMenuTriggerStyle()}>
                    Новости
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/articles" className={navigationMenuTriggerStyle()}>
                    Статьи
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/knowledge" className={navigationMenuTriggerStyle()}>
                    База знаний
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/market" className={navigationMenuTriggerStyle()}>
                    Binary Market
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-secondary py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Binary CPU</h3>
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
                <li><Link to="/market" className="text-muted-foreground hover:text-primary">Binary Market</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Свяжитесь с нами</h3>
              <p className="text-muted-foreground">info@binarycpu.ru</p>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-secondary-foreground/20 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Binary CPU. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
