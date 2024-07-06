import Image from "next/image";
import Link from "next/link";
import CompanyCard from "./components/CompanyCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Home</h1>
      <Link href="/detailedStockPage/1" className="text-blue-500 hover:underline">Stock1</Link>
      <Link href="/testingPage1" className="text-blue-500 hover:underline">Testing Page 1 to test components</Link>
      <Link href="/testingPage2" className="text-blue-500 hover:underline">Testing Page 2 to test components</Link>

      <h1 className="text-3xl font-bold">List of Company Stocks</h1>
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
    </main>
  );
}
