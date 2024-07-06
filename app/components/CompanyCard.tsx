type CompanyCardProps = {
    ticker: string;
    companyName: string;
    stockValue: number;
};

export default function CompanyCard(props: CompanyCardProps) {
    const { ticker, companyName, stockValue } = props;

    return (
        <div className="w-4/5 p-4 border border-slate-300 my-3 flex justify-between gap-5">
            <div>
                <h1 className="font-bold text-2xl">{companyName}</h1>
                <p>{`${ticker} Stock Value: ${stockValue}`}</p>
            </div>
        </div>
    );
}