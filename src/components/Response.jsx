import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Response = () => {
  const [chatbotResponse, setChatbotResponse] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Get the response from the location state
    const response = location.state?.response;
    if (response) {
      setChatbotResponse(response);
    }
  }, [location.state]);

  return (
    <div style={{ height: '800px', width: '100%', border: '3px solid black', borderRadius:"20px" }}>
      <p style={{ color: 'blue', fontSize: '30px', fontFamily: 'Arial', fontWeight: '600' }}>
        {chatbotResponse}
      </p>
    </div>
  );
};

export default Response;
