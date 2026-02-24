const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="py-20 text-center">
            <div className="container mx-auto px-6">
                <div className="w-full h-1 bg-ink/10 rounded-full mb-12" />

                <h2 className="font-sketch text-4xl text-ink mb-6">Arul Raksha</h2>

                <div className="flex justify-center gap-12 mb-12">
                    {[
                        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rakshaarul04/' },
                        { name: 'Github', url: 'https://github.com/raksha791' },
                        { name: 'Email', url: 'mailto:rakshaarul04@gmail.com' }
                    ].map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-hand text-2xl text-secondary hover:text-accent transition-all hover:underline"
                        >
                            {social.name}
                        </a>
                    ))}
                </div>

                <p className="font-hand text-xl text-secondary/40">
                    Hand-drawn & coded by me in {year}. <br />
                    <span className="italic">"Keep scribbling!"</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
