'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import D3Chart from '@/app/components/D3Chart';
import MultiSelectDropdown from '@/app/components/MultiSelectDropdown';

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchCompanyProfile = async ({symbol}:{symbol:any}) => {
  const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching company profile for ${symbol}:`, error);
    return null;
  }
};

const fetchQuote = async ({symbol}:{symbol:any}) => {
  const url = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`;
  const response = await fetch(url);
  return await response.json();
};

const fetchNews = async ({symbol}:{symbol:any}) => {
  const url = `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=2024-06-01&to=2024-07-01&token=${API_KEY}`;
  const response = await fetch(url);
  return await response.json();
};

const fetchFinancials = async ({symbol}:{symbol:any}) => {
  const url = `https://finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all&token=${API_KEY}`;
  const response = await fetch(url);
  return await response.json();
};

const fetchHistoricalData = async ({symbol}:{symbol:any}) => {
  const url = `https://finnhub.io/api/v1/stock/recommendation?symbol=${symbol}&token=${API_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};

export default function ViewStock() {
  const params = useParams();
  const { id } = params;
  const [quote, setQuote] = useState(null);
  const [news, setNews] = useState([]);
  const [financials, setFinancials] = useState(null);
  const [historicalData, setHistoricalData] = useState([]);
  const [period, setPeriod] = useState('1m');
  const [visibleKeys, setVisibleKeys] = useState([{ value: 'buy', label: 'buy' }]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (id) {
      fetchQuote(id).then(setQuote);
      fetchNews(id).then(data => setNews(data.slice(0, 5))); // Limit to 5 news articles
      fetchCompanyProfile(id).then(setProfile);
      fetchFinancials(id).then(setFinancials);
      fetchHistoricalData(id, period).then(data => {
        if (Array.isArray(data)) {
          setHistoricalData(data);
        } else {
          setHistoricalData([]);
        }
      });
    }
  }, [id, period]);

  return (
  <div className="min-h-screen bg-gray-900 text-white" style={{ backgroundColor: '#101010' }}>
      <Navbar />
      <div className="container mx-auto py-8 px-4 flex flex-wrap">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          {quote && (
            <div className="mb-10">
              <div className="flex items-center mb-4">
                {profile && profile.logo && (
                  <img src={profile.logo} alt={`${id} logo`} className="w-12 h-12 mr-4" />
                )}
                <h1 className="text-4xl font-bold text-white">{id} Quote</h1>
              </div>
              <p className="text-2xl text-gray-300">Current Price: <span className="font-semibold text-white">${quote.c}</span></p>
              <p className="text-2xl text-gray-300">High: <span className="font-semibold text-white">${quote.h}</span></p>
              <p className="text-2xl text-gray-300">Low: <span className="font-semibold text-white">${quote.l}</span></p>
              <p className="text-2xl text-gray-300">Open: <span className="font-semibold text-white">${quote.o}</span></p>
              <p className="text-2xl text-gray-300">Previous Close: <span className="font-semibold text-white">${quote.pc}</span></p>
            </div>
          )}

          <div className="mb-4">
            <MultiSelectDropdown 
              selectedOptions={visibleKeys}
              setSelectedOptions={setVisibleKeys}
            />
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div id="chart">
            <D3Chart data={historicalData} visibleKeys={visibleKeys.map(option => option.value)} />
          </div>
        </div>

        <div className="w-full mt-8">
          <h1 className="text-4xl font-bold text-white mb-6 text-center">{id} - News</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {news.length > 0 ? (
              news.map((article, i) => (
                <div key={i} className="border-4 shadow-lg rounded-lg overflow-hidden border-slate-300 hover:scale-105 transition-transform duration-500"
  style={{ backgroundColor: '#1D1D1F', borderColor: '#383839', margin: '10px' }}>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300 ease-in-out text-white">{article.headline}</a>
                    </h2>
                    <p className="text-gray-400">{article.summary}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400">No news available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
