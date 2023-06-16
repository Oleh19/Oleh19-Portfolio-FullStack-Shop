import { FC, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Main } from './pages';
import './index.css';
import { getAuth } from '@firebase/auth';
import { app } from './config/firebase.config';
import { useEffect } from 'react';
import { validateUserJWTToken } from './api';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/actions/userActions';
import { motion } from 'framer-motion';
import { fadeInOut } from './animations';

const App: FC = () => {
  const firebaseAuth = getAuth(app);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          validateUserJWTToken(token).then((data) => {
            dispatch(setUserDetails(data));
          });
        });
      }else
      setInterval(() => {
        setIsLoading(false)
      }, 3000)
    });
  }, []);

  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      {isLoading && (
        <motion.div
          {...fadeInOut}
          className="fixed z-50 inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center w-full"
        >
          The Data Is Loading...
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
      </Routes>
    </div>
  );
};

export default App;
