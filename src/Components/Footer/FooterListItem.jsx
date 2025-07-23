function FooterListItem({text}) {
   return (
      <li>
         <span className="size-2.5 bg-emerald-500 rounded-full"></span>
         <span className="hover:text-emerald-500 cursor-pointer">
            {text}
         </span>
      </li>
   );
}

export default FooterListItem;
