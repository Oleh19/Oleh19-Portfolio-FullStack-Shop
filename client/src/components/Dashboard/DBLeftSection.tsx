import { FC } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { logo } from '../../assets/images';
import { isActiveStyles, isNotActiveStyles } from '../../utils/utils';

const DBLeftSection: FC = () => {
  return (
    <div className="h-full py-12 flex flex-col bg-lightOverlay backdrop-blur-md shadow-md min-w-210 w-300 gap-3">
      <NavLink
        to={'/'}
        className="flex items-center justify-start px-6 gap-4"
      >
        <img
          src={logo}
          alt="logo"
          className="w-12"
        />
        <p className="font-semibold text-xl">Pet-Project</p>
      </NavLink>
      <hr />

      <ul className=" flex flex-col gap-4 ">
        <NavLink
          to={'/dashboard/home'}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8  border-red-500`
              : isNotActiveStyles
          }
        >
          Home
        </NavLink>
        <NavLink
          to={'/dashboard/items'}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8  border-red-500`
              : isNotActiveStyles
          }
        >
          Items
        </NavLink>
        <NavLink
          to={'/dashboard/newItems'}
          className={({ isActive }) =>
            isActive
              ? `${isActiveStyles} px-4 py-2 border-l-8  border-red-500`
              : isNotActiveStyles
          }
        >
          Add New Item
        </NavLink>
      </ul>

      <div className="w-full items-center justify-center flex h-225 mt-auto px-2">
        <div className="w-full h-full rounded-md bg-red-400 flex items-center justify-center flex-col gap-3 px-3">
          <div className="w-12 h-12 borde bg-white rounded-full flex items-center justify-center mt-2">
            <p className="text-2xl font-bold text-red-500">?</p>
          </div>
          <p className="text-xl text-primary font-semibold">Help Center</p>
          <div className="text-base text-gray-300 text-center">
            Having trouble in Pet-Project. Please contact us for more questions
          </div>
          <Link to='/contact-us' className="px-4 py-2 mb-2 rounded-full bg-primary text-red-400 cursor-pointer">
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DBLeftSection;
