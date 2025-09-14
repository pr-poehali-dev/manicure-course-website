import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [selectedTariff, setSelectedTariff] = useState('');

  const courseModules = [
    {
      title: "Основы маникюра",
      description: "Анатомия ногтя, подготовка рабочего места, санитария",
      duration: "4 часа",
      icon: "User"
    },
    {
      title: "Техники обработки",
      description: "Аппаратный и комбинированный маникюр",
      duration: "6 часов", 
      icon: "Settings"
    },
    {
      title: "Покрытие гель-лаком",
      description: "Нанесение базы, цвета, топа. Работа с формами",
      duration: "8 часов",
      icon: "Palette"
    },
    {
      title: "Дизайн ногтей",
      description: "Френч, градиент, стемпинг, рисунки",
      duration: "10 часов",
      icon: "Brush"
    },
    {
      title: "Коррекция и ремонт",
      description: "Исправление недостатков, укрепление ногтей",
      duration: "4 часа",
      icon: "Wrench"
    },
    {
      title: "Практика с моделями",
      description: "Отработка навыков на реальных клиентах",
      duration: "12 часов",
      icon: "Users"
    }
  ];

  const tariffs = [
    {
      name: "Базовый",
      price: "15 000 ₽",
      duration: "2 недели",
      features: ["Основы маникюра", "Покрытие гель-лаком", "Сертификат", "Стартовый набор инструментов"]
    },
    {
      name: "Стандарт", 
      price: "25 000 ₽",
      duration: "3 недели",
      features: ["Все из Базового", "Дизайн ногтей", "Коррекция и ремонт", "Практика с моделями", "Поддержка 3 месяца"],
      popular: true
    },
    {
      name: "Профи",
      price: "35 000 ₽", 
      duration: "4 недели",
      features: ["Все из Стандарт", "Продвинутые техники", "Бизнес-блок", "Помощь в трудоустройстве", "Поддержка 6 месяцев"]
    }
  ];

  const schedule = [
    { day: "Понедельник", time: "10:00 - 14:00", available: true },
    { day: "Среда", time: "14:00 - 18:00", available: true },
    { day: "Пятница", time: "10:00 - 14:00", available: false },
    { day: "Суббота", time: "09:00 - 15:00", available: true },
    { day: "Воскресенье", time: "11:00 - 15:00", available: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-pink-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <Icon name="Sparkles" className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NailArt Pro
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#program" className="text-gray-700 hover:text-primary transition-colors">Программа</a>
            <a href="#tariffs" className="text-gray-700 hover:text-primary transition-colors">Тарифы</a>
            <a href="#schedule" className="text-gray-700 hover:text-primary transition-colors">Расписание</a>
            <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors">Галерея</a>
            <a href="#contacts" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white border-0">
            ⭐ Лучший курс 2024 года
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Маникюр комбинированный с 0
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Освойте профессию мастера маникюра за 2-4 недели. От основ до продвинутых техник. 
            Гарантируем трудоустройство и поддержку после обучения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-4">
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться на курс
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4">
              <Icon name="Play" className="w-5 h-5 mr-2" />
              Смотреть видео
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Быстрое обучение</h3>
              <p className="text-gray-600">От 2 недель до профессионала</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Сертификат</h3>
              <p className="text-gray-600">Официальный документ о прохождении</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Briefcase" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Трудоустройство</h3>
              <p className="text-gray-600">Помощь в поиске работы</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section id="program" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Программа курса
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный курс от основ до профессионального уровня. Каждый модуль включает теорию и практику.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseModules.map((module, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                    <Icon name={module.icon} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{module.title}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto border-primary text-primary">
                    {module.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tariffs */}
      <section id="tariffs" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Тарифы и цены
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий тариф для вашего уровня и целей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  tariff.popular ? 'border-2 border-primary scale-105 bg-gradient-to-b from-white to-pink-50' : 'bg-white/80 backdrop-blur-sm'
                } ${selectedTariff === tariff.name ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setSelectedTariff(tariff.name)}
              >
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white border-0">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">{tariff.name}</CardTitle>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {tariff.price}
                  </div>
                  <p className="text-gray-600">{tariff.duration}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tariff.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Icon name="Check" className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    variant={tariff.popular ? "default" : "outline"}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Расписание занятий
            </h2>
            <p className="text-xl text-gray-600">
              Выберите удобное время для обучения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schedule.map((slot, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-all duration-300 ${
                  slot.available 
                    ? 'bg-white cursor-pointer hover:scale-105 border-green-200' 
                    : 'bg-gray-100 opacity-60'
                }`}
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{slot.day}</h3>
                    <p className="text-gray-600">{slot.time}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {slot.available ? (
                      <>
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          Доступно
                        </Badge>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                          Записаться
                        </Button>
                      </>
                    ) : (
                      <Badge variant="secondary">
                        Занято
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Галерея работ
            </h2>
            <p className="text-xl text-gray-600">
              Работы наших выпускников и примеры техник
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/0d14f846-93b1-463b-9336-55ca11a7d68d.jpg" 
                  alt="Профессиональный дизайн ногтей"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg">Градиентный дизайн</h3>
                    <p className="text-sm">Техника омбре на ногтях</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/a187ec9d-276c-41c6-b6c8-c4b00d4b2d03.jpg" 
                  alt="Различные стили маникюра"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg">Коллекция дизайнов</h3>
                    <p className="text-sm">Разнообразные техники и стили</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/b6754d9d-3239-45fa-a100-66f705bd1920.jpg" 
                  alt="Инструменты для маникюра"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold text-lg">Профессиональные инструменты</h3>
                    <p className="text-sm">Современное оборудование</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contacts" className="py-20 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Запишитесь на курс
            </h2>
            <p className="text-xl text-gray-600">
              Оставьте заявку и мы свяжемся с вами для записи на обучение
            </p>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input id="name" placeholder="Ваше имя" className="border-2 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" type="tel" placeholder="+7 (900) 000-00-00" className="border-2 focus:border-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="border-2 focus:border-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tariff">Выбранный тариф</Label>
                  <select className="w-full p-3 border-2 rounded-lg focus:border-primary focus:outline-none">
                    <option value="">Выберите тариф</option>
                    <option value="basic">Базовый - 15 000 ₽</option>
                    <option value="standard">Стандарт - 25 000 ₽</option>
                    <option value="pro">Профи - 35 000 ₽</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о ваших целях и опыте..."
                    className="border-2 focus:border-primary min-h-[100px]"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6">
                  <Icon name="Send" className="w-5 h-5 mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Адрес</h3>
              <p className="text-gray-600">г. Москва, ул. Красная, д. 15</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-600">info@nailartpro.ru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <Icon name="Sparkles" className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold">NailArt Pro</h3>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Профессиональная школа маникюра. Готовим специалистов высокого уровня с 2015 года.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Icon name="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Icon name="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              <Icon name="Youtube" className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 NailArt Pro. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}