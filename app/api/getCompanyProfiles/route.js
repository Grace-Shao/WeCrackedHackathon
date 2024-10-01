import { NextResponse, NextRequest } from 'next/server';
import yahooFinance from 'yahoo-finance2';
import { setTimeout } from 'timers/promises';

const API_KEY = process.env.REACT_APP_API_KEY ;
console.log(API_KEY);

const symbols = [
  'BILI', 'BHAT', 'CCOEY', 'DDI', 'EA', 'GDC', 'GMGI', 'GRVY', 'GXAI',
  'MSGM', 'MYPS', 'NEXOY', 'NTDOY', 'NTES', 'PLTK', 'RBLX', 'SKLZ',
  'SOHU', 'TRUG', 'TTWO', 'UBSFY'
];

async function fetchSymbolData(symbol, period) {
  const queryOptions = { period };

  // Fetch historical data
  const historicalData = await yahooFinance.historical(symbol, queryOptions);

  // Fetch company profile
  const profile = await fetchCompanyProfile(symbol);

  // Combine historical data and profile
  return {
    symbol,
    profile,
    historicalData,
  };
}

async function fetchCompanyProfile(symbol) {
  // Replace with actual implementation to fetch company profile
  // This is just a placeholder function
  return {
    name: "Company Name",
    description: "Company Description",
    sector: "Technology",
  };
}

// API route handler
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const period = searchParams.get('period') || '1y';
  const results = [];

  try {
    for (const symbol of symbols) {
      const result = await fetchSymbolData(symbol, period);
      results.push(result);
      // Adding a delay to avoid hitting rate limits
      await setTimeout(1000);
    }

    // Return the combined results
    return NextResponse.json({ results });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
