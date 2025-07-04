import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "SAMIK Pro X1",
      price: "45,000",
      retailPrice: "55,000",
      image: "/img/cf8ec966-20ce-4acb-b124-413ce310524b.jpg",
      specs: {
        power: "500W",
        battery: "48V 12Ah",
        speed: "25 км/ч",
        range: "45 км",
      },
      features: ["Складной", "LED-дисплей", "Амортизация"],
    },
    {
      id: 2,
      name: "SAMIK City E2",
      price: "35,000",
      retailPrice: "42,000",
      image: "/img/fd1aeb40-ba71-4794-9688-26a069514b34.jpg",
      specs: {
        power: "350W",
        battery: "36V 10Ah",
        speed: "20 км/ч",
        range: "35 км",
      },
      features: ["Легкий", "Bluetooth", "Мобильное приложение"],
    },
    {
      id: 3,
      name: "SAMIK Sport Z3",
      price: "65,000",
      retailPrice: "78,000",
      image: "/img/bcde9eec-f063-473c-9688-008435236de3.jpg",
      specs: {
        power: "800W",
        battery: "52V 15Ah",
        speed: "35 км/ч",
        range: "60 км",
      },
      features: ["Внедорожный", "Двойная подвеска", "Защита IP65"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-blue-600" size={28} />
              <h1 className="text-2xl font-bold text-gray-900">SAMIK</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#catalog"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Магазин
              </a>
              <a
                href="#wholesale"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Опт
              </a>
              <a
                href="#service"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Гарантия
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                О нас
              </a>
              <a
                href="#contacts"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/20 text-white mb-4">
                Новинка 2024
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Электротранспорт
                <span className="block text-blue-200">нового поколения</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                Современные электросамокаты SAMIK с передовыми технологиями,
                надежностью и стилем
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50"
                >
                  Смотреть каталог
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10"
                >
                  Условия для дилеров
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <img
                  src="/img/cf8ec966-20ce-4acb-b124-413ce310524b.jpg"
                  alt="SAMIK Electric Scooter"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Почему выбирают SAMIK
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Передовые технологии и качество в каждом электросамокате
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Battery" className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Долговечные батареи
              </h4>
              <p className="text-gray-600">
                Литий-ионные аккумуляторы с увеличенным сроком службы
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Гарантия качества</h4>
              <p className="text-gray-600">
                2 года гарантии и сервисные центры по всей России
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="text-white" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-gray-600">
                Доставка по всей России в течение 3-5 дней
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Каталог продукции
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выберите модель, которая подходит именно вам
            </p>
          </div>

          <Tabs defaultValue="retail" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="retail">Розничные цены</TabsTrigger>
              <TabsTrigger value="wholesale">Оптовые цены</TabsTrigger>
            </TabsList>

            <TabsContent value="retail">
              <div className="grid lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    className="hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <CardHeader>
                      <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <CardDescription className="text-2xl font-bold text-blue-600">
                        {product.retailPrice} ₽
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Мощность</p>
                          <p className="font-semibold">{product.specs.power}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Батарея</p>
                          <p className="font-semibold">
                            {product.specs.battery}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Скорость</p>
                          <p className="font-semibold">{product.specs.speed}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Дальность</p>
                          <p className="font-semibold">{product.specs.range}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.features.map((feature, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />В
                        корзину
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="wholesale">
              <div className="grid lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-blue-200"
                  >
                    <CardHeader>
                      <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <CardDescription className="space-y-1">
                        <div className="text-2xl font-bold text-blue-600">
                          {product.price} ₽
                        </div>
                        <div className="text-sm text-gray-500 line-through">
                          Розница: {product.retailPrice} ₽
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-gray-600">Мощность</p>
                          <p className="font-semibold">{product.specs.power}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Батарея</p>
                          <p className="font-semibold">
                            {product.specs.battery}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Скорость</p>
                          <p className="font-semibold">{product.specs.speed}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Дальность</p>
                          <p className="font-semibold">{product.specs.range}</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 mb-4">
                        Скидка{" "}
                        {Math.round(
                          ((parseInt(product.retailPrice.replace(",", "")) -
                            parseInt(product.price.replace(",", ""))) /
                            parseInt(product.retailPrice.replace(",", ""))) *
                            100,
                        )}
                        %
                      </Badge>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <Icon name="Building" size={16} className="mr-2" />
                        Заказать оптом
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Wholesale Section */}
      <section id="wholesale" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Стать дилером SAMIK
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Присоединяйтесь к нашей дилерской сети и получите доступ к
                эксклюзивным условиям
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-blue-600" size={20} />
                  <span>Скидки до 25% на всю продукцию</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-blue-600" size={20} />
                  <span>Маркетинговая поддержка</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-blue-600" size={20} />
                  <span>Обучение персонала</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Check" className="text-blue-600" size={20} />
                  <span>Приоритетные поставки</span>
                </div>
              </div>
              <Button size="lg" className="mt-8 bg-blue-600 hover:bg-blue-700">
                Подать заявку на дилерство
              </Button>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="text-xl font-semibold mb-6">Условия дилерства</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Минимальный заказ</span>
                  <span className="font-semibold">10 единиц</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Скидка</span>
                  <span className="font-semibold text-green-600">15-25%</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Отсрочка платежа</span>
                  <span className="font-semibold">до 30 дней</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Доставка</span>
                  <span className="font-semibold">Бесплатно</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Гарантия</span>
                  <span className="font-semibold">2 года</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Section */}
      <section id="service" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Сервис и гарантия
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Полное гарантийное и постгарантийное обслуживание
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wrench" className="text-blue-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Техобслуживание</h4>
              <p className="text-gray-600">
                Регулярное ТО для максимальной производительности
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" className="text-blue-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Замена батареи</h4>
              <p className="text-gray-600">
                Оригинальные батареи с гарантией качества
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Settings" className="text-blue-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Диагностика</h4>
              <p className="text-gray-600">
                Профессиональная диагностика всех систем
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Package" className="text-blue-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Запчасти</h4>
              <p className="text-gray-600">Оригинальные запчасти в наличии</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="text-blue-400" size={24} />
                <h5 className="text-xl font-bold">SAMIK</h5>
              </div>
              <p className="text-gray-400">
                Электротранспорт нового поколения для современной жизни
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Продукция</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Электросамокаты</li>
                <li>Запчасти</li>
                <li>Аксессуары</li>
                <li>Сервис</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Партнерам</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Дилерство</li>
                <li>Оптовые цены</li>
                <li>Маркетинг</li>
                <li>Обучение</li>
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Контакты</h6>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (800) 123-45-67</li>
                <li>info@samik.ru</li>
                <li>Москва, ул. Тверская, 1</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SAMIK. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
