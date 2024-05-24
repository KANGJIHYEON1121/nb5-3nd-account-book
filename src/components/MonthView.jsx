import { useContext } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { AccountContext } from '../context/AccountContext';

const Button = styled.button`
  width: 15%;
  height: 50px;
  font-size: 20px;
  background-color: ${(props) => (props.$active ? 'darkgray' : 'white')};
  color: ${(props) => (props.$active ? 'white' : 'black')};
  margin: 10px 0 10px 0;
  cursor: pointer;
  border-radius: 10px;
  border: #ccc;

  &:hover {
    background-color: lightgray;
    color: white;
  }
`;

const MonthView = () => {
  const monthArr = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];

  useEffect(() => {
    setActiveIndex(JSON.parse(localStorage.getItem('selectedMonth')) - 1);
  }, []);

  const { activeIndex, setActiveIndex } = useContext(AccountContext);

  const monthClick = (index) => {
    setActiveIndex(index);
    localStorage.setItem('selectedMonth', JSON.stringify(index + 1));
    // const textsObj = JSON.stringify(inputValue); // 객체, 배열 -> 문자열
    // window.localStorage.setItem('texts', '홍길동');  // 스토리지에 저장
    // window.localStorage.getItem('texts');  // 스토리지 값 읽기
    // const textsObj = JSON.parse(inputValue); // 문자열 -> 객체, 배열
  };

  return (
    <div className="month-btn-div">
      {monthArr.map((monthButton, index) => {
        return (
          <Button
            key={index}
            $active={activeIndex === index}
            onClick={() => monthClick(index)}
          >
            {monthButton}
          </Button>
        );
      })}
    </div>
  );
};

export default MonthView;
