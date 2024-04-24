import { useState } from "react";
import Header1 from "./Header1/Header1";

import ResultTable from "./ResultsTable/ResultsTable";
import UserInput from "./UserInput/UserInput";
import './sip.css' ;
function Sip() {
  const [userInput, setUserInput] = useState(null);
  const handleCalculate = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header1/>
      <UserInput onCalculate={handleCalculate} />
      {!userInput && <p style={{ textAlign: "center" }}>No investment found</p>}
      {userInput && (
        <ResultTable
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default Sip;

