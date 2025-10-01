export const EndSection = ({ onOpenModal }: { onOpenModal: (title?: string) => void }) => {
    return (
        <section className="relative w-full py-10">
            <div className="relative container">
                <div className='bg-[#0278F6] rounded-lg p-5 md:p-24 max-w-7xl relative'>
                    <h1 className='font-bold uppercase text-white text-xl sm:text-3xl leading-tight mb-8 max-w-4xl'>
                        ESMA — это не просто структура. Это щит, за которым стоят профессионалы, верящие, что справедливость в финансах — не абстракция, а ежедневная работа, от которой зависит будущее каждого европейца.
                    </h1>

                    <div className="text-white text-sm sm:text-lg max-w-4xl mb-10">
                        <p>Возвращено более 920 миллионов евро пострадавшим инвесторам по всей Европе.</p>
                        <p>Обнаружено и разоблачено более 3000 мошеннических брокеров и псевдоплатформ.</p>
                        <p>Мы сотрудничаем с финансовыми омбудсменами, банками и киберполициями стран ЕС для эффективного пресечения финансового мошенничества.</p>
                        <p>Если вы стали жертвой обмана — не молчите. Даже если кажется, что всё потеряно — это может стать началом пути к восстановлению и возврату средств.</p>
                    </div>

                    <button
                        onClick={() => onOpenModal("Подать заявку на возврат средств")}
                        className='font-bold bg-white text-black py-4 px-4 sm:px-16 rounded-base border border-black hover:bg-gray-100 transition-colors'>
                        Подать заявку на возврат средств
                    </button>
                </div>
                <img
                    src="./end-section-img.png"
                    alt="ESMA professionals"
                    className='hidden sm:block absolute -bottom-32 right-0 w-[500px] h-[333px] object-cover rounded-br-lg'
                />
            </div>
        </section>
    )
}