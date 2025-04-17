import Logo from '../../../public/turflo-logo.png';
import Facebook from '../../assets/icons/Facebook.png';
import Linkdin from '../../assets/icons/Linkdin.png';
import Twitter from '../../assets/icons/Twitter.png';
import Instagram from '../../assets/icons/Instagram.png';
import { HeaderArrow } from '../../components/icons';
import { RightArrow } from '../../components/icons';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <header className="fixed top-0 left-0 right-0 w-full bg-[#FF7018] h-[5.625rem] flex items-center justify-between z-50">
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Turflo Logo"
            className="h-auto w-auto md:ml-[3.125rem] ml-[1.875rem] lg:ml-[5.625rem]"
          />
        </div>

        <nav className="hidden sm:flex items-center gap-5 md:gap-8">
          <button className="bg-[#0295B0] text-white font-semibold rounded-full px-4 py-2 focus:outline-none">
            About
          </button>
          <button className="text-white font-semibold focus:outline-none">
            FAQ's
          </button>
          <button className="text-white font-semibold focus:outline-none">
            Contact Us
          </button>
        </nav>

        <div className="hidden sm:flex items-center gap-2.5 md:mr-[3.125rem] mr-[1.875rem] lg:mr-[5.625rem]">
          <img src={Twitter} alt="Twitter" className="h-6 w-6" />
          <img src={Facebook} alt="Facebook" className="h-6 w-6" />
          <img src={Instagram} alt="Instagram" className="h-6 w-6" />
          <img src={Linkdin} alt="LinkedIn" className="h-6 w-6" />
        </div>

        <div
          className="sm:hidden flex items-center md:mr-[3.125rem] mr-[1.875rem] lg:mr-[5.625rem] cursor-pointer"
          onClick={toggleMenu}
        >
          <HeaderArrow className="h-6 w-6 text-white" />
        </div>
      </header>

      {isMenuOpen && (
        <div className="sm:hidden fixed top-[5.625rem] left-0 right-0 w-full bg-[#FF7018] py-4 z-40">
          <div className="flex flex-col items-center">
            <button className="w-full border-b border-white text-left px-6 py-4 text-white font-semibold focus:outline-none flex justify-between items-center">
              <span>About</span>
              <RightArrow className="h-4 w-4" />
            </button>

            <button className="w-full border-b border-white text-left px-6 py-4 text-white font-semibold focus:outline-none flex justify-between items-center">
              <span>FAQ's</span>
              <RightArrow className="h-4 w-4" />
            </button>

            <button className="w-full border-b border-white text-left px-6 py-4 text-white font-semibold focus:outline-none flex justify-between items-center">
              <span>Contact Us</span>
              <RightArrow className="h-4 w-4" />
            </button>

            <div className="flex items-center justify-center gap-6 mt-6 mb-4">
              <img src={Twitter} alt="Twitter" className="h-6 w-6" />
              <img src={Facebook} alt="Facebook" className="h-6 w-6" />
              <img src={Instagram} alt="Instagram" className="h-6 w-6" />
              <img src={Linkdin} alt="LinkedIn" className="h-6 w-6" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;