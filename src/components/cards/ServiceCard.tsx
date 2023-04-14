import React from "react";

type ServiceCardProps = {
  title: string;
  children: string;
  icon: string;
  size: number;
};
const ServiceCard = ({ icon, title, children, size }: ServiceCardProps) => {
  return (
    <div className="bg-white w-72 h-80 py-12 px-8 rounded service-card">
      <div className="flex justify-center items-center mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="#0ea5e9"
        >
          <path d={icon} />
        </svg>
      </div>
      <div>
        <h2 className="text-center mb-4">{title}</h2>
        <p className="text-center text-gray-500">{children}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
