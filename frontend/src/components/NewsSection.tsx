import CardSlider from "./CardSlider";

const NewsCard = ({image, title, description}: { image: string; title: string; description: string }) => {
    return (
        <div className="rounded-base flex flex-col border bg-gray-200 border-gray-200 h-full">
            <img
                src={image}
                alt={title}
                className="w-full h-[322px] object-cover"
            />
            <div className="flex text-left  px-5 flex-col">
                <h3 className="font-bold text-xl sm:text-2xl uppercase text-primary">{title}</h3>
                <p className="text-md sm:text-lg my-8 text-primary">{description}</p>
            </div>
        </div>
    );
};

const NewsSection = () => {
    const cards = [
        {
            image: "./investor-protection-img/img-1.png",
            title: "ESMA закрыла незаконную криптобиржу, работавшую в Чехии: ",
            description: "Платформа действовала без лицензии и нарушала нормативы ЕС. Регулятор передал информацию в компетентные органы для возврата активов пострадавшим."
        },
        {
            image: "./investor-protection-img/img-1.png",
            title: "ESMA раскрыла деятельность мошеннической платформы в Украине:",
            description: "Нелегальный брокер был заблокирован, а деятельность прекращена. Пострадавшим инвесторам инициирована процедура возврата средств. Первые 2000 людей уже вернули свои средства благодаря ESMA."
        },
        {
            image: "./investor-protection-img/img-1.png",
            title: "ESMA выявила международную сеть инвестиционного мошенничества:",
            description: "В результате совместных действий с национальными регуляторами и плотным сотрудничеством киберполиций стран Европы , удалось заблокировать счета и вернуть более 4,5 млн евро инвесторам."
        },
        {
            image: "./investor-protection-img/img-1.png",
            title: "ESMA прекратила деятельность ряда нелицензированных брокеров в ЕС",
            description: "Регулятор пресёк деятельность, нарушавшую права инвесторов, и инициировал возврат более 4 500 000 евро. Сотни инвесторов уже начали получать компенсации благодаря координации действий ESMA."
        }
    ];

    return (
        <section className="relative mt-10 mb-20 w-full">
            <div className="container relative z-20 p-10">
                <div className="block sm:hidden">
                    <CardSlider itemsPerSlide={{ mobile: 1, tablet: 2, desktop: 2 }}>
                        {cards.map((card, index) => (
                            <NewsCard
                                key={index}
                                image={card.image}
                                title={card.title}
                                description={card.description}
                            />
                        ))}
                    </CardSlider>
                </div>

                <div className="hidden grid-cols-1 sm:grid sm:grid-cols-2 gap-6">
                    {cards.map((card, index) => (
                        <NewsCard
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

export default NewsSection;