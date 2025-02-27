import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ExpenseList = styled.li`
  display: flex;
  flex-direction: column;
`;

const DetailedExpense = ({ expense, setExpense }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const expenseId = location.pathname.split('/')[2];

  const selectExpenseArr = expense.find((item) => item.id === expenseId);
  const [editDate, setEditDate] = useState(selectExpenseArr.date);
  const [editItem, setEditItem] = useState(selectExpenseArr.item);
  const [editAmount, setEditAmount] = useState(selectExpenseArr.amount);
  const [editDescription, setEditDescription] = useState(
    selectExpenseArr.description
  );

  // 핸들러 함수
  const handleDateChange = (event) => setEditDate(event.target.value);
  const handleItemChange = (event) => setEditItem(event.target.value);
  const handleAmountChange = (event) => setEditAmount(event.target.value);
  const handleDescriptionChange = (event) =>
    setEditDescription(event.target.value);

  // 수정 기능
  const expenseChange = (e) => {
    e.preventDefault();

    const updatedExpense = {
      id: expenseId,
      item: editItem,
      date: editDate,
      amount: Number(editAmount),
      description: editDescription,
    };

    const updatedExpenses = expense.map((exp) =>
      exp.id === expenseId ? updatedExpense : exp
    );

    setExpense(updatedExpenses);

    navigate('/');
  };

  // 삭제기능
  const deleteExpense = () => {
    if (confirm('지출 항목을 삭제 하시겠습니까?')) {
      const updatedExpenses = expense.filter((item) => item.id !== expenseId);

      setExpense(updatedExpenses);
      navigate('/');
    }
  };

  return (
    <form onSubmit={expenseChange} className="detail-expense-div">
      <ul className="expense-list">
        <ExpenseList>
          <div>
            <p>날짜</p>
            <input
              type="date"
              value={editDate}
              name="editDate"
              onChange={handleDateChange}
            />
          </div>
          <div>
            <p>항목</p>
            <input
              type="text"
              value={editItem}
              name="editItem"
              onChange={handleItemChange}
            />
          </div>
          <div>
            <p>금액</p>
            <input
              type="number"
              value={editAmount}
              name="editAmount"
              onChange={handleAmountChange}
            />
          </div>
          <div>
            <p>내용</p>
            <input
              type="text"
              value={editDescription}
              name="editDescription"
              onChange={handleDescriptionChange}
            />
          </div>
        </ExpenseList>
        <div className="button-list">
          <button type="submit" className="edit-btn">
            수정
          </button>
          <button className="delete-btn" onClick={deleteExpense}>
            삭제
          </button>
          <button
            onClick={() => {
              navigate('/');
            }}
            className="go-back-btn"
          >
            뒤로가기
          </button>
        </div>
      </ul>
    </form>
  );
};

export default DetailedExpense;
