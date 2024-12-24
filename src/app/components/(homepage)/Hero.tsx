const Hero = () => {
    return (
        <div className="hero relative container mx-auto px-20" style={{ height: "90vh" }}>
            <div className="hero-text 
                            absolute 
                            bottom-32 
                            font-[family-name:var(--font-faculty-glyphic)]
                            leading-10
                            "
            >
                <h2 className="mb-2">Hi I'm</h2>
                <h1 className="big-name text-6xl tracking-widest mb-6">SHREYANSH</h1>
                <h1 className="big-name text-6xl tracking-widest">SHRIVASTVA</h1>
                <h2 className="mt-2">I'll help you bring your ideas to life</h2>
            </div>
        </div>
    );
}

export default Hero;