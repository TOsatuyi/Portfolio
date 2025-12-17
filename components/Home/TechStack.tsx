import React from 'react';
import {
    Layout,
    Server,
    Smartphone,
    Terminal,
    Globe,
} from 'lucide-react';

const skills = [
    {
        category: "Frontend",
        icon: <Layout className="w-6 h-6 text-emerald-400" />,
        items: ["React", "Next.js", "Blade", "TypeScript", "Tailwind CSS"]
    },
    {
        category: "Backend",
        icon: <Server className="w-6 h-6 text-orange-400" />,
        items: ["Node.js", "C#", ".NET", "Java", "PHP", "Laravel", "Filament", "PostgreSQL"]
    },
    {
        category: "Mobile",
        icon: <Smartphone className="w-6 h-6 text-blue-400" />,
        items: ["Flutter", "iOS & Android Deployment"]
    },
    {
        category: "DevOps & Cloud",
        icon: <Terminal className="w-6 h-6 text-purple-400" />,
        items: ["Git", "Docker", "AWS", "Azure", "CI/CD"]
    },
    {
        category: "Leadership",
        icon: <Globe className="w-6 h-6 text-yellow-400" />,
        items: ["Project Management", "Team Leadership", "Strategic Planning", "Agile Methodologies"]
    }
];

const TechStack = () => {
    return (
        <section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/5 via-neutral-900 to-black pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                        TECHNICAL <span className="text-emerald-500">ARSENAL</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        The frameworks, tools, and strategies I use to build scalable, high-performance applications.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {skills.map((skill, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors group w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-w-[280px]">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:border-white/20 transition-colors">
                                    {skill.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                            </div>

                            <div className="space-y-3">
                                {skill.items.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                                        <span className="text-gray-400 font-medium group-hover:text-white transition-colors">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
