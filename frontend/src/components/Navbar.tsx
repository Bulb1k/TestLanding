import { useState } from 'react';

const Navbar = ({ onOpenModal }: { onOpenModal: (title?: string) => void }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="z-20 right-0 w-full relative bg-white">
            <div className="flex flex-col">
                <div className="container flex items-center justify-between py-5">
                    <img src="./logo.png" alt="Logo" className="h-8 sm:h-10" />

                    <button
                        onClick={() => onOpenModal("Сообщите о мошенничестве")}
                        className="hidden sm:block bg-primary px-4 py-3 text-white rounded-base text-sm lg:text-base"
                    >
                        Сообщить о мошенничестве
                    </button>

                    <button
                        onClick={toggleMobileMenu}
                        className="sm:hidden flex flex-col gap-1.5 p-2"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-8 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-8 h-0.5 bg-black transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-8 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>

                <ul className="hidden sm:block w-full bg-primary">
                    <div className="container sm:flex flex-wrap gap-4 lg:gap-6 py-5 text-white font-bold text-sm lg:text-base">
                        <li><a href="#" className="hover:text-gray-300 transition-colors">Регулятор ESMA</a></li>
                        <li><a href="#" className="hover:text-gray-300 transition-colors">Защита инвесторов</a></li>
                        <li><a href="#" className="hover:text-gray-300 transition-colors">Возврат средств</a></li>
                        <li><a href="#" className="hover:text-gray-300 transition-colors">Связаться с представителем ESMA</a></li>
                    </div>
                </ul>

                <div className={`sm:hidden bg-primary overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96' : 'max-h-7'}`}>
                    <ul className="container flex flex-col py-4 text-white font-bold">
                        <li className="py-3 border-b border-white/20">
                            <a href="#" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                                Регулятор ESMA
                            </a>
                        </li>
                        <li className="py-3 border-b border-white/20">
                            <a href="#" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                                Защита инвесторов
                            </a>
                        </li>
                        <li className="py-3 border-b border-white/20">
                            <a href="#" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                                Возврат средств
                            </a>
                        </li>
                        <li className="py-3 border-b border-white/20">
                            <a href="#" className="block" onClick={() => setIsMobileMenuOpen(false)}>
                                Связаться с представителем ESMA
                            </a>
                        </li>
                        <li className="py-3">
                            <button
                                onClick={() => {
                                    onOpenModal("Сообщите о мошенничестве");
                                    setIsMobileMenuOpen(false);
                                }}
                                className="w-full bg-white text-primary py-3 px-4 rounded font-bold"
                            >
                                Сообщить о мошенничестве
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar