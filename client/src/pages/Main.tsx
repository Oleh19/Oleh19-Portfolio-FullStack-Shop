import { FC } from 'react';
import { Header } from '../components';

const Main: FC = () => {
  return (
    <main className="w-screen min-h-screen flex items-center justify-center flex-col bg-primary">
      <Header />
    </main>
  );
};

export default Main;
