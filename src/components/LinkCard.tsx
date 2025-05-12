import React from "react";

interface LinkCardProps {
  title: string;
  description?: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
}

const LinkCard: React.FC<LinkCardProps> = (item) => {
  return (
    <a
      href={item.link}
      target="_blank"
      className="flex group items-center w-full p-4 transition-all duration-300 rounded-lg backdrop-blur-md bg-white shadow-md hover:bg-pink-50 hover:shadow-lg hover:transform hover:scale-105"
    >
      {item.icon && (
        <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-full text-white transition-all duration-300 bg-pink-500 group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-pink-600">
          <item.icon />
        </div>
      )}
      <div className="flex-1">
        <h3 className="font-medium text-pink-700 group-hover:text-pink-900">
          {item.title}
        </h3>
        {item.description && (
          <p className="text-xs text-pink-500 transition-all duration-300 group-hover:text-pink-700">
            {item.description}
          </p>
        )}
      </div>

      {/* Arrow icon that appears on hover */}
      <div className="transition-all duration-300 group-hover:opacity-100 hover:translate-x-0 opacity-0 -translate-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-pink-400 group-hover:text-pink-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </a>
  );
};

export default LinkCard;
