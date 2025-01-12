"use client";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PreparingPage() {
  const [countdown, setCountdown] = useState<number>(3);
  const params = useParams();

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      redirect(`/dashboard/practice/detail/${params.id}/questionnairepanel`);
    }
  }, [countdown, params.id]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0E1824DE] text-white">
      <div className="odometer-container relative h-[278px]">
        <div className={`odometer ${countdown === 3 ? "animate" : ""}`}>3</div>
        <div className={`odometer ${countdown === 2 ? "animate" : ""}`}>2</div>
        <div className={`odometer ${countdown === 1 ? "animate" : ""}`}>1</div>
        <div className={`odometer ${countdown === 0 ? "animate" : ""}`}>GO</div>
      </div>
    </div>
  );
}
