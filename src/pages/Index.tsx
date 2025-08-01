import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const giftCards = [
    {
      id: 1,
      title: "Apple Gift Card",
      price: "От 500₽ до 75 000₽",
      image: "/img/d5de612d-45cf-42ca-bcbf-f77eac167c4f.jpg",
      description: "Универсальная карта для покупок в App Store, iTunes и Apple Store",
      popular: true
    },
    {
      id: 2,
      title: "App Store & iTunes",
      price: "От 100₽ до 50 000₽",
      image: "/img/b75747b3-228a-4e10-89ab-d3c914cb93da.jpg",
      description: "Для покупок приложений, игр, музыки и фильмов"
    },
    {
      id: 3,
      title: "Apple Store Gift Card",
      price: "От 1 000₽ до 100 000₽",
      image: "/img/e10bad35-07e6-4d5a-8dcb-59198c5c4bc4.jpg",
      description: "Для покупки продуктов Apple: iPhone, Mac, iPad и аксессуаров"
    }
  ];

  const benefits = [
    {
      icon: "Shield",
      title: "Безопасные платежи",
      description: "SSL-шифрование и защита данных"
    },
    {
      icon: "Clock",
      title: "Мгновенная доставка",
      description: "Получайте код сразу после оплаты"
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Помощь в любое время"
    },
    {
      icon: "CheckCircle",
      title: "Гарантия активации",
      description: "100% рабочие карты или возврат средств"
    }
  ];

  const faqItems = [
    {
      question: "Как активировать Apple Gift Card?",
      answer: "1. Откройте App Store или iTunes\n2. Нажмите на свой профиль\n3. Выберите 'Погасить подарочную карту'\n4. Введите код с карты или отсканируйте камерой\n5. Нажмите 'Готово'"
    },
    {
      question: "В каких странах работают карты?",
      answer: "Наши карты работают в России, Казахстане, Беларуси и других странах СНГ. Убедитесь, что ваш Apple ID зарегистрирован в соответствующем регионе."
    },
    {
      question: "Есть ли срок действия у карт?",
      answer: "Apple Gift Card не имеют срока действия. Средства остаются на вашем аккаунте до тех пор, пока вы их не потратите."
    },
    {
      question: "Можно ли вернуть карту?",
      answer: "Возврат возможен только в случае технических проблем с активацией карты. Обратитесь в поддержку в течение 24 часов после покупки."
    },
    {
      question: "Как проверить баланс карты?",
      answer: "Баланс можно проверить в настройках Apple ID в разделе 'Платежи и доставка' или в App Store в разделе аккаунта."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Gift" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">Apple Gift Cards</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#catalog" className="text-muted-foreground hover:text-foreground transition-colors">Каталог</a>
              <a href="#activation" className="text-muted-foreground hover:text-foreground transition-colors">Активация</a>
              <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
              <a href="#contacts" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Apple Gift Cards
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Покупайте приложения, игры, музыку и устройства Apple. 
            Мгновенная доставка кода после оплаты.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Icon name="Shield" size={16} className="mr-2" />
              Безопасно
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Icon name="Zap" size={16} className="mr-2" />
              Мгновенно
            </Badge>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              <Icon name="CheckCircle" size={16} className="mr-2" />
              Гарантия
            </Badge>
          </div>
        </div>
      </section>

      {/* Gift Cards Catalog */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Каталог подарочных карт</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {giftCards.map((card) => (
              <Card key={card.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                {card.popular && (
                  <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground">
                    Популярно
                  </Badge>
                )}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-accent">
                    {card.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{card.description}</p>
                  <Button className="w-full" size="lg">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Купить сейчас
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={benefit.icon as any} size={32} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activation Instructions */}
      <section id="activation" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">Как активировать карту</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Откройте App Store или iTunes</h4>
                      <p className="text-muted-foreground">На вашем iPhone, iPad, Mac или PC</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Найдите раздел "Погасить"</h4>
                      <p className="text-muted-foreground">В настройках аккаунта или в меню</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Введите код</h4>
                      <p className="text-muted-foreground">Вручную или отсканируйте камерой</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Готово!</h4>
                      <p className="text-muted-foreground">Средства поступили на ваш Apple ID</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted/40 rounded-2xl p-8">
                <div className="bg-background rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Icon name="Info" size={20} className="mr-2 text-accent" />
                    Важная информация
                  </h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Карты работают только в регионе покупки</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Код активируется только один раз</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Средства не имеют срока действия</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Можно комбинировать с другими картами</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground whitespace-pre-line">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">Нужна помощь?</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь с нами любым удобным способом
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="text-center">
                  <Icon name="MessageCircle" size={32} className="text-accent mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Онлайн-чат</h4>
                  <p className="text-muted-foreground mb-4">Ответим в течение 5 минут</p>
                  <Button variant="outline">Начать чат</Button>
                </div>
              </Card>
              <Card className="p-6">
                <div className="text-center">
                  <Icon name="Mail" size={32} className="text-accent mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Email</h4>
                  <p className="text-muted-foreground mb-4">support@applegift.ru</p>
                  <Button variant="outline">Написать</Button>
                </div>
              </Card>
              <Card className="p-6">
                <div className="text-center">
                  <Icon name="Phone" size={32} className="text-accent mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Телефон</h4>
                  <p className="text-muted-foreground mb-4">8 (800) 123-45-67</p>
                  <Button variant="outline">Позвонить</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Gift" size={28} />
              <h4 className="text-xl font-bold">Apple Gift Cards</h4>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Официальные подарочные карты Apple с мгновенной доставкой
            </p>
            <div className="flex justify-center space-x-6 text-sm text-primary-foreground/60">
              <span>© 2024 Apple Gift Cards</span>
              <span>•</span>
              <a href="#" className="hover:text-primary-foreground transition-colors">Политика конфиденциальности</a>
              <span>•</span>
              <a href="#" className="hover:text-primary-foreground transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;