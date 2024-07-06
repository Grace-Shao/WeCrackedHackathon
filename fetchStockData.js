const axios = require('axios');

// Replace with your actual API key from Finnhub
const API_KEY = 'cq4p1i9r01qhh2h69aigcq4p1i9r01qhh2h69aj0';
const symbols = [
    'NTDOY', 'NTES', 'EA', 'TTWO', 'RBLX', 'NEXOY', 'CCOEY', 'BILI', 
    'PLTK', 'UBSFY', 'DDI', 'GRVY', 'SOHU', 'MYPS', 'GMGI', 'SKLZ', 
    'BHAT', 'GAME', 'TRUG', 'GDC', 'MSGM', 'GXAI'
];

// Define the API endpoint
const fetchCompanyProfile = async (symbol) => {
  const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${API_KEY}`;
  try {
    const response = await axios.get(url);
    console.log(`${symbol}:`, response.data);
  } catch (error) {
    console.error(`Error fetching company profile for ${symbol}:`, error);
  }
};

// Call the function for each symbol
const fetchAllCompanyProfiles = async () => {
  for (const symbol of symbols) {
    await fetchCompanyProfile(symbol);
    // Adding a delay to avoid hitting rate limits
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
};

fetchAllCompanyProfiles();