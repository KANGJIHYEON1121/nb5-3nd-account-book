import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../context/AccountContext';

const ExpenditureList = () => {
  const month = JSON.parse(localStorage.getItem('selectedMonth'));
  const navigate = useNavigate();
  const contextData = useContext(AccountContext);

  return (
    <div>
      <ul>
        {contextData.expense
          .filter((filteredExpenseList) => {
            return Number(filteredExpenseList.date.split('-')[1]) === month;
          })
          .map((expenseList) => {
            return (
              <li
                className="expense-border"
                key={expenseList.id}
                onClick={() => {
                  navigate(`/detailedExpense/${expenseList.id}`);
                }}
              >
                <div>
                  <p className="date">{expenseList.date}</p>
                  <p className="item-content">
                    {expenseList.item} - {expenseList.description}
                  </p>
                </div>
                <div className="price">
                  <p>{expenseList.amount.toLocaleString('ko-KR')} 원</p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ExpenditureList;
