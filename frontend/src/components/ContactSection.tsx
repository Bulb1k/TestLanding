export const ContactSection = ({ onOpenModal }: { onOpenModal: (title?: string) => void }) => {
    return (
        <section className="relative w-full bg-gray-200">
            <div className="relative container z-20 py-20 flex flex-col space-y-20 items-center text-center">
                <div className="space-y-4 flex flex-col">
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl text-primary font-bold">ESMA — это независимое регулятор Европейского союза</h1>
                    <span className="text-primary text-md sm:text-lg">
                        Мы осуществляем регулирование и надзор за финансовыми рынками и рынками ценных бумаг на территории всего ЕС.
                        <br />Наша цель — обеспечить стабильность, прозрачность и эффективность финансовой системы, а также гарантировать высокий уровень защиты для всех инвесторов.
                        Мы стоим на страже честного финансового будущего Европы.
                    </span>
                </div>
                <button
                    onClick={() => onOpenModal("Получить консультацию от специалиста ESMA бесплатно")}
                    className="max-w-2xl p-5 bg-primary text-white rounded-base text-xl">
                    Получить консультацию от специалиста ESMA бесплатно
                </button>
            </div>
        </section>
    )
}

