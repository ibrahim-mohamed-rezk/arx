import { ServiceTypes } from "@/libs/types/types";
import React from "react";
import ServiceCard from "./ServiceCard";
import { useTranslations } from "next-intl";



const ServicesPage = ({ services }: { services: ServiceTypes[] }) => {
 const t = useTranslations("services");

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h3 className="text-blue-700 font-medium mb-2">{t("title")}</h3>
        <h2 className="text-3xl md:text-4xl font-bold">{t("description")}</h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service: ServiceTypes, index: number) => (
          <ServiceCard
            key={index}
            icon={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
