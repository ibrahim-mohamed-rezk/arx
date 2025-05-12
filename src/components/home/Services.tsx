import { ServiceTypes } from "@/libs/types/types";
import React from "react";
import ServiceCard from "./ServiceCard";



const ServicesPage = ({ services }: { services: ServiceTypes[] }) => {
  // Service data
  // const services = [
  //     {
  //         icon: <CommercialIcon />,
  //         title: "Commercial",
  //         description: "Take your business to new heights with our versatile spaces, designed for various industries and scales. Experience professionalism and innovation in every detail, with modern infrastructure, state-of-the-art facilities, and a vibrant community—redefining how you work and grow."
  //     },
  //     {
  //         icon: <AdministrativeIcon />,
  //         title: "Administrative",
  //         description: "Searching for the perfect workspace? Our office units offer the ideal environment for professionals, fostering collaboration, creativity, and productivity. Enjoy a dedicated, distraction-free space designed to help you thrive."
  //     },
  //     {
  //         icon: <MedicalIcon />,
  //         title: "Medical",
  //         description: "A range of premium medical units designed to enhance diagnosis, treatment, and patient care. Equipped with cutting-edge facilities, these units streamline workflows and improve medical outcomes, ensuring the highest standard of healthcare."
  //     }
  // ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h3 className="text-blue-700 font-medium mb-2">OUR SERVICES</h3>
        <h2 className="text-3xl md:text-4xl font-bold">OUR MAIN FOCUS</h2>
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
