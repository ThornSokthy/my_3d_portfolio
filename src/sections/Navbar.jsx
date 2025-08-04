import { IoIosMail, IoMdMenu, IoMdClose } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore.js";
import { navLinks } from "../constants";

const Navbar = () => {
    const { theme, setTheme } = useThemeStore();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                mobileMenuOpen &&
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(e.target)
            ) {
                const menuButton = document.querySelector('.mobile-menu-button');
                if (menuButton && !menuButton.contains(e.target)) {
                    setMobileMenuOpen(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mobileMenuOpen]);

    return (
        <header className="flex justify-between items-center py-4 relative z-20">
            <div className="flex items-center gap-4">
                <span className="text-2xl"><IoIosMail /></span>
                <span>hi@thy.develope</span>
            </div>
            <nav className="flex items-center gap-2 md:gap-6">
                <NavItems />
                <label className="swap swap-rotate">
                    <input
                        type="checkbox"
                        className="theme-controller"
                        value="synthwave"
                        onChange={() => setTheme(theme === 'black' ? 'light' : 'black')}
                    />
                    <svg
                        className="swap-off h-7 w-7 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                    <svg
                        className="swap-on h-7 w-7 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
                <button
                    className="mobile-menu-button text-3xl block md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <IoMdMenu />
                </button>
            </nav>

            <div
                ref={mobileMenuRef}
                className={`md:hidden fixed w-2/3 top-0 right-0 bottom-0 bg-base-100 bg-opacity-95 z-10 transition-all duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col items-center justify-start mt-14 h-full gap-8 shadow-accent">
                    <button
                        className="absolute top-4 right-4 text-3xl block md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <IoMdClose />
                    </button>

                    <NavItems
                        onClick={() => setMobileMenuOpen(false)}
                        mobile
                    />
                </div>
            </div>
        </header>
    );
};

export default Navbar;

const NavItems = ({ onClick = () => {}, mobile = false }) => (
    <ul className={`${mobile ? 'flex flex-col items-center gap-8 text-xl' : 'items-center gap-6 hidden md:flex'}`}>
        {navLinks.map((item) => (
            <li key={item.id}>
                <a
                    href={item.href}
                    onClick={onClick}
                    className="hover:text-primary transition-colors duration-200"
                >
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
);