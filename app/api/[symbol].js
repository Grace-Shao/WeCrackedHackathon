// pages/api/stocks/[symbol].js
import { NextApiRequest, NextApiResponse } from 'next';
import yahooFinance from 'yahoo-finance2';

export default async function handler(req, res) {
  const { symbol, period } = req.query;

  try {
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

    const data = await yahooFinance.historical(symbol, queryOptions);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
