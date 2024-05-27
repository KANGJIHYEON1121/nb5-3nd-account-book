import ExpenditureForm from '../components/ExpenditureForm';
import MonthView from '../components/MonthView';
import ExpenditureList from '../components/ExpenditureList';
import GlobalStyle from '../GlobalStyle';
import { useState } from 'react';

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main>
      <GlobalStyle />
      <ExpenditureForm />
      <MonthView activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <ExpenditureList activeIndex={activeIndex} />
    </main>
  );
};

export default App;
