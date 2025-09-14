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
      title: "Видео-уроки основ",
      description: "Теория маникюра, анатомия ногтя, подготовка инструментов",
      duration: "8 видео",
      icon: "Play"
    },
    {
      title: "Техники обработки",
      description: "Пошаговые видео аппаратного и комбинированного маникюра",
      duration: "12 уроков", 
      icon: "Settings"
    },
    {
      title: "Покрытие гель-лаком",
      description: "Детальные мастер-классы по нанесению покрытий",
      duration: "15 видео",
      icon: "Palette"
    },
    {
      title: "Дизайн ногтей",
      description: "Креативные техники: френч, градиент, стемпинг, art",
      duration: "20 уроков",
      icon: "Brush"
    },
    {
      title: "Домашние задания",
      description: "Практические задания с проверкой наставника",
      duration: "10 заданий",
      icon: "BookOpen"
    },
    {
      title: "Онлайн консультации",
      description: "Еженедельные вебинары и разбор работ",
      duration: "8 встреч",
      icon: "Video"
    }
  ];

  const tariffs = [
    {
      name: "Базовый онлайн",
      price: "12 000 ₽",
      duration: "1 месяц",
      features: ["30 видео-уроков", "Базовые техники", "Чат с наставником", "Сертификат", "Доступ 6 месяцев"]
    },
    {
      name: "Премиум", 
      price: "24 000 ₽",
      duration: "2 месяца",
      features: ["60+ видео-уроков", "Все техники дизайна", "Личный наставник", "Еженедельные вебинары", "Проверка домашних заданий", "Пожизненный доступ"],
      popular: true
    },
    {
      name: "VIP Мастер",
      price: "45 000 ₽", 
      duration: "3 месяца",
      features: ["Все из Премиум", "Индивидуальные созвоны", "Бизнес-курс", "Помощь в продвижении", "Закрытое комьюнити", "Стажировка в топ-салоне"]
    }
  ];

  const schedule = [
    { day: "1 октября", time: "Старт потока", available: true },
    { day: "15 октября", time: "Старт потока", available: true },
    { day: "1 ноября", time: "Старт потока", available: false },
    { day: "15 ноября", time: "Старт потока", available: true },
    { day: "1 декабря", time: "Старт потока", available: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-amber-200/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/64a672d0-19c7-424f-a7f9-4afb108ebbe7.png" 
                alt="Lion Logo"
                className="w-8 h-8 object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NailArt Academy
            </h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#program" className="text-amber-800 hover:text-primary transition-colors">Программа</a>
            <a href="#tariffs" className="text-amber-800 hover:text-primary transition-colors">Тарифы</a>
            <a href="#schedule" className="text-amber-800 hover:text-primary transition-colors">Расписание</a>
            <a href="#gallery" className="text-amber-800 hover:text-primary transition-colors">Галерея</a>
            <a href="#contacts" className="text-amber-800 hover:text-primary transition-colors">Контакты</a>
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
            🦁 Онлайн обучение премиум класса
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Онлайн курс маникюра с 0
          </h1>
          <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-3xl mx-auto">
            Изучите искусство маникюра не выходя из дома. Индивидуальный подход, практические задания и поддержка наставника 24/7.
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
                <Icon name="Monitor" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-amber-900">Онлайн формат</h3>
              <p className="text-amber-700">Учитесь в удобное время</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-amber-900">Сертификат</h3>
              <p className="text-amber-700">Официальный документ о прохождении</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-amber-900">Личный наставник</h3>
              <p className="text-amber-700">Индивидуальная поддержка</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section id="program" className="py-20 px-4 bg-amber-50/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Программа курса
            </h2>
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Полный онлайн курс от основ до профессионального уровня. Каждый модуль включает видео и практику.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courseModules.map((module, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                    <Icon name={module.icon} className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-amber-900">{module.title}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto border-primary text-primary">
                    {module.duration}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-700 text-center">{module.description}</p>
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
            <p className="text-xl text-amber-800 max-w-2xl mx-auto">
              Выберите подходящий тариф для вашего уровня и целей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  tariff.popular ? 'border-2 border-primary scale-105 bg-gradient-to-b from-white to-amber-50' : 'bg-white/80 backdrop-blur-sm'
                } ${selectedTariff === tariff.name ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setSelectedTariff(tariff.name)}
              >
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white border-0">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-amber-900">{tariff.name}</CardTitle>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {tariff.price}
                  </div>
                  <p className="text-amber-700">{tariff.duration}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {tariff.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Icon name="Check" className="w-5 h-5 text-green-600" />
                      <span className="text-amber-800">{feature}</span>
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
      <section id="schedule" className="py-20 px-4 bg-amber-50/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Старт потоков
            </h2>
            <p className="text-xl text-amber-800">
              Выберите удобную дату для начала обучения
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schedule.map((slot, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-all duration-300 ${
                  slot.available 
                    ? 'bg-white cursor-pointer hover:scale-105 border-green-200' 
                    : 'bg-amber-100 opacity-60'
                }`}
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-amber-900">{slot.day}</h3>
                    <p className="text-amber-700">{slot.time}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {slot.available ? (
                      <>
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          Места есть
                        </Badge>
                        <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                          Забронировать
                        </Button>
                      </>
                    ) : (
                      <Badge variant="secondary">
                        Набор закрыт
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
            <p className="text-xl text-amber-800">
              Работы наших выпускников и примеры техник
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-amber-200">
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

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-amber-200">
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

            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-amber-200">
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
            <p className="text-xl text-amber-800">
              Оставьте заявку и мы свяжемся с вами для записи на обучение
            </p>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm border-amber-200 shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-amber-900">Имя *</Label>
                    <Input id="name" placeholder="Ваше имя" className="border-2 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-amber-900">Телефон *</Label>
                    <Input id="phone" type="tel" placeholder="+7 (900) 000-00-00" className="border-2 focus:border-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-amber-900">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="border-2 focus:border-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tariff" className="text-amber-900">Выбранный тариф</Label>
                  <select className="w-full p-3 border-2 rounded-lg focus:border-primary focus:outline-none text-amber-800">
                    <option value="">Выберите тариф</option>
                    <option value="basic">Базовый онлайн - 12 000 ₽</option>
                    <option value="premium">Премиум - 24 000 ₽</option>
                    <option value="vip">VIP Мастер - 45 000 ₽</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-amber-900">Комментарий</Label>
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

                <p className="text-sm text-amber-600 text-center">
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
              <h3 className="font-semibold text-lg mb-2 text-amber-900">Адрес</h3>
              <p className="text-amber-700">г. Москва, ул. Красная, д. 15</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-amber-900">Телефон</h3>
              <p className="text-amber-700">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-amber-900">Email</h3>
              <p className="text-amber-700">info@nailartacademy.ru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/64a672d0-19c7-424f-a7f9-4afb108ebbe7.png" 
                alt="Lion Logo"
                className="w-8 h-8 object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold">NailArt Academy</h3>
          </div>
          <p className="text-amber-200 mb-6 max-w-2xl mx-auto">
            Онлайн академия нейл-арта премиум класса. Обучаем мастерству с индивидуальным подходом с 2018 года.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-amber-300 hover:text-primary transition-colors">
              <Icon name="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="text-amber-300 hover:text-primary transition-colors">
              <Icon name="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="text-amber-300 hover:text-primary transition-colors">
              <Icon name="Youtube" className="w-6 h-6" />
            </a>
          </div>
          <p className="text-amber-400 text-sm">
            © 2024 NailArt Academy. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}