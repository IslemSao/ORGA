export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary">
      <div className="container px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-futura-bold text-center">
          Hero Section
        </h1>
        <p className="mt-4 text-center text-muted-foreground font-futura-md">
          Team member 1 will work on this section
        </p>
        <div className="mt-8 text-2xl font-photograph text-center">
          Signature Style Text
        </div>
        <div className="mt-4 text-xl font-no-continue text-center">
          Creative Heading
        </div>
      </div>
    </section>
  );
}