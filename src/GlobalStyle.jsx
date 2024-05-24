import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
  body {
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
  }

  body form {
    width: 100%;
    border-radius: 10px;
    margin-top: 30px;
    box-shadow: 0 0 5px;
    background-color: white;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

body form div {
  width: 20%;
  font-size: 15px;
  padding: 20px;
}

body form div input {
  height: 20px;
  border-radius: 5px;
  border: 1px solid skyblue;
  padding:3px;
  font-size: 15px;
  margin-top: 5px;
}

body form button {
  width: 5%;
  background-color: blueviolet;
  color: white;
  border-radius: 5px;
  border: none;
  height: 28px;
  cursor: pointer;
  position: relative;
  top: 9px;
}

.month-btn-div {
  border-radius: 10px;
  padding: 30px;
  margin: 30px 0 30px 0;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 5px;
  background-color: white;
}

ul {
  border-radius: 10px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px;
  background-color: white;
}

ul li {
  border: 1px solid #CCC;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
}

.expense-border {
  cursor: pointer;
}

ul p {
  margin: 5px;
}

.date {
  font-size: 14px;
  color: gray;
}

.item-content {
  font-size: 18px;
  font-weight: 500;
}

.price {
  font-size: 20px;
  font-weight: 700;
}

.detail-expense-div {
  margin-top: 50px;
}

.expense-list {
  width: 100%;
}

.expense-list div {
  width: 90%;
}

.expense-list div input {
  width: 100%;
  height: 30px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 5px;
  font-size: 18px;
  text-align: center;
}

.button-list {
  display: flex;
}

ul div button {
  width: 100px;
  height: 35px;
  margin-top: 10px;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid gray;
  font-size: 15px;
  font-weight: 500;
}

.edit-btn:hover {
  background-color: blue;
  color: white;
  border: none;
}

.delete-btn:hover {
  background-color: red;
  color: white;
  border: none;
}

.go-back-btn:hover {
  background-color: gray;
  color: white;
  border: none;
}

`;

export default GlobalStyle;
