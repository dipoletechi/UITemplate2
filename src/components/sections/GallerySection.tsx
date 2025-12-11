import { useState } from "react";
import { Image, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=400", title: "Gir Forest" },
  { src: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=400", title: "Asiatic Lion" },
  { src: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400", title: "Forest Trail" },
  { src: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400", title: "Wildlife" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400", title: "Dense Forest" },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400", title: "Plantation" },
];

export function GallerySection() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-card py-10">
      <div className="px-6 md:px-10 lg:px-16">
        <div className="mb-6 flex items-center gap-2">
          <div className="h-6 w-1 rounded-full bg-saffron" />
          <Image className="h-5 w-5 text-saffron" />
          <h3 className="text-lg font-bold text-foreground">Photo Gallery</h3>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {galleryItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelected(item.src)}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-soft"
            >
              <img
                src={item.src}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-india-green-dark/60 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 p-2 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                {item.title}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Button variant="outline" size="sm">
            View Full Gallery
          </Button>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute right-4 top-4 text-white hover:text-saffron"
            onClick={() => setSelected(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selected.replace("w=400", "w=1200")}
            alt="Preview"
            className="max-h-[85vh] max-w-[90vw] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
