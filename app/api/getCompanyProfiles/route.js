import { NextResponse } from "next/server";
import yahooFinance from 'yahoo-finance2';

const API_KEY = process.env.REACT_APP_API_KEY;


// const fetchCompanyProfile = async (symbol) => {
//     const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${API_KEY}`;
//     try {
//       const response = await fetch(url);
//       const data = await response.json(); // Ensure this waits for the JSON to be read
//       console.log(`${symbol}:`, data);
//       return data;
//     } catch (error) {
//       console.error(`Error fetching company profile for ${symbol}:`, error);
//       return null;
//     }
//   };

// Placeholder function for fetching company profile
async function fetchCompanyProfile(symbol) {
  // Simulate an API call to fetch company profile data
  // Replace this with your actual implementation
  return {
    symbol,
    name: `Company ${symbol}`,
    marketCap: Math.floor(Math.random() * 1000000),
  };
}

// Handler function to fetch data for a single symbol
async function fetchSymbolData(symbol, period) {
  const toDate = new Date();
  const periods = {
    '1d': 1,
    '1w': 7,
    '1m': 30,
    '6m': 180,
    '1y': 365,
    '5y': 1825,
  };

  const days = periods[period] || periods['1y'];
  const fromDate = new Date(toDate);
  fromDate.setDate(toDate.getDate() - days);

  const queryOptions = {
    period1: fromDate.toISOString(),
    period2: toDate.toISOString(),
  };

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

// API route handler
export async function GET(req, res) {
  const { period } = req.query;
  const results = [];

  try {
    for (const symbol of symbols) {
      const result = await fetchSymbolData(symbol, period);
      results.push(result);
      // Adding a delay to avoid hitting rate limits
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    // Return the combined results
    return NextResponse.json({ results });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
