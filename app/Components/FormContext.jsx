
import React, { createContext, useContext, useState } from 'react';

const MultiFormContext = createContext();
export const useMultiForm = () => useContext(MultiFormContext);
export const MultiFormContextProvider =({children}) =>{
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
  
    return(
      <MultiFormContext.Provider value={{ formData, setFormData, currentStep, setCurrentStep, totalSteps, handleNext, handlePrev }}>
        {children}
      </MultiFormContext.Provider>
    )
}