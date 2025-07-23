import { useState } from "react";
import NavLogo from "./NavLogo";
import NavLoginBtn from "./NavLoginBtn";
import NavMenu from "./NavMenu";
import NavMenuLeft from "./NavMenuLeft";
import NavSideMenuBtn from "./NavSideMenuBtn";

function Nav() {
   const [isShowNav, setIsShowNav] = useState(false);

   return (
      <header className="sticky top-0 container-fluid flex flex-wrap md:flex-nowrap items-center justify-between z-50 pt-4 md:py-4 shadow-lg bg-white dark:bg-black">
         <NavLogo />
         <NavSideMenuBtn isShowNav={isShowNav} setIsShowNav={setIsShowNav} />
         <nav
            className={`${
               isShowNav ? "max-h-[380px]" : "max-h-0 md:max-h-max"
            } flex flex-col items-start gap-y-4 md:flex-row md:justify-between md:items-center w-full pb-4 md:pb-0 bg-white dark:bg-black text-sm md:text-base font-Dana-med md:font-Dana-reg overflow-y-hidden transition-nav`}
         >
            <NavMenu />
            <span className="md:hidden w-36 h-[2px] bg-emerald-500"></span>
            <NavMenuLeft />
         </nav>
         <NavLoginBtn />
      </header>
   );
}

export default Nav;
