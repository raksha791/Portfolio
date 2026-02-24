import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'

const certifications = [
    { title: "AI Productivity", issuer: "Google", date: "2025" },
    { title: "Power BI Data", issuer: "Microsoft", date: "2024" },
    { title: "Social Networks", issuer: "NPTEL / IIT", date: "2024" },
    { title: "Cloud Computing", issuer: "IIT", date: "2023" }
]

const Certifications = () => {
    return (
        <div className="container mx-auto px-6 py-24">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-sketch text-5xl text-ink mb-16 text-center">My Certificates </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-8 bg-surface hand-drawn-border flex items-center gap-6 group hover:bg-white transition-colors"
                        >
                            <div className="w-16 h-16 shrink-0 bg-ink/5 border-2 border-dashed border-ink/20 rounded-full flex items-center justify-center text-accent transition-all group-hover:bg-accent group-hover:text-white">
                                <FileText size={32} />
                            </div>
                            <div>
                                <h4 className="font-sketch text-2xl text-ink">{cert.title}</h4>
                                <p className="font-hand text-xl text-secondary">{cert.issuer} • <span className="opacity-60">{cert.date}</span></p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Certifications
