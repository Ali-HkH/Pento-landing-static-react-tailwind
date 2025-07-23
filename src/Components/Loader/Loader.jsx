function Loader() {
   return (
      <div className="relative h-screen w-screen bg-gradient-to-br from-slate-300 to-slate-100">
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-16 border-r-4 border-t-4 border-emerald-600 rounded-full animate-spin"></div>
         </div>
      </div>
   );
}

export default Loader;
