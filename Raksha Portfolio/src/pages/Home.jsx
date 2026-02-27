import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className="relative min-h-screen">
            {/* Dynamic Background Effects */}
            <div className="fixed inset-0 pointer-events-none -z-1 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
            </div>

            <Navbar />

            <main className="relative z-10 pt-20">
                <section id="home">
                    <Hero />
                </section>

                <section id="about" className="py-24">
                    <About />
                </section>

                {/* Experience Section - Now a Clean Bento Grid */}
                <section id="experience">
                    <Experience />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="education" className="py-24">
                    <Education />
                </section>

                <section id="skills" className="py-24 bg-surface/50 border-y border-border">
                    <Skills />
                </section>

                <section id="certifications" className="py-24">
                    <Certifications />
                </section>

                <section id="achievements" className="py-24 bg-surface/50 border-y border-border">
                    <Achievements />
                </section>

                <section id="contact" className="py-24">
                    <Contact />
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Home
