function NavLogo() {
   return (
      <a href="#" className="shrink-0 md:ml-6 lg:ml-16 2xl:ml-28">
         <img
            src={`${process.env.PUBLIC_URL}/imgs/logo-black.png`}
            className="inline-block dark:hidden w-36 aspect-auto md:w-[180px]"
            alt="logo"
         />
         <img
            src={`${process.env.PUBLIC_URL}/imgs/logo-white.png`}
            className="hidden dark:inline-block w-36 aspect-auto md:w-[180px]"
            alt="logo"
         />
      </a>
   );
}

export default NavLogo;
