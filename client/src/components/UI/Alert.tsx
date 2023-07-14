import { FC } from 'react';
import { motion } from 'framer-motion';
import { fadeInOut } from '../../animations';
import { FaCheck, BsExclamationTriangleFill } from '../../assets/icons';

interface AlertProps {
  type: string;
  message: string;
}

const Alert: FC<AlertProps> = ({ type, message }): any => {
  if (type === 'success') {
    return (
      <motion.div
        {...fadeInOut}
        className="fixed z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-emerald-300 shadow-md flex items-center gap-4"
      >
        <FaCheck className="text-xl text-emerald-700" />
        <p className="text-xl text-emerald-700">{message}</p>
      </motion.div>
    );
  }

  if (type === 'warning') {
    return (
      <motion.div
        {...fadeInOut}
        className="fixed z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-red-300 shadow-md flex items-center gap-4"
      >
        <BsExclamationTriangleFill className="text-xl text-red-700" />
        <p className="text-xl text-red-700">{message}</p>
      </motion.div>
    );
  }

  if (type === 'danger') {
    return (
      <motion.div
        {...fadeInOut}
        className="fixed z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-red-500 shadow-md flex items-center gap-4"
      >
        <BsExclamationTriangleFill className="text-xl text-red-900" />
        <p className="text-xl text-red-900">{message}</p>
      </motion.div>
    );
  }

  if (type === 'info') {
    return (
      <motion.div
        {...fadeInOut}
        className="fixed z-50 top-32 right-12 px-4 py-2 rounded-md backdrop-blur-sm bg-blue-300 shadow-md flex items-center gap-4"
      >
        <BsExclamationTriangleFill className="text-xl text-blue-700" />
        <p className="text-xl text-blue-700">{message}</p>
      </motion.div>
    );
  }
};

export default Alert;
