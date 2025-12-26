const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=600&q=80",
    alt: "Race support",
  },
  {
    src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80",
    alt: "Neutral mechanic work",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    alt: "Community cycling event",
  },
  {
    src: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&q=80",
    alt: "Bike workshop",
  },
];

const GallerySection = () => {
  return (
    <section className="py-20 px-6 md:px-[10%] bg-card">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 border-l-4 border-primary pl-4 text-foreground">
        Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <div 
            key={index}
            className="relative overflow-hidden rounded-xl group cursor-pointer"
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <p className="text-white p-4 font-medium">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
