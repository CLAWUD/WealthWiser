import React, { useState } from 'react';
import './styles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const New = () => {
  const [step, setStep] = useState(1);
  const [responses, setResponses] = useState({});
  const [chatbotResponse, setChatbotResponse] = useState('');
  const navigate = useNavigate();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const sendToOpenAI = async () => {
    try {
      const prompt = `
        Personal Details:
        Name: ${responses['question_1_1']}
        Age: ${responses['question_1_2']}
        Gender: ${responses['question_1_3']}

        Financial Details:
        Salary: ${responses['question_2_1']}
        Expenses: ${responses['question_2_2']}
        Savings: ${responses['question_2_3']}

        Risk Tolerance:
        Risk Tolerance Level: ${responses['question_3_1']}
        Previous Investments: ${responses['question_3_2']}

        Investment Preference:
        Investment Goals: ${responses['question_4_1']}
        Investment Time Horizon: ${responses['question_4_2']}
        Known Investment Plans: ${responses['question_4_3']}
        Segregate my salary into percentage out of 100 for Personal needs,emergency funds,stocks,provident fund,crypto currency,sip,mutual funds,bonds,gold,fixed deposit.Give me just the percentage and calculation of salary pointwise in listed form
      `;
      const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: Object.values(responses).map((response) => ({ role: 'user', content: prompt })),
      };
      const headers = {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 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',
      };
      const airesponse = await axios.post('https://api.openai.com/v1/chat/completions', requestBody, { headers });

      setChatbotResponse(airesponse.data.choices[0].message.content);
      navigate('/response', { state: { response: airesponse.data.choices[0].message.content } });
    } catch (error) {
      console.error('Error communicating with OpenAI API:', error.response?.data || error.message);
      // Handle error
    }
  };

  const handleChange = (event, question) => {
    setResponses({ ...responses, [question]: event.target.value });
  };

  return (
    <div className="wrapper">
      <div className="header">
        <ul>
          {[1, 2, 3, 4, 5].map((num) => (
            <li
              key={num}
              className={step === num ? 'active form_' + num + 'progessbar' : 'form' + num + '_progessbar'}
            >
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
            <h2>{num === 1 ? 'Personal Details' : num === 2 ? 'Financial Details' : num === 3 ? 'Risk Tolerance' : num === 4 ? 'Investment Preference' : 'Review Info'}</h2>
            {num < 5 && (
              <form>
                <div className="form_container">
                  <div className="input_wrap">
                    <label htmlFor={`question_${num}_1`}>
                      {num === 1
                        ? 'Name'
                        : num === 2
                        ? 'What is your approximate salary (monthly)?'
                        : num === 3
                        ? 'What is your Risk Tolerance in terms of finance?'
                        : 'Do you have any specific investment goals (e.g., retirement, education)?'}
                    </label>
                    <input
                      type="text"
                      name={`question_${num}_1`}
                      className="input"
                      id={`question_${num}_1`}
                      value={responses[`question_${num}_1`] || ''}
                      onChange={(e) => handleChange(e, `question_${num}_1`)}
                    />
                  </div>
                  <div className="input_wrap">
                    <label htmlFor={`question_${num}_2`}>
                      {num === 1
                        ? 'Age'
                        : num === 2
                        ? 'What are your estimated monthly expenses (Needs, Wants, Rents, Loans)?'
                        : num === 3
                        ? 'Have you invested in any stocks, bonds, or mutual funds previously?'
                        : 'What is your investment time horizon?'}
                    </label>
                    <input
                      type="text"
                      name={`question_${num}_2`}
                      className="input"
                      id={`question_${num}_2`}
                      value={responses[`question_${num}_2`] || ''}
                      onChange={(e) => handleChange(e, `question_${num}_2`)}
                    />
                  </div>
                  {num === 4 && (
                    <div className="input_wrap">
                      <label htmlFor={`question_${num}_3`}>What type of investment plans do you know already?</label>
                      <input
                        type="text"
                        name={`question_${num}_3`}
                        className="input"
                        id={`question_${num}_3`}
                        value={responses[`question_${num}_3`] || ''}
                        onChange={(e) => handleChange(e, `question_${num}_3`)}
                      />
                    </div>
                  )}
                </div>
              </form>
            )}
            {num === 5 && (
              <div className="form_container">
                <p>Email Address: {responses['review_email']}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="btns_wrap">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className={`common_btns form_${num}_btns`}
            style={{ display: step === num ? 'flex' : 'none' }}
          >
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
              <button type="button" className="btn_done" onClick={sendToOpenAI}>
                Submit
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
