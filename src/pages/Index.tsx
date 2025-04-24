
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Cpu, BarChart2, Newspaper, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import NewsCard, { NewsItem } from "@/components/home/NewsCard";
import ProcessorCard, { Processor } from "@/components/home/ProcessorCard";

// Временные данные для демонстрации
const latestNews: NewsItem[] = [
  {
    id: "1",
    title: "Intel анонсировал новое поколение процессоров Core 14-го поколения",
    description: "Компания Intel представила процессоры Core 14-го поколения с улучшенной производительностью и энергоэффективностью. Новинки получили до 24 ядер и поддержку технологии Intel Thread Director 2.0.",
    date: "15.10.2023",
    image: "/placeholder.svg",
    category: "Анонс",
    url: "/news/intel-14-gen"
  },
  {
    id: "2",
    title: "AMD выпускает Ryzen 9000 с архитектурой Zen 5",
    description: "AMD представила новую линейку процессоров Ryzen 9000 на базе архитектуры Zen 5. Флагман Ryzen 9 9950X получил 16 ядер, 32 потока и базовую частоту 4.5 ГГц.",
    date: "12.10.2023",
    image: "/placeholder.svg",
    category: "Новинка",
    url: "/news/amd-ryzen-9000"
  },
  {
    id: "3",
    title: "Обзор производительности Intel Core i9-13900K в современных играх",
    description: "Мы провели тестирование флагманского процессора Intel Core i9-13900K в современных играх и сравнили его с конкурентами. Результаты впечатляют!",
    date: "10.10.2023",
    image: "/placeholder.svg",
    category: "Обзор",
    url: "/news/intel-13900k-review"
  }
];

const popularProcessors: Processor[] = [
  {
    id: "1",
    name: "Intel Core i7-13700K",
    manufacturer: "Intel",
    cores: 16,
    threads: 24,
    frequency: "3.4 GHz",
    boost: "5.4 GHz",
    socket: "LGA 1700",
    tdp: 125,
    price: 38999,
    image: "/placeholder.svg",
    url: "/processors/intel/i7-13700k",
    isNew: true
  },
  {
    id: "2",
    name: "AMD Ryzen 7 7800X3D",
    manufacturer: "AMD",
    cores: 8,
    threads: 16,
    frequency: "4.2 GHz",
    boost: "5.0 GHz",
    socket: "AM5",
    tdp: 120,
    price: 42499,
    image: "/placeholder.svg",
    url: "/processors/amd/ryzen-7-7800x3d",
    isNew: true
  },
  {
    id: "3",
    name: "Intel Core i5-13600K",
    manufacturer: "Intel",
    cores: 14,
    threads: 20,
    frequency: "3.5 GHz",
    boost: "5.1 GHz",
    socket: "LGA 1700",
    tdp: 125,
    price: 29999,
    image: "/placeholder.svg",
    url: "/processors/intel/i5-13600k"
  }
];

const Index = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Всё о процессорах на Binary CPU</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Новости, обзоры, сравнения и рекомендации по выбору процессоров для ваших задач
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/processors">Смотреть все процессоры</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <Link to="/compare">Сравнить процессоры</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Быстрый доступ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Cpu className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-medium mb-2">Процессоры</h3>
                <p className="text-muted-foreground text-sm mb-4">Каталог процессоров Intel, AMD и других производителей</p>
                <Button variant="outline" asChild size="sm">
                  <Link to="/processors">Перейти</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <BarChart2 className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-medium mb-2">Сравнения</h3>
                <p className="text-muted-foreground text-sm mb-4">Сравнение характеристик и производительности процессоров</p>
                <Button variant="outline" asChild size="sm">
                  <Link to="/compare">Перейти</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Newspaper className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-medium mb-2">Новости</h3>
                <p className="text-muted-foreground text-sm mb-4">Последние новости из мира процессоров и технологий</p>
                <Button variant="outline" asChild size="sm">
                  <Link to="/news">Перейти</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <BookOpen className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-lg font-medium mb-2">База знаний</h3>
                <p className="text-muted-foreground text-sm mb-4">Полезные статьи, термины и ответы на вопросы</p>
                <Button variant="outline" asChild size="sm">
                  <Link to="/knowledge">Перейти</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Последние новости</h2>
            <Button variant="link" asChild>
              <Link to="/news" className="flex items-center">
                Все новости <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Processors Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Популярные процессоры</h2>
            <Button variant="link" asChild>
              <Link to="/processors" className="flex items-center">
                Все процессоры <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-6">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="intel">Intel</TabsTrigger>
              <TabsTrigger value="amd">AMD</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularProcessors.map((processor) => (
                  <ProcessorCard key={processor.id} processor={processor} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="intel">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularProcessors
                  .filter((p) => p.manufacturer === 'Intel')
                  .map((processor) => (
                    <ProcessorCard key={processor.id} processor={processor} />
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="amd">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularProcessors
                  .filter((p) => p.manufacturer === 'AMD')
                  .map((processor) => (
                    <ProcessorCard key={processor.id} processor={processor} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Подпишитесь на новости</h2>
            <p className="text-muted-foreground mb-6">
              Получайте последние новости и обзоры прямо на вашу почту
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Введите email" 
                className="px-4 py-2 rounded-md flex-1 border"
              />
              <Button>Подписаться</Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
