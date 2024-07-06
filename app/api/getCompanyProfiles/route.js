import { NextResponse } from "next/server";
const API_KEY = 'cq4p1i9r01qhh2h69aigcq4p1i9r01qhh2h69aj0';
// save to json file
// have the list of companies displayed
// when entering companies, then fetch url
// const symbols = [
//   'NTDOY', 'NTES', 'EA', 'TTWO', 'RBLX', 'NEXOY', 'CCOEY', 'BILI', 
//   'PLTK', 'UBSFY', 'DDI', 'GRVY', 'SOHU', 'MYPS', 'GMGI', 'SKLZ', 
//   'BHAT', 'GAME', 'TRUG', 'GDC', 'MSGM', 'GXAI'
// ];
const symbols = [
  'NTDOY', 'NTES', 'EA',
];

const fetchCompanyProfile = async (symbol) => {
    const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json(); // Ensure this waits for the JSON to be read
      console.log(`${symbol}:`, data);
      return data;
    } catch (error) {
      console.error(`Error fetching company profile for ${symbol}:`, error);
      return null;
    }
  };

export async function GET() {
    const profiles = [];
    for (const symbol of symbols) {
        const profile = await fetchCompanyProfile(symbol);
        if (profile) { // Ensure only successful responses are added
        profiles.push(profile);
        }
        // Adding a delay to avoid hitting rate limits
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    console.log('profiles:', profiles);
    Promise.all(profiles);
    return NextResponse.json({profiles}); // Return the collected profiles
} 


