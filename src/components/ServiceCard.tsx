import { Service } from "../App";

export const ServiceCard = ({service} : {service :Service}) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
        <div className="font-bold text-xl mb-2">{service.title}</div>
        <p className="text-gray-700 text-base mb-4">${service.price}/mes</p>
        <ul className="list-disc list-inside">
          {service.features.map((feature, index) => (
            <li key={index} className="text-gray-600">{feature}</li>
          ))}
        </ul>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Suscribirse
        </button>
      </div>
    );
  };