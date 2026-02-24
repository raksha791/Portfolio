import { motion } from 'framer-motion'
import { PenLine } from 'lucide-react'

const experiences = [
    {
        role: "Android Developer Intern",
        company: "Skillcraft Technology",
        period: "Aug 2025 - Present",
        desc: "Built some cool apps using Kotlin and XML. Learned a lot about UI optimization!"
    },
    {
        role: "Data Science Intern",
        company: "Techvolt Software",
        period: "Jul 2024",
        desc: "Dived into datasets, used Python and SQL to find patterns. Visualized everything in Tableau."
    },
    {
        role: "Research Analyst Intern",
        company: "Cape Start",
        period: "2023",
        desc: "Researched tech trends and helped with data modeling. First step into the professional world!"
    }
]

const Experience = () => {
    return (
        <div className="container mx-auto px-6 py-24 relative">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-20">
                    <h2 className="font-sketch text-5xl text-ink underline decoration-accent decoration-2">My Internship Road...</h2>
                    <PenLine className="text-accent -rotate-12" size={32} />
                </div>

                <div className="space-y-16 relative">
                    {/* Timeline center line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-ink/10 -translate-x-1/2 hidden md:block" />

                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="w-full md:w-1/2 flex justify-center">
                                <div className={`p-8 bg-white hand-drawn-border hand-drawn-shadow max-w-sm ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all`}>
                                    <p className="font-hand text-sm text-accent font-bold uppercase tracking-widest mb-1">{exp.period}</p>
                                    <h4 className="font-sketch text-2xl text-ink mb-2">{exp.role}</h4>
                                    <p className="font-hand text-xl text-secondary/60 mb-4">{exp.company}</p>
                                    <div className="pencil-line mb-4" />
                                    <p className="font-hand text-xl text-secondary leading-relaxed">
                                        {exp.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Timeline bubble */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-ink rounded-full -translate-x-1/2 hidden md:block" />

                            <div className="hidden md:block w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
