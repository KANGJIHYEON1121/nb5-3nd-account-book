import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailedExpense from '../pages/DetailedExpense';
import Home from '../pages/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailedExpense/:id" element={<DetailedExpense />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
