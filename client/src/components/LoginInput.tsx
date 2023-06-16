import { motion } from 'framer-motion';
import { FC, HTMLInputTypeAttribute, ReactNode, useState } from 'react';
import { fadeInOut } from '../animations';

interface LoginInputProps {
  placeholder: string;
  icon: ReactNode;
  inputState: string;
  inputStateFunc: (value: string) => void;
  type: HTMLInputTypeAttribute;
  isSignUp?: boolean;
}

const LoginInput: FC<LoginInputProps> = ({
  placeholder,
  icon,
  type,
  inputState,
  inputStateFunc,
}) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <motion.div
     {...fadeInOut}
      className={`flex items-center justify-center gap-4 bg-lightOverlay backdrop-blur-md rounded-md w-full px-4 py-2 ${
        isFocus ? 'shadow-md shadow-red-400' : 'shadow-none'
      } `}
    >
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        className=" w-full h-full bg-transparent text-headingColor text-lg font-semibold border-none outline-none "
        value={inputState}
        onChange={(e) => inputStateFunc(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
    </motion.div>
  );
};

export default LoginInput;
