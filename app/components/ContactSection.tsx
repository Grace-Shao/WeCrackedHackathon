import Navbar from "./Navbar";

// components/ContactSection.js
export default function ContactSection() {
    const contacts = [
        {
            title: 'Frontend Engineers',
            description: 'Grace, Kelechi, Alex',
            imgSrc: '/support.png'
        },
        {
            title: 'Backend Engineers',
            description: 'Sai, Grace',
            imgSrc: '/billing.png'
        },
        {
            title: 'Video',
            description: 'Grace, Kelechi, Alex',
            imgSrc: '/advice.png'
        },
        
    ];

    return (
        <div>
        <Navbar />
        <section className="bg-black py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8 text-white">Our teams are here to help</h2>
                <div className="flex justify-center space-x-8">
                    {contacts.map((contact, index) => (
                        <div key={index} className="max-w-sm bg-gray-800 rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-2 text-white">{contact.title}</h3>
                            <p className="mb-4 text-white">{contact.description}</p>
                            <a href="#" className="text-blue-500 hover:underline text-white">{contact.linkText}</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </div>
    );
}
