import { FaGithub, FaInstagram, FaTelegram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="c-space py-7 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <a target="_blank" href="https://github.com/ThornSokthy" className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
                    <FaGithub className="w-1/2 h-1/2" />
                </a>
                <a target="_blank" href="https://t.me/therealsokthy128" className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
                    <FaTelegram className="w-1/2 h-1/2" />
                </a>
                <a target="_blank" href="https://www.facebook.com/share/14FikabeY3d/" className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
                    <FaFacebook className="w-1/2 h-1/2" />
                </a>
                <a target="_blank" href="https://www.instagram.com/therealthy007?igsh=NDFnazZtOXZ3ZWtj" className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200">
                    <FaInstagram className="w-1/2 h-1/2" />
                </a>
            </div>

            <p className="text-white-500">© 2024 Thorn SokThy. All rights reserved.</p>
        </footer>
    );
};

export default Footer;