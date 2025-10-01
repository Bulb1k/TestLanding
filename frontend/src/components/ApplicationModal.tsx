import { useState } from 'react';
import { sendFormData, type FormData } from '../services/formApi';

const ApplicationModal = ({
                              isOpen,
                              onClose,
                              title = "Сообщите о мошенничестве для начала процедуры возврата средств"
                          }: {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const apiData: FormData = {
            title: title,
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
                onClose();
            }, 2000);
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
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative bg-white/90 rounded-lg p-7 w-full max-w-md mx-4 shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
                    disabled={isSubmitting}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>

                <h2 className="font-bold text-2xl uppercase mb-6 text-center pr-6">{title}</h2>

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
                            className="bg-white rounded py-3 px-4 w-1/2 focus:outline-none focus:border-primary border border-gray-300"
                            type="text"
                            name="firstName"
                            placeholder="Имя"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                        />
                        <input
                            className="bg-white rounded py-3 px-4 w-1/2 focus:outline-none focus:border-primary border border-gray-300"
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
                        className="bg-white rounded py-3 px-4 w-full focus:outline-none focus:border-primary border border-gray-300"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                    />
                    <input
                        className="bg-white rounded py-3 px-4 w-full focus:outline-none focus:border-primary border border-gray-300"
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
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-4 rounded w-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ApplicationModal;