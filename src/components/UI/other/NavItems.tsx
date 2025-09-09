import { NavLink } from "react-router-dom";
import type { NavItemProps } from "../../../types/ComponentsProps";

const NavItems: React.FC<NavItemProps> = ({ icon: Icon, label, route }) => {
  return (
    <div className="flex h-12 w-full flex-col items-center">
      <NavLink
        end={route === "."}
        replace
        className={({ isActive }) =>
          `flex h-full w-4/5 items-center gap-4 rounded-full pl-25 font-semibold duration-100 ${isActive ? "shadow-blue bg-[#407BE8] text-white" : "text-gray-400"}`
        }
        to={route}
      >
        {({ isActive }) => (
          <>
            <Icon
              className={`text-2xl font-semibold ${isActive ? "text-white" : "text-gray-400"}`}
            />
            {label}
          </>
        )}
      </NavLink>
    </div>
  );
};

export default NavItems;
