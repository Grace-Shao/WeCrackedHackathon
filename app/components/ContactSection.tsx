// components/ContactSection.js
export default function ContactSection() {
    const contacts = [
        {
            title: 'Technical support',
            description: 'Already using our products and experiencing technical issues?',
            linkText: 'Find helpful resources',
            imgSrc: '/support.png'
        },
        {
            title: 'Pricing, billing & licensing',
            description: 'Have a pricing question or need help managing your account?',
            linkText: 'Find answers',
            imgSrc: '/billing.png'
        },
        {
            title: 'Product advice',
            description: 'Evaluating our products and need advice before you buy?',
            linkText: 'View product demos',
            imgSrc: '/advice.png'
        }
    ];

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-8">Our teams are here to help</h2>
                <div className="flex justify-center space-x-8">
                    {contacts.map((contact, index) => (
                        <div key={index} className="max-w-sm bg-gray-100 rounded-lg p-6">
                            <img src={contact.imgSrc} alt={contact.title} className="mx-auto mb-4"/>
                            <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                            <p className="mb-4">{contact.description}</p>
                            <a href="#" className="text-blue-500 hover:underline">{contact.linkText}</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
