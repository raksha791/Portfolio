import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'
import raksha from '../assets/raksha.jpeg'

const About = () => {
    return (
        <div className="container mx-auto px-6 py-24">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                {/* Sketch Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2"
                >
                    <div className="relative p-12 bg-white hand-drawn-border hand-drawn-shadow rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="aspect-square bg-surface border-2 border-dashed border-ink/20 rounded-lg flex items-center justify-center overflow-hidden">
                            <img
                                src={raksha}
                                alt="Raksha Arul"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        <p className="font-hand text-center text-2xl mt-6 italic">"Working on intelligent things..."</p>
                    </div>
                </motion.div>

                {/* Text Side */}
                <div className="w-full md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-sketch text-4xl md:text-6xl text-ink mb-8 border-b-4 border-accent inline-block">Personal Journal</h2>
                        <p className="font-hand text-2xl text-secondary mb-8 leading-relaxed">
                            Hey there! I'm currently sailing through my final year of B.Tech in
                            <span className="font-bold text-ink"> AI & Data Science</span>.
                            My main goal is to build things that actually make sense using data.
                            I'm always scribbling new ideas and experimenting with code.
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <div className="p-6 bg-accent/5 hand-drawn-border -rotate-1">
                                <p className="font-hand text-4xl font-bold text-accent">8.59</p>
                                <p className="font-hand text-xl text-secondary">My CGPA</p>
                            </div>
                            <div className="p-6 bg-ink/5 hand-drawn-border rotate-1">
                                <p className="font-hand text-4xl font-bold text-ink">4+</p>
                                <p className="font-hand text-xl text-secondary">Projects</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About
