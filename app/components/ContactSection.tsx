import Navbar from "./Navbar";

// components/ContactSection.js
export default function ContactSection() {
    const engineers = [
        {
            name: 'Grace Shao',
            role: 'Fullstack Engineer',
            school: 'CS @ Georgia Tech, SWE Intern @ Southern Company',
            imgSrc: '/grace.png',
        },
        {
            name: 'Kelechi Opurum',
            role: 'Fullstack Engineer',
            school: 'CS @ Loyola University Maryland, 1x Hackathon Winner, SWE Fellow @ Headstarter',
            imgSrc: '/kelechi.png',
        },
        {
            name: 'Alex',
            role: 'Frontend Engineer',
            school: 'CS + Finance @ Wagner College, 1x Hackathon Winner, SWE Fellow @ Headstarter',
            imgSrc: '/alex.png',
        },
        {
            name: 'Sai',
            role: 'Backend Engineer',
            school: 'Carnegie Mellon University',
            imgSrc: '/sai.png',
        },
    ];

    return (
        <div>
            <Navbar />
            <section className="bg-black py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8 text-white">Meet the Team</h2>
                    <div className="flex justify-center flex-wrap gap-8">
                        {engineers.map((engineer, index) => (
                            <div key={index} className="max-w-xs bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img src={engineer.imgSrc} alt={engineer.name} className="w-fit h-64 object-cover rounded-t-lg mb-4" />
                                <h3 className="text-xl font-bold mb-2 text-white">{engineer.name}</h3>
                                <p className="text-white">{engineer.role}</p>
                                <div className="border-b-2 border-gray-500 my-2"></div>
                                <p className="text-gray-400">{engineer.school}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
