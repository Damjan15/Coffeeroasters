import { useState } from "react";
import { navLinks } from "../../utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/shared/desktop/logo.svg";
import hamburgerIcon from "../../public/assets/shared/mobile/icon-hamburger.svg";
import closeIcon from "../../public/assets/shared/mobile/icon-close.svg";

const Header = () => {
    const [ open, setOpen ] = useState(false);
  return (
    <header className="px-4 h-16 relative md:h-24">
      <div className="max-w-7xl mx-auto h-full">
        <nav className="flex items-center justify-between h-full">
          <Link href="/">
            <Image src={logo} className="w-[163px] h-[18px] md:w-[236px] md:h-[26px] lg:w-full lg:h-full" alt="coffeeroasters-logo" />
          </Link>

          {/* Show this button only on mobile devices */}
          <button className="block md:hidden" onClick={() => setOpen((prev) => !prev)}>
            { open ? <Image src={closeIcon} alt="hamburger-icon" /> : <Image src={hamburgerIcon} alt="hamburger-icon" />}
          </button>

          {/* Show the navigation links only on larger screens */}
          <ul className="hidden space-x-8 h-full items-center md:flex">
            { navLinks.map((link) => <li key={link.id} className="text-xs leading-[15px] tracking-[0.9px] uppercase text-grey font-bold transition-colors duration-300 ease-in-out lg:text-base hover:text-darkGreyBlue"><Link href={link.route}>{ link.name }</Link></li>)}
          </ul>
        </nav>


        {/* Dropdown menu for the mobile devices */}
        { open && (
          <motion.ul initial={{ opacity: 0}} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: "easeInOut"}} className={`dropdown h-[577px] flex flex-col items-center space-y-6 pt-8 md:hidden`}>
            { navLinks.map((link) => <li key={link.id} className="font-fraunces text-darkGreyBlue text-2xl leading-[32px]"><Link href={link.route}>{ link.name }</Link></li>)}
        </motion.ul>
        )}
      </div>
    </header>
  );
};

export default Header;
