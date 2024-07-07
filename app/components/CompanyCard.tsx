import Link from 'next/link';
import Image from 'next/image';

type CompanyCardProps = {
  ticker: string;
  companyName: string;
  stockValue: number;
  logo: string;
};

export default function CompanyCard(props: CompanyCardProps) {
  const { ticker, companyName, stockValue, logo } = props;

  return (
    <div className="p-4 border border-slate-300 my-3 flex gap-5 items-center bg-gray-800 rounded-lg">
      <Image
        src={logo}
        alt={`${companyName} Logo`}
        width={50}
        height={50}
        className="flex-shrink-0"
      />
      <Link href={`/detailedStockPage/${ticker}`} className="flex-grow">

        <div>
          <h1 className="font-bold text-2xl">{companyName}</h1>
          <p>{`${ticker} Share Outstanding: ${stockValue}`}</p>
        </div>
      </Link>
    </div>
  );
}
