import TeamSocials from "./TeamSocials";

function TeamBox({ name, job, img }) {
   return (
      <div className="group text-center">
         <div className="relative rounded-2xl overflow-hidden mb-[30px] child:transition-all child:duration-300">
            <img className="group-hover:scale-110" src={img} alt="team" />
            <TeamSocials />
         </div>
         <div>
            <h1 className="font-Dana-bold text-xl lg:text-2xl dark:text-white group-hover:text-emerald-600 duration-300 pb-2.5">
               {name}
            </h1>
            <span className="text-sm lg:text-base text-zinc-500 dark:text-white ">
               {job}
            </span>
         </div>
      </div>
   );
}

export default TeamBox;
