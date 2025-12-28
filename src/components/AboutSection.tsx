const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-[10%] bg-card">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 border-l-4 border-primary pl-4 text-foreground">
        About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am a professional bicycle mechanic with over <strong className="text-foreground">3 years of experience</strong> working in a bike shop in Nairobi, Kenya. I have supported <strong className="text-foreground">international riders and teams</strong> and worked across elite-level racing and grassroots cycling events.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Beyond mechanics, I am deeply passionate about community impact, endurance cycling, and giving back through ultra-distance rides supporting education and youth development.
          </p>
        </div>
        <div className="relative">
          <img 
            src="/images/workshop.jpg"
            alt="Kevin Kariuki at work in the workshop"
            className="w-full rounded-xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
