import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [countMonthlyExpenses, setCountMonthlyExpenses] = useState(0);
  const [monthlyExpensesValue, setMonthlyExpensesValue] = useState("");
  const calculateMonthlyExpenses = () => {
    const temp = monthlyExpensesValue.split("\n");
    let totalMonthlyExpenses = 0;
    temp.map((monthlyExpense) => {
      let temSplit = monthlyExpense.split(" ");
      if (temSplit.length > 0) {
        if (temSplit[0].indexOf("rs") > -1) {
          let replaceRs = temSplit[0].trim().replace("rs", "");
          totalMonthlyExpenses += Number(replaceRs);

        } else if (temSplit[0].indexOf("k") > -1) {
          let replaceK = temSplit[0].trim().replace("k", "");
          totalMonthlyExpenses += Number(replaceK) * 1000;
        }
      }
    })
    setCountMonthlyExpenses(totalMonthlyExpenses)
  }

  return (
    <>
      <div className='heading'>Hello Everyone</div>
      <br></br>
      <div className='container'>
        <div className='label'>Enter your monthly expenses data/record</div>
        <textarea value={monthlyExpensesValue} onChange={(ent) => setMonthlyExpensesValue(ent.target.value)} placeholder='enter your month expenses record' style={{ width: "1000px" }} rows={20} />
        <div>
          <button onClick={calculateMonthlyExpenses}>Calculate</button>
        </div>
        <div className='label'>
          Your total monthly expenses is: <strong>{countMonthlyExpenses}</strong>
        </div>
      </div>

    </>
  );
}

export default App;
