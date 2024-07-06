import Image from "next/image";
import Link from "next/link";
import CompanyCard from "./components/CompanyCard";

const API_KEY = 'cq4p1i9r01qhh2h69aigcq4p1i9r01qhh2h69aj0';
// const symbols = [
//   'NTDOY', 'NTES', 'EA', 'TTWO', 'RBLX', 'NEXOY', 'CCOEY', 'BILI', 
//   'PLTK', 'UBSFY', 'DDI', 'GRVY', 'SOHU', 'MYPS', 'GMGI', 'SKLZ', 
//   'BHAT', 'GAME', 'TRUG', 'GDC', 'MSGM', 'GXAI'
// ];
const symbols = [
  'NTDOY', 'NTES', 'EA',
];
// Define the API endpoint
const fetchCompanyProfile = async (symbol) => {
  const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json(); // Ensure this waits for the JSON to be read
    //console.log(`${symbol}:`, data);
    return data;
  } catch (error) {
    console.error(`Error fetching company profile for ${symbol}:`, error);
    return null;
  }
};

// Modify fetchAllCompanyProfiles to collect and return results
const fetchAllCompanyProfiles = async () => {
  const profiles = [];
  for (const symbol of symbols) {
    const profile = await fetchCompanyProfile(symbol);
    if (profile) { // Ensure only successful responses are added
      profiles.push(profile);
    }
    // Adding a delay to avoid hitting rate limits
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  return profiles; // Return the collected profiles
};

export default async function Home() {
  const companyProfiles = await fetchAllCompanyProfiles();
  console.log('companyProfiles:', companyProfiles);
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Home</h1>
      <Link href="/detailedStockPage/1" className="text-blue-500 hover:underline">Stock1</Link>
      <Link href="/testingPage1" className="text-blue-500 hover:underline">Testing Page 1 to test components</Link>
      <Link href="/testingPage2" className="text-blue-500 hover:underline">Testing Page 2 to test components</Link>

      <h1 className="text-3xl font-bold">List of Company Stocks</h1>
      {
        companyProfiles.map((profile) => {
          return (
            <CompanyCard
              key={profile.ticker}
              ticker={profile.ticker}
              companyName={profile.name}
              stockValue={profile.shareOutstanding}
            />
          );
        })
      }
    </main>
  );
}
