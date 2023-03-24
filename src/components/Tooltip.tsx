import { FC, ReactNode } from "react";

interface ITooltip {
  message: ReactNode;
  children: ReactNode;
}

const Tooltip: FC<ITooltip> = ({ message, children }) => {
  return (
    <div className="relative">
      <div className="group cursor-pointer relative inline-block w-28 text-center">
        {children}
        <div className="opacity-0 w-28 bg-gray-800 text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-14 px-3 pointer-events-none transition-all duration-200">
          {message}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;