import CardSlider from './CardSlider';

const TrustCard = ({title, description}: { title: string; description: string }) => {
    return (
        <div className="rounded-base flex flex-col border h-full">
            <div className="flex text-center py-5 flex-col space-y-2">
                <h3 className="font-bold text-lg uppercase text-primary">{title}</h3>
                <p className="text-lg text-primary">{description}</p>
            </div>
        </div>
    );
};

const TrustSection = () => {
    const cards = [
        {
            title: "Защита от финансовых мошенников",
            description: "Мы расследуем жалобы на недобросовестных брокеров и содействуем возврату утраченных средств."
        },
        {
            title: "Надзор за финансовыми рынками",
            description: "ESMA следит за соблюдением стандартов и регулирует деятельность участников рынков в ЕС."
        },
        {
            title: "Правовая поддержка инвесторов",
            description: "Консультируем пострадавших и направляем обращения в соответствующие органы для восстановления справедливости."
        },
        {
            title: "Честность и финансовая справедливость",
            description: "Если вы стали жертвой финансового мошенничества — мы поможем начать процесс возврата средств."
        },
        {
            title: "Защита от финансовых мошенников",
            description: "Мы расследуем жалобы на недобросовестных брокеров и содействуем возврату утраченных средств."
        },
        {
            title: "Надзор за финансовыми рынками",
            description: "ESMA следит за соблюдением стандартов и регулирует деятельность участников рынков в ЕС."
        },
        {
            title: "Правовая поддержка инвесторов",
            description: "Консультируем пострадавших и направляем обращения в соответствующие органы для восстановления справедливости."
        },
        {
            title: "Честность и финансовая справедливость",
            description: "Если вы стали жертвой финансового мошенничества — мы поможем начать процесс возврата средств."
        }
    ];

    return (
        <section className="relative my-10 w-full bg-gray-100">
            <div className="container relative z-20 p-10">
                <h1 className="text-primary uppercase text-2xl sm:text-5xl border-b-2 border-gray-300 pb-5 mb-10">
                    Почему нам доверяют инвесторы в Европе?
                </h1>

                <div className="block md:hidden">
                    <CardSlider itemsPerSlide={{ mobile: 1, tablet: 2, desktop: 4 }}>
                        {cards.map((card, index) => (
                            <TrustCard
                                key={index}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </CardSlider>
                </div>

                <div className="hidden grid-cols-2 md:grid lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <TrustCard
                            key={index}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;