import { useState } from 'react';
import { FC } from 'react';
import { loginBG, logo } from '../assets/images';
import { LoginInput } from '../components';
import { FaEnvelope, FaLock, FcGoogle } from '../assets/icons';
import { motion } from 'framer-motion';
import { buttonClick } from '../animations';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { app } from '../config/firebase.config';
import { validateUserJWTToken } from '../api';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../store/actions/userActions';
import { UserState } from '../store/reducers/userReducer';
import { useEffect } from 'react';

export const Login: FC = () => {
  const [userEmail, setUserEmail] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');

  const firebaseAuth = getAuth(app);
  const provider: GoogleAuthProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: UserState) => state.user);

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user]);

  const loginWithGoogle = async (): Promise<void> => {
    await signInWithPopup(firebaseAuth, provider).then((userCred) => {
      firebaseAuth.onAuthStateChanged((cred) => {
        if (cred) {
          cred.getIdToken().then((token) => {
            validateUserJWTToken(token).then((data) => {
              dispatch(setUserDetails(data));
            });
            navigate('/', { replace: true });
          });
        }
      });
    });
  };

  const signUpWithEmailPass = async (): Promise<void> => {
    if (userEmail === '' || password === '' || confirm_password === '') {
      console.log('Empty');
    } else {
      if (password === confirm_password) {
        setUserEmail('');
        setConfirm_password('');
        setPassword('');
        await createUserWithEmailAndPassword(
          firebaseAuth,
          userEmail,
          password
        ).then((userCred: any) => {
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
              cred.getIdToken().then((token) => {
                validateUserJWTToken(token).then((data) => {
                  dispatch(setUserDetails(data));
                });
                navigate('/', { replace: true });
              });
            }
          });
        });
      } else {
      }
    }
  };

  const signInWithEmailPass = async (): Promise<void> => {
    if (userEmail !== '' && password !== '') {
      await signInWithEmailAndPassword(firebaseAuth, userEmail, password).then(
        (userCred) => {
          firebaseAuth.onAuthStateChanged((cred) => {
            if (cred) {
              cred.getIdToken().then((token) => {
                validateUserJWTToken(token).then((data) => {
                  dispatch(setUserDetails(data));
                });
                navigate('/', { replace: true });
              });
            }
          });
        }
      );
    } else {
    }
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      <img
        src={loginBG}
        alt="background"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      <div className="flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-md p-4 px-4 py-12 gap-6 ">
        <div className="flex items-center justify-start gap-4 w-full">
          <img
            src={logo}
            alt=""
            className="w-8"
          />
          <p className="text-headingColor font-semibold text-2xl">City</p>
        </div>

        <p className="text-3xl font-semibold text-headingColor">Welcome Back</p>
        <p className="text-xl text-textColor -mt-6">
          {isSignUp ? 'Sign Up' : 'Sign In'} with following
        </p>

        <div className=" w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4 ">
          <LoginInput
            placeholder={'Email Here'}
            icon={<FaEnvelope className="text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
          />
          <LoginInput
            placeholder={'Password Here'}
            icon={<FaLock className="text-xl text-textColor" />}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignUp={isSignUp}
          />

          {isSignUp && (
            <LoginInput
              placeholder={'Confirm Password Here'}
              icon={<FaLock className="text-xl text-textColor" />}
              inputState={confirm_password}
              inputStateFunc={setConfirm_password}
              type="password"
              isSignUp={isSignUp}
            />
          )}
        </div>

        {!isSignUp ? (
          <p>
            Doesn't have an account?{' '}
            <motion.button
              {...buttonClick}
              className=" text-red-500 underline cursor-pointer"
              onClick={() => setIsSignUp(true)}
            >
              Create one
            </motion.button>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <motion.button
              {...buttonClick}
              className=" text-red-500 underline cursor-pointer "
              onClick={() => setIsSignUp(false)}
            >
              Sign-in here
            </motion.button>
          </p>
        )}

        {isSignUp ? (
          <motion.button
            {...buttonClick}
            className="w-full px-4 py-2 rounded-md bg-red-500 cursor-pointer text-white text-xl capitalize hover:bg-red-600 transition-all duration-150"
            onClick={signUpWithEmailPass}
          >
            Sign Up
          </motion.button>
        ) : (
          <motion.button
            {...buttonClick}
            onClick={signInWithEmailPass}
            className="w-full px-4 py-2 rounded-md bg-red-500 cursor-pointer text-white text-xl capitalize hover:bg-red-600 transition-all duration-150"
          >
            Sign In
          </motion.button>
        )}

        <div>
          <div className="flex items-center justify-between gap-16">
            <div className="w-28 h-[1px] rounded-md bg-white"></div>
            <p className="text-white">Or</p>
            <div className="w-28 h-[1px] rounded-md bg-white"></div>
          </div>

          <motion.div
            {...buttonClick}
            className="flex items-center justify-center px-20 py-2 mt-5 bg-lightOverlay backdrop-blur-md cursor-pointer rounded-3xl gap-4"
            onClick={loginWithGoogle}
          >
            <FcGoogle className="text-3xl" />
            <p className="capitalize text-baze text-headingColor">
              Sign In With Google
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
