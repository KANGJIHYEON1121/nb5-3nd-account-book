import ExpenditureForm from '../components/ExpenditureForm';
import MonthView from '../components/MonthView';
import ExpenditureList from '../components/ExpenditureList';
import GlobalStyle from '../GlobalStyle';
import { useState } from 'react';

const App = ({ setExpense }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main>
      <GlobalStyle />
      <ExpenditureForm setExpense={setExpense} />
      <MonthView />
      <ExpenditureList />
    </main>
  );
};

export default App;
