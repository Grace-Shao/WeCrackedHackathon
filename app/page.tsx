import Image from "next/image";
import Link from "next/link";
import CompanyCard from "./components/CompanyCard";
import Navbar from "./components/Navbar";

const API_KEY = 'cq4p1i9r01qhh2h69aigcq4p1i9r01qhh2h69aj0';
const symbols = [
  'BILI', 'BHAT', 'CCOEY', 'DDI', 'EA', 'GDC', 'GMGI', 'GRVY', 'GXAI',
  'MSGM', 'MYPS', 'NEXOY', 'NTDOY', 'NTES', 'PLTK', 'RBLX', 'SKLZ',
  'SOHU', 'TRUG', 'TTWO', 'UBSFY'
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

const fetchAllCompanyProfiles = async () => {
  try {
    // Map each symbol to a fetch promise, catching errors individually to avoid one failure causing all to fail
    const fetchPromises = symbols.map(symbol =>
      fetchCompanyProfile(symbol).catch(error => {
        console.error(`Error fetching profile for ${symbol}:`, error);
        return null; // Return null or an appropriate value for failed requests
      })
    );

    // Use Promise.all to wait for all fetches to complete
    const profiles = await Promise.all(fetchPromises);

    // Filter out null values in case some requests failed
    return profiles.filter(profile => profile !== null);
  } catch (error) {
    console.error("Error fetching company profiles:", error);
    return [];
  }
};

export default async function Home() {
  const companyProfiles = await fetchAllCompanyProfiles();
  console.log('companyProfiles:', companyProfiles);
  return (
    <main className="flex flex-col items-center justify-center">
      <Navbar />
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
