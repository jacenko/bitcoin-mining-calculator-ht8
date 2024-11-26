import React, { useState } from 'react';
import { calculateProfitability } from './utils/api';
import { formatKey, formatNumber } from './utils/format';

import BreakevenDisclaimer from './components/BreakevenDisclaimer';
import InputField from './components/InputField';

// Fields for the mining calculator form
const INPUT_FIELDS = [
  {
    label: 'Hash Rate (TH/s)',
    name: 'hash_rate',
    placeholder: 'e.g., 100',
  },
  {
    label: 'Power Consumption (Watts)',
    name: 'power_consumption',
    placeholder: 'e.g., 2000',
  },
  {
    label: 'Electricity Cost ($/kWh)',
    name: 'electricity_cost',
    placeholder: 'e.g., 0.1',
    step: '0.01',
  },
  {
    label: 'Initial Investment ($)',
    name: 'initial_investment',
    placeholder: 'e.g., 5000',
  },
];

function App() {
  const [inputData, setInputData] = useState({
    hash_rate: '100',
    power_consumption: '2000',
    electricity_cost: '0.1',
    initial_investment: '5000'
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [calculatedInitialInvestment, setCalculatedInitialInvestment] = useState(null);

  const isFormValid = Object.values(inputData).every((value) => value.trim() !== '');

  // Handle input changes
  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);
    setIsLoading(true);

    // Basic validation
    if (!isFormValid) {
      setError('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    try {
      setCalculatedInitialInvestment(parseFloat(inputData.initial_investment));
      const data = await calculateProfitability({
        hash_rate: parseFloat(inputData.hash_rate),
        power_consumption: parseFloat(inputData.power_consumption),
        electricity_cost: parseFloat(inputData.electricity_cost),
        initial_investment: parseFloat(inputData.initial_investment)
      });
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Bitcoin Mining Calculator</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
        {INPUT_FIELDS.map(({ label, name, placeholder, step }) => (
            <InputField
              key={name}
              label={label}
              name={name}
              value={inputData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              step={step}
            />
          ))}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="
                bg-gradient-to-r from-blue-500 to-purple-500
                text-white rounded-md px-6 py-2
                focus:outline-none
                disabled:opacity-50 disabled:cursor-not-allowed
                transition-all duration-300
                hover:from-blue-600 hover:to-purple-600 hover:bg-gradient-to-l
              "
              disabled={!isFormValid || isLoading}
            >
              Calculate
            </button>
          </div>

        </form>

        {isLoading ? (
          <div className="flex justify-center mt-6">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {/* Error Message */}
            {error && (
              <div className="mt-4 text-red-500 text-center">
                Error: {error}
              </div>
            )}

            {/* Result Display */}
            {result && (
              <div className="mt-8">
                <hr />
                <br />
                <h2 className="text-2xl font-bold mb-4 text-center">Results</h2>
                <BreakevenDisclaimer
                  yearlyProfit={result?.yearlyProfitUSD}
                  initialInvestment={calculatedInitialInvestment}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(result).map(([key, value]) => (
                    <div key={key} className="border border-gray-300 p-4 rounded-md">
                      <p className="font-semibold capitalize">{formatKey(key)}:</p>
                      <p>{formatNumber(value, key)}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}

export default App;
