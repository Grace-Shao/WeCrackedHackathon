// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="bg-grey bg-opacity-70 shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-center">
                <div className="flex items-center space-x-8">
                    <Image src="/gamestock logo.png" alt="GameStock Logo" width={60} height={60} />
                    <Link legacyBehavior href="/">
                        <a className="hover:underline text-white font-mono" style = {{display: 'inline-flex', margin: "0 10px"}}>home </a>
                    </Link>
                    <Link legacyBehavior href="/listOfCompaniesPage">
                        <a className="hover:underline text-white font-mono" style = {{display: 'inline-flex', margin: "0 10px"}}>explore </a>
                    </Link> 
                    <Link legacyBehavior href="/contact">
                        <a className="hover:underline text-white font-mono" style = {{display: 'inline-flex', margin: "0 10px"}}>contact </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
