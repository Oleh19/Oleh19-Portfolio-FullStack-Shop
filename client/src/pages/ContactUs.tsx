import { FC } from 'react';
import { MapIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactUs: FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:tkac19061998@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen w-full flex relative flex-col text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto px-10 items-center ">

      <div className="flex flex-col space-y-10">
        <h4 className="xs:text-xl xs:mt-8 sm:text-4xl font-semibold text-center ">
          I can help you. {' '}
          <span className="decoration-red-500 underline">Lets Talk</span>
        </h4>

        <div className="xs:space-y-1 sm:space-y-10 xs:text-sm sm:text-2xl xs:ml-5">
          <div className="flex items-center space-x-5">
            <EnvelopeIcon className=" text-red-500 h-7 w-7 animate-pulse " />
            <p>tkac19061998@gmail.com</p>
          </div>

          <div className="flex items-center space-x-5">
            <MapIcon className=" text-red-500 h-7 w-7 animate-pulse " />
            <p>Kyiv, Ukraine</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 xs:w-[90%] sm:w-fit mx-auto "
        >
          <div className=" flex overflow-hidden  space-x-2">
            <input
              {...register('name')}
              placeholder="Name"
              className=" outline-none bg-slate-400/10 rounded-sm border-b xs:pl-2 sm:px-6 sm:py-4 border-black text-gray-500 placeholder-gray-500 transition-all focus:text-black focus:border-red-700 hover:border-gray-700; "
              type="text"
            />
            <input
              {...register('email')}
              placeholder="Email"
              className=" outline-none bg-slate-400/10 rounded-sm border-b xs:pl-2 sm:px-6 sm:py-4 border-black text-gray-500 placeholder-gray-500 transition-all focus:text-black focus:border-red-700 hover:border-gray-700; "
              type="email"
            />
          </div>

          <input
            {...register('subject')}
            placeholder="Subject"
            className=" outline-none bg-slate-400/10 rounded-sm border-b xs:pl-2 sm:px-6 sm:py-4 border-black text-gray-500 placeholder-gray-500 transition-all focus:text-black focus:border-red-700 hover:border-gray-700; "
            type="text"
          />

          <textarea
            {...register('message')}
            placeholder="Message"
            className=" outline-none bg-slate-400/10 rounded-sm border-b xs:pl-2 sm:px-6 sm:py-4 border-black text-gray-500 placeholder-gray-500 transition-all focus:text-black focus:border-red-700 hover:border-gray-700; "
          />
          <button
            type="submit"
            className="bg-red-500 py-5 px-10 rounded-md text-black font-bold text-lg "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs