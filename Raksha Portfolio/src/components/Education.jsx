import { motion } from 'framer-motion'

const education = [
    {
        degree: "B.Tech (AI & DS)",
        place: "St. Xavier's Catholic College",
        stats: "8.59 CGPA",
        year: "Graduation 2026",
        color: "bg-blue-50"
    },
    {
        degree: "HSC (12th Grade)",
        place: "Maria Rafols School",
        stats: "83% Score!",
        year: "Passed 2022",
        color: "bg-yellow-50"
    },
    {
        degree: "SSLC (10th Grade)",
        place: "Maria Rafols School",
        stats: "81.2% Score!",
        year: "Passed 2020",
        color: "bg-pink-50"
    }
]

const Education = () => {
    return (
        <div className="container mx-auto px-6 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="font-sketch text-5xl text-ink mb-4 italic">Study Progress...</h2>
                    <div className="w-48 h-1 bg-ink/20 rounded-full" />
                </div>

                <div className="flex flex-wrap justify-center gap-10">
                    {education.map((edu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9, rotate: idx % 2 === 0 ? -3 : 3 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: idx % 2 === 0 ? -1 : 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, rotate: 0 }}
                            className={`p-10 ${edu.color} hand-drawn-border hand-drawn-shadow w-full md:w-[320px] relative`}
                        >
                            {/* Paper clip or push pin effect */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-ink/10 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-ink rounded-full" />
                            </div>

                            <p className="font-hand text-sm text-secondary/50 uppercase tracking-widest text-center mt-2 mb-6">{edu.year}</p>
                            <h4 className="font-sketch text-2xl text-ink text-center mb-2">{edu.degree}</h4>
                            <p className="font-hand text-xl text-center text-secondary/60 mb-6">{edu.place}</p>

                            <div className="pt-6 border-t border-dashed border-ink/20 text-center">
                                <p className="font-hand text-3xl font-bold text-accent">{edu.stats}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education
