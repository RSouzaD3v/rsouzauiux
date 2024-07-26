import React, { useState } from "react";
import { HeaderProps } from "./types";
import '../../styles/global.css';

const Header: React.FC<HeaderProps> = ({children, links, styled}) => {
    // Estado para gerenciar a visibilidade do menu móvel
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Função para alternar a visibilidade do menu móvel
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`flex justify-between items-center ${styled?.padding} ${styled?.bgcolor}`}>
            <div>
                {typeof children === 'string' ? (
                    children.endsWith('.png') || children.endsWith('.svg') || children.endsWith('.jpg') || children.endsWith('.jpeg') ? (
                        <img className="w-24" src={children} alt="logo" />
                    ) : (
                        <h1>{children}</h1>
                    )
                ) : (
                    children
                )}
            </div>

            <nav className="hidden sm:flex items-center">
                <ul className="flex gap-3 items-center">
                    {links.map((element, index) => (
                        <li key={index}>
                            <a className={`${styled?.color}`} href={element.link}>{element.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="sm:hidden">
                <button onClick={toggleMobileMenu} aria-label="Toggle menu">
                    <img className="w-6" src="./icons/fontawesome/bars-solid.svg" alt="menu" />
                </button>
            </div>

            {isMobileMenuOpen && (
                <nav className="fixed inset-0 bg-white z-50 flex flex-col items-center p-4 sm:hidden">
                    <button onClick={toggleMobileMenu} aria-label="Close menu" className="self-end mb-4">
                        <img className="w-6" src="./icons/fontawesome/times-solid.svg" alt="close" />
                    </button>
                    <ul className="flex flex-col gap-4">
                        {links.map((element, index) => (
                            <li key={index}>
                                <a className={`${styled?.color}`} href={element.link} onClick={toggleMobileMenu}>{element.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
