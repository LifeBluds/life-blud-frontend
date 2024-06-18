// file: src/contexts/Contex.js
import React, { createContext, useContext, useState } from 'react';
const ToggleBorderContext = createContext();
export const useToggleBorder = () => useContext(ToggleBorderContext);


export const ToggleBorderProvider = ({ children }) => {
  const [activeCard, setActiveCard] = useState(null);
  const [cardValue, setCardValue] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    occupation: '',
    city: '',
    state: '',
    streetAddress: '',
    // Add more fields as necessary for other steps
  });
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5; // Total number of steps in the form

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleCard = (index) => {
    setActiveCard(activeCard === index ? null : index);
    console.log(index);
  };

  const updateCardValue = (value) => {
    setCardValue(value);
    console.log(value)
  };

  return (
      <ToggleBorderContext.Provider value={{ activeCard, toggleCard, cardValue, updateCardValue,handleNext, handlePrev, formData, setFormData, currentStep, setCurrentStep }}>
        {children}
      </ToggleBorderContext.Provider>
  );
};




