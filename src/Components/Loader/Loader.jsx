import React from "react";

function Loader() {
   return (
      <div className="relative h-[100vh] w-[100vw] bg-gradient-to-br from-emerald-600 to-emerald-400">
         <div className="flex-center size-14 bg-gradient-to-br from-slate-500 to-slate-400 rounded-md absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] req-load-animation"></div>
      </div>
   );
}

export default Loader;
