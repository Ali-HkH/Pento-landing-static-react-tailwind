function FooterIcons({icon}) {
   return (
      <svg className="text-white hover:text-emerald-500 size-6 rounded-full hover:-translate-y-1 transition-all cursor-pointer">
         <use href={`#${icon}`}></use>
      </svg>
   );
}

export default FooterIcons;
