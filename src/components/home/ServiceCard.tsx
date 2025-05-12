const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-gray-100 p-4 rounded-full mb-6 w-24 h-24 flex items-center justify-center">
        <img src={icon} alt="service icon" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default ServiceCard;