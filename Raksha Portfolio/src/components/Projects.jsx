import { motion } from 'framer-motion'
import { FolderGit2, ExternalLink } from 'lucide-react'

const projects = [
    {
        title: "Meditrack",
        description: "A software solution designed to track medicines and facilitate seamless interaction between pharmacies and patients.",
        tech: ["React", "Python", "MongoDB"],
        link: "https://github.com/raksha791/medtrack"
    },
    {
        title: "E-shopping website",
        description: "An e-commerce platform built for an optimized shopping experience.",
        tech: ["React", "TypeScript"],
        link: "https://github.com/raksha791/e-shopping"
    }
]

const Projects = () => {
    return (
        <div className="container mx-auto px-6 relative">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-20">
                    <h2 className="font-sketch text-5xl text-ink underline decoration-accent decoration-2">Projects...</h2>
                    <FolderGit2 className="text-accent rotate-12" size={32} />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 hand-drawn-border hand-drawn-shadow hover:-translate-y-2 transition-transform group flex flex-col"
                            style={{ transform: `rotate(${idx % 2 === 0 ? '-1deg' : '1deg'})` }}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="font-sketch text-3xl text-ink group-hover:text-accent transition-colors">{project.title}</h3>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 hover:bg-surface rounded-full transition-colors"
                                >
                                    <ExternalLink size={24} className="text-ink/60 hover:text-accent" />
                                </a>
                            </div>

                            <p className="font-hand text-xl text-secondary leading-relaxed mb-8 flex-grow">
                                {project.description}
                            </p>

                            <div className="pencil-line mb-6" />

                            <div className="flex flex-wrap gap-3 mt-auto">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="font-hand text-sm px-4 py-1 border-2 border-ink border-dashed rounded-full bg-surface/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
