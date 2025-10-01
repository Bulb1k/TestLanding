import { useState } from 'react';
import Navbar from './components/Navbar'
import './App.css'
import InvestorProtectionSection from "./components/ProtectionSection.tsx";
import HeroSection from "./components/HeroSection.tsx";
import {ContactSection} from "./components/ContactSection.tsx";
import NewsSection from "./components/NewsSection.tsx";
import FAQSection from "./components/FAQSection.tsx";
import TrustSection from "./components/TrustSection.tsx";
import {EndSection} from "./components/EndSection.tsx";
import ApplicationModal from "./components/ApplicationModal.tsx";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Сообщите о мошенничестве для начала процедуры возврата средств");

    const openModal = (title?: string) => {
        if (title) setModalTitle(title);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar onOpenModal={openModal} />
            <HeroSection />
            <InvestorProtectionSection />
            <ContactSection onOpenModal={openModal} />
            <NewsSection />
            <FAQSection />
            <TrustSection />
            <EndSection onOpenModal={openModal} />

            <ApplicationModal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={modalTitle}
            />
        </div>
    )
}

export default App