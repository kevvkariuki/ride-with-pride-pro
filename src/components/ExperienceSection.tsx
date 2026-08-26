import { Check } from "lucide-react";

const experiences = [
  "3 years working as a bicycle mechanic in Bicyle Garage Nairobi Workshop",
  "Worked with international riders and professional cycling teams",
  "Neutral Bike Mechanic – CAC African Games 2024 (Kenya)",
  "Neutral Bike Mechanic – CAC African Games 2025 (Team Mauritius)",
  "Supported Team Mauritius to 2 Gold, 1 Bronze & 1 Silver medals",
  "Freelance mechanic at multiple cycling events across Kenya",
  "Worked 4 editions of Migration Gravel Race as Race Mechanic (MGR) 2023-2026, Kenya",
];

const ExperienceSection = () => {
  return (
    <section className="py-20 px-6 md:px-[10%] bg-background">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 border-l-4 border-primary pl-4 text-foreground">
        Professional Experience
      </h2>
      <ul className="space-y-4 max-w-3xl">
        {experiences.map((exp, index) => (
          <li 
            key={index}
            className="flex items-start gap-4 p-4 rounded-lg hover:bg-card transition-colors duration-200"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-primary" />
            </span>
            <span className="text-lg text-muted-foreground">{exp}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperienceSection;
