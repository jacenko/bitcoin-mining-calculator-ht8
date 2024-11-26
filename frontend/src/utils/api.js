export async function calculateProfitability(inputData) {
  try {
    const response = await fetch('http://127.0.0.1:8000/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'An error occurred');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
