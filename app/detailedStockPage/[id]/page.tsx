import React from 'react';

// search up detailed information about the api
const API_KEY = 'cq4p1i9r01qhh2h69aigcq4p1i9r01qhh2h69aj0';

const getQuote = async (symbol) => {
  try {
    const res = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`);
    return res.json();
  } catch (error) {
    console.log("Error loading quote: ", error);
  }
};

export default async function ViewStock({ params }) {
  const { id } = params;
  const quote = await getQuote(id);
  return (
    <div className="flex justify-center m-16">
      <div>
        <h1 className="text-4xl">{id} Quote Price</h1>
        <p className="text-2xl">Current Price: {quote.c}</p>
        <p className="text-2xl">High: {quote.h}</p>
        <p className="text-2xl">Low: {quote.l}</p>
      </div>
    </div>
  );
}