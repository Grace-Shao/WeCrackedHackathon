import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-center p-4">
            <div className="flex items-center text-4xl space-x-8">
                <div className="text-xl hover:text-black">
                    <Link legacyBehavior href="/">
                        <a className="hover:underline text-white font-mono">home </a>
                    </Link>
                    <Link legacyBehavior href="/listOfCompaniesPage">
                        <a className="hover:underline text-white font-mono">explore </a>
                    </Link> 
                    <Link legacyBehavior href="/contact">
                        <a className="hover:underline text-white font-mono">contact </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
