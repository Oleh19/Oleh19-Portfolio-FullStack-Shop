import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, Main } from './pages';
<<<<<<< HEAD
import './index.css'
=======
>>>>>>> 836ea06 (Login Screen)

const App: FC = () => {
  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
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
