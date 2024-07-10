const fetchQuote = async (symbol) => {
  const API_KEY = 'cq4p1i9r01qhh2h69aigcq4p1i9r01qhh2h69aj0';
  const url = `https://finnhub.io/api/v1/stock/recommendation?symbol=${symbol}&token=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
};

// Call the function and log the result
fetchQuote("EA")
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));
