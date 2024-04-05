import React, { useState } from 'react';
import './styles.css'
const New = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="wrapper">
      <div className="header">
        <ul>
          {[1, 2, 3, 4, 5].map((num) => (
            <li key={num} className={step === num ? 'active form_' + num + '_progessbar' : 'form_' + num + '_progessbar'}>
              <div>
                <p>{num}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="form_wrap">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className={`form_${num} data_info`} style={{ display: step === num ? 'block' : 'none' }}>
            {num === 1 && (
              <div>
                <h2>Personal Details</h2>
                <form>
                  <div className="form_container">
                    <div className="input_wrap">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" className="input" id="name" />
                    </div>
                    <div className="input_wrap">
                      <label htmlFor="age">Age</label>
                      <input type="text" name="age" className="input" id="age" />
                    </div>
                    <div className="input_wrap">
                      <label htmlFor="gender">Gender</label>
                      <select name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
            )}
            {num === 2 && (
              <div>
                <h2>Financial Details</h2>
                <form>
                  <div className="form_container">
                    <div className="input_wrap">
                      <label htmlFor="salary">What is your approximate salary (monthly)?</label>
                      <input type="text" name="salary" className="input" id="salary" />
                    </div>
                    <div className="input_wrap">
                      <label htmlFor="expenses">What are your estimated monthly expenses (Needs, Wants, Rents, Loans)?</label>
                      <input type="text" name="expenses" className="input" id="expenses" />
                    </div>
                    <div className="input_wrap">
                      <label htmlFor="savings">What are your current monthly savings?</label>
                      <input type="text" name="savings" className="input" id="savings" />
                    </div>
                  </div>
                </form>
              </div>
            )}
            {num === 3 && (
              <div>
                <h2>Risk Tolerance</h2>
                <form>
                  <div className="form_container">
                    <div className="input_wrap">
                      <label htmlFor="risk">What is your Risk Tolerance in terms of finance?</label>
                      <select name="risk" id="risk">
                        <option value="lowRisk">Low Risk</option>
                        <option value="moderateRisk">Moderate Risk</option>
                        <option value="highRisk">High Risk</option>
                      </select>
                    </div>
                    <div className="input_wrap">
                      <label htmlFor="previous">Have you invested in any stocks, bonds, or mutual funds previously?</label>
                      <input type="text" name="previous" className="input" id="previous" />
                    </div>
                  </div>
                </form>
              </div>
            )}
            {num === 4 && (
              <div>
                <h2>Investment Preference</h2>
                <form>
                  <div className="form_container">
                    <div className="input_wrap">
                      <label htmlFor="preference">Do you have any specific investment goals (e.g., retirement, education)?</label>
                      <input type="text" name="preference" className="input" id="preference" />
                    </div>
                    <div className="input_wrap">
                      <label htmlFor="time">What is your investment time horizon?</label>
                      <select name="time" id="time">
                        <option value="shortTerm">Less than 5 Years</option>
                        <option value="midTerm">5-10 Years</option>
                        <option value="longTerm">More than 10 Years</option>
                      </select>
                    </div>
                    <div className="input_wrap">
                      <label htmlFor="knowledge">What type of investment plans do you know already?</label>
                      <input type="text" name="knowledge" className="input" id="knowledge" />
                    </div>
                  </div>
                </form>
              </div>
            )}
            {num === 5 && (
              <div>
                <h2>Review Info</h2>
                <div className="form_container">
                  <p>Email Address: <span id="review_email"></span></p>
                  <p>Password: <span id="review_password"></span></p>
                  <p>User Name: <span id="review_user_name"></span></p>
                  <p>First Name: <span id="review_first_name"></span></p>
                  <p>Last Name: <span id="review_last_name"></span></p>
                  <p>Current Company: <span id="review_company"></span></p>
                  <p>Total Experience: <span id="review_experience"></span></p>
                  <p>Designation: <span id="review_designation"></span></p>
                  <p>Phone Number: <span id="review_phone"></span></p>
                  <p>Address: <span id="review_address"></span></p>
                  <p>City: <span id="review_city"></span></p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="btns_wrap">
        {[1, 2, 3, 4, 5].map((num) => (
          <div key={num} className={`common_btns form_${num}_btns`} style={{ display: step === num ? 'flex' : 'none' }}>
            {num > 1 && (
              <button type="button" className="btn_back" onClick={prevStep}>
                <span className="icon">Back</span>
              </button>
            )}
            {num < 5 && (
              <button type="button" className="btn_next" onClick={nextStep}>
                Next <span className="icon"><ion-icon name="arrow-forward-sharp"></ion-icon></span>
              </button>
            )}
            {num === 5 && (
              <button type="button" className="btn_done">
                Done
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
