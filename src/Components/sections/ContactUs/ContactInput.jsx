function ContactInput({label, name}) {
   return (
      <div className="w-full sm:w-1/2 flex flex-col mb-5">
         <label htmlFor={name} className="text-sm mb-2.5">
            {label}
         </label>
         <input
            id={name}
            type="text"
            className="px-5 py-3.5  appearance-none focus:outline-none text-zinc-800 rounded-md"
            placeholder={label}
         />
      </div>
   );
}

export default ContactInput;
