import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DBHeader } from '../index';
import DBHome from './DBHome';
import DBItems from './DBItems';
import DBNewItems from './DBNewItems';
import DBOrders from './DBOrders';

const DBRightSection: FC = () => {
  return (
    <div className="flex flex-col py-12  px-12 flex-1 h-full">
      <DBHeader />
      <div className="flex flex-col flex-1 overflow-y-scroll scrollbar-none ">
        <Routes>
          <Route
            path="/home"
            element={<DBHome />}
          />
          <Route
            path="/orders"
            element={<DBOrders />}
          />
          <Route
            path="/items"
            element={<DBItems />}
          />
          <Route
            path="/newItems"
            element={<DBNewItems />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default DBRightSection;
