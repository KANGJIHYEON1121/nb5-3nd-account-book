import ExpenditureForm from '../components/ExpenditureForm';
import MonthView from '../components/MonthView';
import ExpenditureList from '../components/ExpenditureList';
import GlobalStyle from '../GlobalStyle';

const App = () => {
  return (
    <main>
      <GlobalStyle />
      <ExpenditureForm />
      <MonthView />
      <ExpenditureList />
    </main>
  );
};

export default App;
