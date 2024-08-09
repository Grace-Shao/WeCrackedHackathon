import Navbar from "./Navbar";
import Image from 'next/image';
// Remove the import if not used
// import linkedinLogo from '/public/linkedin2.png'; 

// components/ContactSection.js
export default function ContactSection() {
    const engineers = [
        {
            name: 'Grace Shao',
            role: 'Fullstack Engineer',
            school: 'CS @ Georgia Tech, SWE Intern @ Southern Company',
            imgSrc: '/grace.png',
            linkedin: 'https://www.linkedin.com/in/grace-shao-gt-cs/',
        },
        {
            name: 'Kelechi Opurum',
            role: 'Fullstack Engineer',
            school: 'CS @ Loyola University Maryland, 1x Hackathon Winner, SWE Fellow @ Headstarter',
            imgSrc: '/kelechi.png',
            linkedin: 'https://linkedin.com/in/kelechi-opurum',
        },
        {
            name: 'Alex Soroiu',
            role: 'Frontend Engineer',
            school: 'CS + Finance @ Wagner College, 1x Hackathon Winner, SWE Fellow @ Headstarter',
            imgSrc: '/alex.png',
            linkedin: 'https://www.linkedin.com/in/alexandrudanielsoroiu/',
        },
        {
            name: 'Sai Surarapu',
            role: 'Backend Engineer',
            school: 'MS in CS @ UMBC',
            imgSrc: '/sai.png',
            linkedin: 'https://www.linkedin.com/in/sai-krupa-reddy/',
        },
    ];

    return (
        <div className="bg-black min-h-screen">
            <Navbar />
            <section className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-8 text-white ">Meet the Team</h2>
                    <div className="flex justify-center flex-wrap gap-8">
                        {engineers.map((engineer, index) => (
                            <div
                                key={index}
                                className="max-w-xs rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                style={{ backgroundColor: '#1F2937' }}

                            >
                                <a
                                    href={engineer.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <img
                                        src={engineer.imgSrc}
                                        alt={engineer.name}
                                        className="w-cover h-64 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                                    />
                                    
                                </a>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-white">{engineer.name}</h3>
                                    <p className="text-gray-400">{engineer.role}</p>
                                    <div className="border-b-2 border-gray-500 my-2"></div>
                                    <p className="text-gray-400">{engineer.school}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
