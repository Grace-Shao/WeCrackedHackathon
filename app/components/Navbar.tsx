// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="bg-grey bg-opacity-70 shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-center">
                <div className="flex items-center space-x-8">
                    <Image src="/gamestock2.png" alt="GameStock Logo" width={60} height={60} />
                    <Link legacyBehavior href="/">
                        <a className="text-lg text-black-800 hover:text-white-600">Home</a>
                    </Link>
                    <Link legacyBehavior href="/listOfCompaniesPage">
                        <a className="text-lg text-black-800 hover:text-white-600">Explore</a>
                    </Link>
                    <Link legacyBehavior href="/contact-us">
                        <a className="text-lg text-black-800 hover:text-white-600">Contact Us</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
