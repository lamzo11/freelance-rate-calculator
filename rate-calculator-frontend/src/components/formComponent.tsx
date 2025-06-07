import React, { useState } from 'react';
import { FormData, CalculationResult } from './interfaces';
import { ResultDisplay } from './resultDisplay';
import { InputField } from './inputFieldProps';



const RateCalculatorForm = () => {
  const [formData, setFormData] = useState<FormData>({
    monthlyRent: 0,
    monthlyInsurance: 0,
    monthlyTax: 0,
    monthlyTransport: 0,
    otherMonthlyExpenses: 0,
    vacationDays: 0,
    sickDays: 0,
    desiredSavingsPercentage: 0
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Sending data:', formData);
      const response = await fetch('http://localhost:8080/api/calculate/rate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

       if (!response.ok) {
        const errorData = await response.json();
        console.error('Server error:', errorData); // Debug log
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      setResult(result);
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

   return (
    <div className="calculator-container">
      <div className="card">
        <h2>Freelance Rate Calculator</h2>
        <form onSubmit={handleSubmit} className="calculator-form">
          <InputField
            label="Monthly Rent (€)"
            name="monthlyRent"
            value={formData.monthlyRent}
            onChange={handleChange}
            min={0}
          />
          <InputField
            label="Monthly Insurance (€)"
            name="monthlyInsurance"
            value={formData.monthlyInsurance}
            onChange={handleChange}
            min={0}
          />
                  <InputField
            label="Monthly Tax (€)"
            name="monthlyTax"
            value={formData.monthlyTax}
            onChange={handleChange}
            min={0}
          />
          <InputField
            label="Monthly Transport (€)"
            name="monthlyTransport"
            value={formData.monthlyTransport}
            onChange={handleChange}
            min={0}
          />
          <InputField
            label="Other Monthly Expenses (€)"
            name="otherMonthlyExpenses"
            value={formData.otherMonthlyExpenses}
            onChange={handleChange}
            min={0}
          />
          <InputField
            label="Vacation Days per Year"
            name="vacationDays"
            value={formData.vacationDays}
            onChange={handleChange}
            min={0}
            max={365}
          />
          <InputField
            label="Sick Days per Year"
            name="sickDays"
            value={formData.sickDays}
            onChange={handleChange}
            min={0}
            max={365}
          />
          <InputField
            label="Desired Savings (%)"
            name="desiredSavingsPercentage"
            value={formData.desiredSavingsPercentage * 100}
            onChange={(e) => {
              const value = parseFloat(e.target.value) || 0;
              setFormData(prev => ({
                ...prev,
                desiredSavingsPercentage: value / 100
              }));
            }}
            min={0}
            max={100}
          />
          
          <button type="submit" className="submit-button">
            Calculate Rates
          </button>
        </form>

        {result && <ResultDisplay result={result} />}
      </div>
    </div>
  );
  
};

export default RateCalculatorForm;