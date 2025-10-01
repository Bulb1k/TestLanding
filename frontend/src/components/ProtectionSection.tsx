import CardSlider from "./CardSlider.tsx";

const ProtectionCard = ({image, title, description}: { image: string; title: string; description: string }) => {
    return (
        <div className="rounded-base flex flex-col border border-gray-200 h-full">
            <img
                src={image}
                alt={title}
                className="w-full h-[322px] object-cover"
            />
            <div className="flex text-center py-5 flex-col px-2 space-y-2">
                <h3 className="font-bold text-lg uppercase text-primary">{title}</h3>
                <p className="text-lg text-primary">{description}</p>
            </div>
        </div>
    );
};

const InvestorProtectionSection = () => {
    const cards = [
        {
            image: "./protection-section-img/image.png",
            title: "Защита от финансовых мошенников",
            description: "Мы расследуем жалобы на недобросовестных брокеров и содействуем возврату утраченных средств."
        },
        {
            image: "./protection-section-img/image-1.png",
            title: "Надзор за финансовыми рынками",
            description: "ESMA следит за соблюдением стандартов и регулирует деятельность участников рынков в ЕС."
        },
        {
            image: "./protection-section-img/image-2.png",
            title: "Правовая поддержка инвесторов",
            description: "Консультируем пострадавших и направляем обращения в соответствующие органы для восстановления справедливости."
        },
        {
            image: "./protection-section-img/image-3.png",
            title: "Честность и финансовая справедливость",
            description: "Если вы стали жертвой финансового мошенничества — мы поможем начать процесс возврата средств."
        }
    ];

    return (
        <section className="relative my-10 w-full">
            <div className="container relative z-20 py-10">
                <div className="block lg:hidden">
                    <CardSlider itemsPerSlide={{ mobile: 1, tablet: 2, desktop: 4 }}>
                        {cards.map((card, index) => (
                            <ProtectionCard
                                key={index}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </CardSlider>
                </div>

                <div className="hidden grid-cols-2 lg:grid lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <ProtectionCard
                            key={index}
                            image={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InvestorProtectionSection;