"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  const [mounted, setMounted] = useState(false);
  const [sanitizedDescription, setSanitizedDescription] = useState('');

  useEffect(() => {
    // Only set the description after component mounts to prevent hydration mismatch
    setSanitizedDescription(description?.trim() || '');
    setMounted(true);
  }, [description]);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-gray-100 p-4 rounded-full mb-6 w-24 h-24 flex items-center justify-center">
        <Image 
          src={icon} 
          alt={`${title} service icon`}
          width={48}
          height={48}
          className="w-12 h-12 object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {mounted && (
        <div 
          className="text-gray-600 text-start"
          dangerouslySetInnerHTML={{ 
            __html: sanitizedDescription 
          }}
        />
      )}
    </div>
  );
};

export default ServiceCard;