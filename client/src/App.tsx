import { FC, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ContactUs, Dashboard, Login, Main } from './pages';
import './index.css';
import { getAuth } from '@firebase/auth';
import { app } from './config/firebase.config';
import { useEffect } from 'react';
import { getAllCartItems, validateUserJWTToken } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from './store/actions/userActions';
import { motion } from 'framer-motion';
import { fadeInOut } from './animations';
import { Alert, MainLoader } from './components';
import { AlertActions } from './store/actions/alertActions';
import { setCartItems } from './store/actions/cartActions';

const App: FC = () => {
  const firebaseAuth = getAuth(app);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const alert = useSelector((state: AlertActions) => state.alert);

  const dispatch = useDispatch();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          validateUserJWTToken(token).then((data) => {
            if (data) {
              getAllCartItems(data.user_id).then((items) => {
                dispatch(setCartItems(items));
              });
            }
            dispatch(setUserDetails(data));
          });
        });
        setIsLoading(false);
      } else
        setInterval(() => {
          setIsLoading(false);
        }, 3000);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      {isLoading && (
        <motion.div
          {...fadeInOut}
          className="fixed z-50 inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center w-full"
        >
          <MainLoader />
        </motion.div>
      )}
      <Routes>
        <Route
          path="/*"
          element={<Main />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/dashboard/*"
          element={<Dashboard />}
        />
        <Route
          path="/contact-us"
          element={<ContactUs />}
        />

      </Routes>

      {alert?.type && (
        <Alert
          type={alert.type}
          message={alert.message}
        />
      )}
    </div>
  );
};

export default App;
