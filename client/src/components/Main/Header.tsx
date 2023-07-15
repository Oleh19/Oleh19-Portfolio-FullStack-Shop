import { motion } from 'framer-motion';
import { FC, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { buttonClick, slideTop } from '../../animations';
import { avatar, logo } from '../../assets/images';
import {
  headerRoutes,
  isActiveStyles,
  isNotActiveStyles,
} from '../../utils/utils';
import { MdShoppingCart, MdLogout } from '../../assets/icons';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../store/reducers/userReducer';
import { getAuth } from '@firebase/auth';
import { app } from '../../config/firebase.config';
import { setUserNull } from '../../store/actions/userActions';
import { setCartOn } from '../../store/actions/displayCartAction';

const Header: FC = () => {
  const user = useSelector((state: UserState) => state.user);
  const cart = useSelector((state: any) => state.cart);

  const [isMenu, setIsMenu] = useState<boolean>(false);
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        dispatch(setUserNull());
        navigate('/login', { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <header className=" fixed backdrop-blur-md z-50 inset-x-0 top-0 flex items-center justify-between px-12 md:px-20 py-6 shadow-md ">
      <NavLink
        to={'/'}
        className="flex items-center justify-center gap-4"
      >
        <img
          src={logo}
          alt="Logo"
          className="w-12"
        />
        <p className=" font-semibold text-xl">Pet-Project</p>
      </NavLink>

      <nav className=" flex items-center justify-center gap-8 ">
        <ul className="hidden lg:flex items-center justify-center">
          {headerRoutes.map((route, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                isActive ? isActiveStyles : isNotActiveStyles
              }
              to={route.link}
            >
              {route.title}
            </NavLink>
          ))}
        </ul>

        <motion.div
          {...buttonClick}
          onClick={() => dispatch(setCartOn())}
          className="relative cursor-pointer"
        >
          <MdShoppingCart className="text-3xl text-textColor" />
          {cart?.length > 0 && (
            <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 -right-1">
              <p className="text-primary text-base font-semibold">
                {cart.length}
              </p>
            </div>
          )}
        </motion.div>

        {user ? (
          <>
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsMenu(true)}
            >
              <div className="w-9 h-9 rounded-full shadow-md cursor-pointer overflow-hidden flex items-center justify-center">
                <motion.img
                  className="w-full h-full object-cover"
                  src={user?.picture ? user?.picture : avatar}
                  whileHover={{ scale: 1.15 }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {isMenu && (
                <motion.div
                  {...slideTop}
                  onMouseLeave={() => setIsMenu(false)}
                  className=" px-6 py-4 w-48 border-l-lightOverlay bg-white rounded-md shadow-md absolute top-12 right-0 flex flex-col gap-4"
                >
                  <Link
                    className="hover:text-red-500 text-xl text-textColor"
                    to={'/dashboard/home'}
                  >
                    Dashboard
                  </Link>
                  <hr />

                  <motion.div
                    {...buttonClick}
                    onClick={signOut}
                    className="group flex items-center justify-center px-3 py-2 rounded-md shadow-md bg-gray-200 hover:bg-gray-100 gap-3"
                  >
                    <MdLogout className="text-2xl text-textColor group-hover::text-headingColor" />
                    <p>Sign Out</p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </>
        ) : (
          <>
            <NavLink to={'./login'}>
              <motion.button
                {...buttonClick}
                className="px-4 py-2 rounded-md shadow-md bg-lightOverlay border border-red-300 cursor-pointer"
              >
                Login
              </motion.button>
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
