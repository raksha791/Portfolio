import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'

const Contact = () => {
    return (
        <div className="container mx-auto px-6 py-24">
            <div className="max-w-3xl mx-auto p-12 bg-white hand-drawn-border hand-drawn-shadow -rotate-1 relative overflow-hidden">
                {/* Envelope flap effect */}
                <div className="absolute top-0 left-0 w-full h-8 bg-ink/5 border-b-2 border-ink" />

                <div className="text-center mb-12 relative z-10">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <h2 className="font-sketch text-5xl text-ink">Send me a Letter!</h2>
                        <Mail size={40} className="text-accent -rotate-12" />
                    </div>
                    <p className="font-hand text-2xl text-secondary">I'd love to hear from you. Just scribble your message below.</p>
                </div>

                <form className="space-y-8 relative z-10">
                    <div className="space-y-2">
                        <label className="font-hand text-xl text-secondary">Your Name</label>
                        <input
                            type="text"
                            placeholder="Arul..."
                            className="w-full bg-transparent border-b-4 border-ink py-4 text-3xl font-hand focus:border-accent outline-none placeholder:text-ink/10"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="font-hand text-xl text-secondary">Your Email</label>
                        <input
                            type="email"
                            placeholder="you@email.com"
                            className="w-full bg-transparent border-b-4 border-ink py-4 text-3xl font-hand focus:border-accent outline-none placeholder:text-ink/10"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="font-hand text-xl text-secondary">What's on your mind?</label>
                        <textarea
                            rows="4"
                            placeholder="Hi there! I wanted to say..."
                            className="w-full bg-transparent border-b-4 border-ink py-4 text-3xl font-hand focus:border-accent outline-none placeholder:text-ink/10 resize-none"
                        ></textarea>
                    </div>

                    <div className="pt-8 text-center">
                        <motion.button
                            whileHover={{ scale: 1.05, rotate: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-16 py-6 bg-ink text-paper text-3xl font-hand rounded-full hand-drawn-border hand-drawn-shadow hover:bg-accent transition-all flex items-center gap-4 mx-auto"
                        >
                            Send It! <Send size={28} />
                        </motion.button>
                    </div>
                </form>

                {/* Squiggle at bottom */}
                <div className="absolute bottom-4 right-8 opacity-10 rotate-12">
                    <p className="font-sketch text-4xl select-none">AR</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
