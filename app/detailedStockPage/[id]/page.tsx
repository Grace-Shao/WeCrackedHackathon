import Navbar from '@/app/components/Navbar';
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

const getNews = async (symbol) => {
  try {
    const res = await fetch(`https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=2024-06-01&to=2024-07-01&token=${API_KEY}`);
    return res.json();
  } catch (error) {
    console.log("Error loading news: ", error);
  }
}

export default async function ViewStock({ params }) {
  const { id } = params;
  const quote = await getQuote(id);
  const news = await getNews(id);
  return (
    <div>
      <Navbar />
      <div className="flex items-start max-w-full mx-auto py-8 px-4 bg-gray-900">
      <div className="mb-10 mr-8">
        <h1 className="text-4xl font-bold text-white mb-4">{id} Quote</h1>
        <p className="text-2xl text-gray-300">Current Price: <span className="font-semibold text-white">{quote.c}</span></p>
        <p className="text-2xl text-gray-300">High: <span className="font-semibold text-white">{quote.h}</span></p>
        <p className="text-2xl text-gray-300">Low: <span className="font-semibold text-white">{quote.l}</span></p>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white mb-6">Company News</h1>
        <ul>
          {news.map((article, key) => (
            <li key={key} className="max-w-4xl mb-4 bg-gray-800 shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  <a href={article.url} className="hover:text-blue-400 transition duration-300 ease-in-out text-white">{article.headline}</a>
                </h2>
                <p className="text-gray-400">{article.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
}