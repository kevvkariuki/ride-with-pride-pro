import { Bike, MapPin, Heart } from "lucide-react";

const communityEvents = [
  {
    year: "2021",
    event: "Ride for Sickle Cell Anaemia",
    category: "Charity Ride",
    distance: "Nairobi → Mombasa",
    description:
      "Rode from Nairobi to Mombasa to raise funds towards purchasing machines to support people living with Sickle Cell Anaemia.",
    image: "/images/community/sickle-cell-ride-2021.jpg",
    icon: Heart,
  },
  {
    year: "2023",
    event: "KCAU Tour de Meru",
    category: "Endurance Ride",
    distance: "512 km",
    description:
      "A challenging endurance ride supporting the KCA University cycling initiative and student community.",
    image: "/images/community/kca-tour-de-meru.jpg",
    icon: Bike,
  },
  {
    year: "2023",
    event: "Daraja Academy Charity Ride",
    category: "Charity Ride",
    distance: "200 km",
    route: "Nairobi → Nanyuki ",
    description:
      "Completed a 200 km charity ride from Nairobi to Nanyuki and back in support of Daraja Academy.",
    image: "/images/community/daraja-academy-2023.jpg",
    icon: Heart,
  },
  {
    year: "2024",
    event: "KCAU Tour de Kisumu",
    category: "Endurance Ride",
    distance: "1002 km",
    description:
      "Completed an ultra-distance cycling challenge as part of the KCA University cycling initiative.",
    image: "/images/community/kca-tour-de-kisumu.jpg",
    icon: Bike,
  },
  {
    year: "2025",
    event: "KCAU Tour de Arusha",
    category: "Endurance Ride",
    distance: "700 km",
    description:
      "Completed a 700 km endurance ride from Kenya towards Arusha while supporting the KCA University cycling community.",
    image: "/images/community/kca-tour-de-arusha.jpg",
    icon: Bike,
  },
];

const CommunitySection = () => {
  return (
    <section
      id="community"
      className="relative w-full overflow-hidden bg-[#071A33] py-24 px-6 md:px-12 lg:px-[10%]"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Community Impact
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Community & Charity
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
            Using cycling as a platform to support communities, raise
            awareness, contribute to meaningful causes and challenge myself
            through long-distance endurance rides.
          </p>
        </div>

        {/* Community Event Cards */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">

          {communityEvents.map((event, index) => {
            const Icon = event.icon;

            return (
              <article
                key={`${event.year}-${event.event}`}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0B2342] shadow-xl shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/40 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-slate-800">

                  <img
                    src={event.image}
                    alt={event.event}
                    loading={index < 3 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A33] via-transparent to-transparent" />

                  {/* Year */}
                  <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-[#071A33]/90 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm">
                    {event.year}
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">

                  {/* Icon */}
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold leading-tight text-white">
                    {event.event}
                  </h3>

                  {/* Distance / Route */}
                  <div className="mt-4 flex items-start gap-2 text-sm font-medium text-orange-400">
                    {event.route ? (
                      <>
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>
                          {event.distance} • {event.route}
                        </span>
                      </>
                    ) : (
                      <>
                        <Bike className="mt-0.5 h-4 w-4 shrink-0" />
                        <span>{event.distance}</span>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {event.description}
                  </p>

                  {/* Bottom accent */}
                  <div className="mt-6 h-px w-full bg-white/10" />

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Cycling Journey
                    </span>

                    <span className="h-2 w-2 rounded-full bg-orange-500 transition-transform duration-300 group-hover:scale-150" />
                  </div>
                </div>
              </article>
            );
          })}

        </div>

        {/* KCA Community Impact */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-orange-400/20 bg-[#0B2342] shadow-xl">
          <div className="flex flex-col gap-6 p-7 md:flex-row md:items-center md:p-9">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500 text-white">
              <Bike className="h-7 w-7" />
            </div>

            <div>
              <p className="text-lg leading-8 text-slate-300 md:text-xl">
                Supported over{" "}
                <strong className="font-bold text-white">
                  30 students
                </strong>{" "}
                at KCA University through cycling initiatives and community
                outreach programs.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CommunitySection;