import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Sketched shapes in background */}
            <div className="absolute top-20 right-20 w-32 h-32 border-4 border-accent text-accent opacity-20 rotate-12 rounded-full hand-drawn-border hidden md:block" />
            <div className="absolute bottom-40 left-20 w-40 h-10 border-4 border-ink opacity-10 -rotate-6 hand-drawn-border hidden md:block" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        className="font-hand text-3xl text-blue-500 text-accent mb-4 tracking-wider"
                        animate={{ rotate: [0, -2, 2, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                    >
                        Hi! I'm...
                    </motion.p>

                    <h1 className="font-sketch text-7xl md:text-9xl font-black text-ink mb-6 relative inline-block">
                        Arul Raksha
                        <div className="absolute -bottom-2 left-0 w-full h-3 bg-accent/20 -z-1 rotate-1" />
                    </h1>

                    <p className="font-hand text-2xl md:text-4xl text-secondary max-w-2xl mx-auto mb-12 leading-relaxed">
                        I'm a <span className="highlight px-2">Final-Year B.Tech student</span> who loves turning data into cool insights.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-ink text-paper text-2xl font-hand rounded-lg hand-drawn-border hand-drawn-shadow transition-colors hover:bg-accent"
                        >
                            Let's Talk!
                        </motion.a>
                        <motion.a
                            href="#experience"
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            className="px-12 py-5 border-4 border-ink bg-white text-ink text-2xl font-hand rounded-lg hand-drawn-border transition-all hover:bg-surface"
                        >
                            See My Work
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Sketched arrow pointing down */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-accent"
            >
                <ChevronDown size={48} strokeWidth={3} />
            </motion.div>
        </div>
    )
}

export default Hero
