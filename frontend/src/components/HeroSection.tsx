import { useState } from 'react';
import { sendFormData, type FormData } from '../services/formApi';

const HeroSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const apiData: FormData = {
            title: "Сообщите о мошенничестве для начала процедуры возврата средств",
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone: formData.phone
        };

        const success = await sendFormData(apiData);

        setIsSubmitting(false);

        if (success) {
            setSubmitStatus('success');
            setTimeout(() => {
                setFormData({ firstName: '', lastName: '', email: '', phone: '' });
                setSubmitStatus('idle');
            }, 3000);
        } else {
            setSubmitStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="relative w-full">
            <div className="relative container z-20 py-20 flex flex-col lg:flex-row">
                <div className="space-y-5 flex flex-col lg:w-8/12 text-center lg:text-left">
                    <div className="flex flex-row text-center items-center">
                        <div className="h-[22px] w-[101px] mr-5 rounded-base bg-primary"></div>
                        <span className="uppercase text-sm sm:text-lg font-medium">занимаемся возвратом от 3000 евро.</span>
                    </div>
                    <h1 className='font-bold text-xl sm:text-4xl line uppercase leading-snug'>ESMA — это ключевой финансовый регулятор Евросоюза, обеспечивающий прозрачность рынков, защиту инвесторов и противодействие мошенничеству.</h1>
                    <p className="hidden sm:block font-bold text-lg lg:w-8/12">Пострадали от действий недобросовестного брокера? ESMA — официальный регулятор ЕС, который обеспечивает законную защиту, справедливость и возврат средств инвесторам, ставшим жертвами мошенничества.</p>
                </div>
                <div className="lg:ml-10 sm:bg-white/60 rounded-base lg:w-4/12 sm:p-7 mt-10">
                    <h2 className="font-bold text-xl sm:text-2xl uppercase mb-6 text-center">Сообщите о мошенничестве для начала процедуры возврата средств</h2>

                    {submitStatus === 'success' && (
                        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                            Заявка успешно отправлена!
                        </div>
                    )}

                    {submitStatus === 'error' && (
                        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                            Ошибка отправки. Попробуйте еще раз.
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-row gap-4">
                            <input
                                className="bg-white rounded py-3 px-4 w-1/2 focus:outline-none focus:border-primary"
                                type="text"
                                name="firstName"
                                placeholder="Имя"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                            <input
                                className="bg-white rounded py-3 px-4 w-1/2 focus:outline-none focus:border-primary"
                                type="text"
                                name="lastName"
                                placeholder="Фамилия"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <input
                            className="bg-white rounded py-3 px-4 w-full focus:outline-none focus:border-primary"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                        />
                        <input
                            className="bg-white rounded py-3 px-4 w-full focus:outline-none focus:border-primary"
                            type="tel"
                            name="phone"
                            placeholder="Номер телефона"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 sm:bg-yellow-500 sm:hover:bg-yellow-600 text-white sm:text-black font-bold py-3 px-4 rounded w-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                        </button>
                    </form>
                </div>
            </div>
            <img
                className="absolute inset-0 z-10 w-full h-full object-cover"
                src="./bg-img-hero-section.png"
                alt=""
            />
        </section>
    );
};

export default HeroSection;