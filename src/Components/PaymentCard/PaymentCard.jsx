import React from "react";

function PaymentCard({ img }) {
   return (
      <div className="w-[30px] h-[18px] lg:w-[48px] lg:h-[28px] cursor-pointer hover:-translate-y-1 transition-all">
         <img src={img} alt="payment-card" />
      </div>
   );
}

export default PaymentCard;
