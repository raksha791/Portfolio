import { motion } from 'framer-motion'
import { Award, Zap } from 'lucide-react'

const items = [
    { title: "ICASME 23", type: "Conference", icon: <Award size={32} /> },
    { title: "ICCIDA 24", type: "Conference", icon: <Award size={32} /> },
    { title: "NSS Volunteer", type: "Service", icon: <Zap size={32} /> },
    { title: "YUVA Club", type: "Action", icon: <Zap size={32} /> }
]

const Achievements = () => {
    return (
        <div className="container mx-auto px-6 py-24">
            <div className="max-w-4xl mx-auto p-12 bg-white hand-drawn-border hand-drawn-shadow rotate-1 lg:-rotate-1">
                <h2 className="font-sketch text-5xl text-center mb-12">Other Fun Stuff</h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.1 }}
                            className="text-center group"
                        >
                            <div className="w-20 h-20 mx-auto bg-accent/5 hand-drawn-border flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <p className="font-hand text-xl font-bold text-ink">{item.title}</p>
                            <p className="font-hand text-sm text-secondary/40 uppercase tracking-widest">{item.type}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t-2 border-dashed border-ink/20 text-center">
                    <p className="font-hand text-2xl text-secondary">
                        "Activity is the key to progress..." - <span className="text-ink">Unknown Pen</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Achievements
