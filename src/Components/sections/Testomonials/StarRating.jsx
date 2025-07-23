const StarRating = ({ score = 0 }) => {
   const totalStars = 5;

   const stars = Array.from({ length: totalStars }, (_, index) => {
      return (
         <svg
            key={index}
            className={`size-5 ${
               index < score ? "text-yellow-400" : "text-gray-300"
            }`}
         >
            <use href="#star"></use>
         </svg>
      );
   });

   return <>{stars}</>;
};

export default StarRating;
