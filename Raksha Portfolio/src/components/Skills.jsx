import { motion } from 'framer-motion'

const skillGroups = [
    {
        title: "Codes",
        skills: ["Python", "Java", "Kotlin", "C++"]
    },
    {
        title: "Web",
        skills: ["HTML", "CSS", "React.js", "Tailwind"]
    },
    {
        title: "Data",
        skills: ["SQL", "Pandas", "Tableau", "ML Stuff"]
    },
    {
        title: "Tools",
        skills: ["Figma", "Git", "VS Code", "AR/VR"]
    }
]

const Skills = () => {
    return (
        <div className="container mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="font-sketch text-6xl text-ink underline decoration-dashed decoration-accent underline-offset-8">My Toolkit</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {skillGroups.map((group, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Scribble background circle */}
                        <div className="absolute -inset-4 border-2 border-ink/5 rounded-full -rotate-6 pointer-events-none" />

                        <h4 className="font-hand text-3xl font-bold text-ink mb-6 text-center border-b-2 border-ink pb-2">
                            {group.title}
                        </h4>

                        <div className="flex flex-wrap justify-center gap-4">
                            {group.skills.map((skill, sIdx) => (
                                <motion.span
                                    key={sIdx}
                                    whileHover={{ scale: 1.1, rotate: -2 }}
                                    className="px-6 py-2 bg-white hand-drawn-border font-hand text-xl text-secondary hover:text-accent transition-colors"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Skills
