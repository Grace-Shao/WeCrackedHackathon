// pages/api/periods.js
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const periods = {
  '1d': 1,
  '1w': 7,
  '1m': 30,
  '6m': 180,
  '1y': 365,
  '5y': 1825,
};

// API route handler
export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(periods);
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
