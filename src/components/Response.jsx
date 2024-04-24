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
    <div style={{margin:"50px"}}>
       <div style={{ height: '800px', width: '100%', margin:"auto"}}>
      <p style={{ color:"black", fontSize: '30px', fontFamily: 'Arial', fontWeight: '600' }}>
        {chatbotResponse}
      </p>
    </div>
    </div>
   
  );
};

export default Response;
