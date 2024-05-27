import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addExpense } from '../redux/slices/expenseSlice';
// import { addExpense } from '../redux/modules/expense';

const ExpenditureForm = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState();
  const [item, setItem] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    const trimmedDate = (date || '').trim();
    const trimmedItem = (item || '').trim();
    const trimmedAmount = (amount || '').trim();
    const trimmedDescription = (description || '').trim();

    if (!trimmedDate || !trimmedItem || !trimmedAmount || !trimmedDescription) {
      alert('날짜, 항목, 금액, 내용을 입력해주세요.');
      return;
    }

    dispatch(
      addExpense({
        id: uuidv4(),
        date,
        item,
        amount: Number(amount),
        description,
      })
    );

    setDate('');
    setItem('');
    setAmount('');
    setDescription('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        날짜
        <input
          type="date"
          placeholder="YYYY-MM-DD"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div>
        항목
        <input
          type="text"
          placeholder="지출 항목"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
      </div>
      <div>
        금액
        <input
          type="number"
          placeholder="지출 금액"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>
      <div>
        내용
        <input
          type="text"
          placeholder="지출 내용"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <button type="submit">저장</button>
    </form>
  );
};

export default ExpenditureForm;
