import { Bike } from "lucide-react";

const rides = [
  { year: "2023", event: "KCAU Tour de Meru", distance: "512 km" },
  { year: "2024", event: "KCAU Tour de Kisumu", distance: "1002 km" },
  { year: "2025", event: "KCAU Tour de Arusha", distance: "700 km" },
];

const CommunitySection = () => {
  return (
    <section className="py-20 px-6 md:px-[10%] bg-background">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 border-l-4 border-primary pl-4 text-foreground">
        Community & Ultra Cycling
      </h2>
      
      {/* Timeline */}
      <div className="relative max-w-2xl">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30" />
        
        {rides.map((ride, index) => (
          <div 
            key={index}
            className="relative pl-12 pb-8 last:pb-0"
          >
            <div className="absolute left-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Bike className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <span className="text-sm font-semibold text-primary">{ride.year}</span>
              <h3 className="text-xl font-bold text-foreground mt-1">{ride.event}</h3>
              <p className="text-muted-foreground text-lg">{ride.distance}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 p-6 bg-card rounded-xl border-l-4 border-primary max-w-2xl">
        <p className="text-lg text-muted-foreground">
          Supported over <strong className="text-foreground">30 students</strong> at KCA University through cycling initiatives and community outreach programs.
        </p>
      </div>
    </section>
  );
};

export default CommunitySection;
