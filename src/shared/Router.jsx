import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailedExpense from '../pages/DetailedExpense';
import Home from '../pages/Home';
import { useState } from 'react';

const Router = () => {
  const [expense, setExpense] = useState([
    {
      id: '25600f72-56b4-41a7-a9c2-47358580e2f8',
      date: '2024-01-05',
      item: '식비',
      amount: 100000,
      description: '세광양대창',
    },
    {
      id: '25600f72-53b4-4187-a9c2-47358580e2f8',
      date: '2024-01-10',
      item: '도서',
      amount: 40500,
      description: '모던 자바스크립트',
    },
    {
      id: '24310f72-56b4-41a7-a9c2-458580ef1f8',
      date: '2024-02-02',
      item: '식비',
      amount: 50000,
      description: '회식',
    },
    {
      id: '25600f72-99b4-41z7-e4h6-47312365e2f8',
      date: '2024-02-02',
      item: '간식',
      amount: 500,
      description: '아이스크림',
    },
    {
      id: '25143e72-16e2-22a7-a9c2-47358580e2f8',
      date: '2024-02-02',
      item: '여행',
      amount: 1055000,
      description: '일본여행',
    },
    {
      id: '25600f72-97p2-14a7-a9c2-47363950e2t8',
      date: '2024-02-02',
      item: '미용',
      amount: 155000,
      description: '미용실',
    },
    {
      id: '24312f70-97q2-14a7-a9c2-47132950e2t8',
      date: '2024-02-02',
      item: '도서',
      amount: 75000,
      description:
        '자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발',
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home expense={expense} setExpense={setExpense} />}
        />
        <Route
          path="/detailedExpense/:id"
          element={
            <DetailedExpense expense={expense} setExpense={setExpense} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
