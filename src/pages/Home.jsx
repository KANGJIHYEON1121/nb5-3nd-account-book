import ExpenditureForm from '../components/ExpenditureForm';
import MonthView from '../components/MonthView';
import ExpenditureList from '../components/ExpenditureList';
import GlobalStyle from '../GlobalStyle';
import { useState } from 'react';

const App = ({ expense, setExpense }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main>
      <GlobalStyle />
      <ExpenditureForm setExpense={setExpense} />
      <MonthView activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <ExpenditureList expense={expense} activeIndex={activeIndex} />
    </main>
  );
};

export default App;
