import { useNavigate } from 'react-router-dom';

const ExpenditureList = ({ expense }) => {
  const month = JSON.parse(localStorage.getItem('selectedMonth'));
  const navigate = useNavigate();

  return (
    <div>
      <ul>
        {expense
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
