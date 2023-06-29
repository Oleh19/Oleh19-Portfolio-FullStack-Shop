import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserState } from '../../store/reducers/userReducer';
import {
  MdSearch,
  BsToggles2,
  BsFillBellFill,
  MdLogout,
} from '../../assets/icons';
import { motion } from 'framer-motion';
import { buttonClick } from '../../animations';
import { avatar } from '../../assets/images';
import { useNavigate } from 'react-router';
import { getAuth } from '@firebase/auth';
import { app } from '../../config/firebase.config';
import { setUserNull } from '../../store/actions/userActions';

const DBHeader: FC = () => {
  const user = useSelector((state: UserState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firebaseAuth = getAuth(app);

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
    <div className="flex w-full items-center justify-between gap-3">
      <p className="">
        Welcome to City
        {user?.name && (
          <span className="block text-base text-gray-500">{`Hello ${user.name}...!`}</span>
        )}
      </p>

      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-3 px-4 py-2 bg-lightOverlay backdrop-blur-md shadow-md rounded-md">
          <MdSearch className="text-gray-400 text-2xl" />
          <input
            type="text"
            placeholder="Search Here ..."
            className="border-none outline-none bg-transparent w-32 text-base font-semibold text-textColor"
          />
          <BsToggles2 className="text-gray-400 text-2xl" />
        </div>

        <motion.div
          {...buttonClick}
          className="w-10 h-10 rounded-md cursor-pointer bg-lightOverlay backdrop-blur-md shadow-md flex items-center justify-center"
        >
          <BsFillBellFill className="text-gray-400 text-xl" />
        </motion.div>

        <div className="flex items-center justify-center gap-2">
          <div className="w-10 h-10 rounded-md shadow-md cursor-pointer overflow-hidden">
            <motion.img
              className="w-full h-full object-cover"
              src={user?.picture ? user?.picture : avatar}
              whileHover={{ scale: 1.15 }}
              referrerPolicy="no-referrer"
            />
          </div>

          <motion.div
            {...buttonClick}
            onClick={signOut}
            className="w-10 h-10 rounded-md cursor-pointer bg-lightOverlay backdrop-blur-md shadow-md flex items-center justify-center"
          >
            <MdLogout className="text-gray-400 text-xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DBHeader;
