import { v4 as uuidv4 } from 'uuid';

const ExpenditureForm = ({ setExpense }) => {
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const date = formData.get('date');
    const item = formData.get('item');
    const amount = formData.get('amount');
    const description = formData.get('description');

    if (!date.trim() || !item.trim() || !amount.trim() || !description.trim())
      return alert('날짜, 항목, 금액, 내용을 입력 해주세요.');

    // 입력 된 데이터 새로운 리스트로 생성
    const nextExpense = {
      id: uuidv4(),
      date,
      item,
      amount: Number(amount),
      description,
    };

    setExpense((prev) => [...prev, nextExpense]);

    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        날짜
        <input type="date" placeholder="YYYY-MM-DD" name="date" />
      </div>
      <div>
        항목
        <input type="text" placeholder="지출 항목" name="item" />
      </div>
      <div>
        금액
        <input type="number" placeholder="지출 금액" name="amount" />
      </div>
      <div>
        내용
        <input type="text" placeholder="지출 내용" name="description" />
      </div>
      <button type="submit">저장</button>
    </form>
  );
};

export default ExpenditureForm;
