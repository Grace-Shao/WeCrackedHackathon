import Link from "next/link";
import CompanyCard from "../components/CompanyCard";
import Navbar from "../components/Navbar";


const symbols = [
  'BILI', 'BHAT', 'CCOEY', 'DDI', 'EA', 'GDC', 'GMGI', 'GRVY', 'GXAI',
  'MSGM', 'MYPS', 'NEXOY', 'NTDOY', 'NTES', 'PLTK', 'RBLX', 'SKLZ',
  'SOHU', 'TRUG', 'TTWO', 'UBSFY'
];

const fetchCompanyProfile = async (symbol) => {
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

const fetchAllCompanyProfiles = async () => {
  try {
    const fetchPromises = symbols.map(symbol =>
      fetchCompanyProfile(symbol).catch(error => {
        console.error(`Error fetching profile for ${symbol}:`, error);
        return null;
      })
    );

    const profiles = await Promise.all(fetchPromises);
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
<main style={{ backgroundColor: '#101010' }} className="flex flex-col items-center justify-center text-white min-h-screen ">
      <Navbar />
      <h1 className="text-3xl font-bold my-8" style={{ color: '#C9C9C9' }}>
  List of Video Game Company Stocks
</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-4/5" style = {{margin: '10px'}}>
        {companyProfiles.map((profile) => (
          <CompanyCard
            key={profile.ticker}
            ticker={profile.ticker}
            companyName={profile.name}
            stockValue={profile.shareOutstanding}
            logo={profile.logo}
          />
        ))}
      </div>
    </main>
  );
}
