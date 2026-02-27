import { useState } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
    { name: 'Me', href: '#about' },
    { name: 'Stuff I Did', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Connect', href: '#contact' }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-6 pointer-events-none">
            <div className="container mx-auto flex justify-between items-center pointer-events-auto">
                <motion.a
                    href="#home"
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    className="text-2xl font-hand font-bold text-ink bg-white px-4 py-1 hand-drawn-border"
                >
                    Arul Raksha
                </motion.a>

                <div className="hidden md:flex gap-4">
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            whileHover={{ y: -3, rotate: 1 }}
                            className="font-hand text-xl px-4 py-1 bg-white hand-drawn-border hover:text-accent transition-colors"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                <div className="md:hidden pointer-events-auto">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 bg-white hand-drawn-border font-hand text-xl"
                    >
                        {isOpen ? 'Close' : 'Menu'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-20 left-6 right-6 bg-white hand-drawn-border p-8 flex flex-col gap-4 md:hidden pointer-events-auto shadow-xl"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="font-hand text-2xl text-center border-b-2 border-dashed border-ink/10 pb-2"
                        >
                            {link.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </nav>
    )
}

export default Navbar
