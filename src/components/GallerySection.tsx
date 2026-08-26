import { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

const galleryImages = [
  {
    src: "/images/gallery/kca arusha 1.jpg",
    alt: "KCA University Tour de Arusha",
    category: "Events",
  },
  {
    src: "/images/gallery/kca graduation.jpg",
    alt: "KCA University Graduation",
    category: "Community",
  },
  {
    src: "/images/gallery/kca portrait.jpg",
    alt: "Professional Portrait",
    category: "Portraits",
  },
  {
    src: "/images/gallery/kca road side stop.jpg",
    alt: "Road side Cycling Stop",
    category: "Cycling",
  },
  {
    src: "/images/gallery/kca team shoot.jpg",
    alt: "KCA Cycling Team",
    category: "Events",
  },
];

const categories = ["All", "Events", "Cycling", "Portraits", "Community"];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>(
    {}
  );

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  // Prevent background scrolling while lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedImage(
          (selectedImage + 1) % filteredImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedImage(
          (selectedImage - 1 + filteredImages.length) %
            filteredImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, filteredImages.length]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showNextImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      (selectedImage + 1) % filteredImages.length
    );
  };

  const showPreviousImage = () => {
    if (selectedImage === null) return;

    setSelectedImage(
      (selectedImage - 1 + filteredImages.length) %
        filteredImages.length
    );
  };

  return (
    <>
      <section
        id="gallery"
        className="relative w-full bg-slate-950 py-24 px-6 md:px-12 lg:px-[10%]"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
              My Journey
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Gallery
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
              A collection of cycling events, professional experiences,
              endurance rides and memorable moments from my journey.
            </p>
          </div>

          {/* Category filters */}
          <div className="mb-10 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedImage(null);
                }}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "border border-slate-700 bg-slate-900 text-slate-300 hover:border-orange-500 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => openLightbox(index)}
                aria-label={`Open ${image.alt}`}
                className={`group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 text-left focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Loading background */}
                {!loadedImages[image.src] && (
                  <div className="absolute inset-0 animate-pulse bg-slate-800" />
                )}

                <img
                  src={image.src}
                  alt={image.alt}
                  className={`h-80 w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-90 ${
                    loadedImages[image.src]
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                  loading={index === 0 ? "eager" : "lazy"}
                  onLoad={() => {
                    setLoadedImages((previous) => ({
                      ...previous,
                      [image.src]: true,
                    }));
                  }}
                  onError={(event) => {
                    console.error(
                      `Gallery image failed to load: ${image.src}`
                    );

                    event.currentTarget.style.display = "none";
                  }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Hover expand icon */}
                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <Maximize2 size={18} />
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="mb-2 inline-block rounded-full bg-orange-500/90 px-3 py-1 text-xs font-semibold text-white">
                    {image.category}
                  </span>

                  <p className="text-lg font-semibold text-white">
                    {image.alt}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && filteredImages[selectedImage] && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-orange-500 md:right-8 md:top-8"
          >
            <X size={26} />
          </button>

          {/* Previous button */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              aria-label="Previous image"
              className="absolute left-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-orange-500 md:left-8"
            >
              <ChevronLeft size={30} />
            </button>
          )}

          {/* Image container */}
          <div
            className="relative flex max-h-[90vh] max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              className="max-h-[75vh] max-w-full rounded-xl object-contain shadow-2xl"
            />

            {/* Lightbox caption */}
            <div className="mt-5 text-center">
              <p className="text-lg font-semibold text-white md:text-xl">
                {filteredImages[selectedImage].alt}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                {filteredImages[selectedImage].category}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Next button */}
          {filteredImages.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              aria-label="Next image"
              className="absolute right-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-orange-500 md:right-8"
            >
              <ChevronRight size={30} />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default GallerySection;