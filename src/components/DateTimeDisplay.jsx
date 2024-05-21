import React from 'react';
import styled from 'styled-components';

const DateTimeContainer = styled.div`
  font-size: 16px;
  color: #222831;
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric', 
    hour: 'numeric', 
    minute: '2-digit', 
    hour12: true 
  });
};

const DateTimeDisplay = ({ dateTimeString }) => {
  return (
    <DateTimeContainer>
      {formatDate(dateTimeString)}
    </DateTimeContainer>
  );
};

export default DateTimeDisplay;
