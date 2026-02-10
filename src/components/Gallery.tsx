import { motion } from "framer-motion";

interface GalleryItem {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  caption?: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

export function Gallery({ items }: GalleryProps) {
  return (
    <>
      {/* Very Small Screens - Single column stack */}
      <div className="flex flex-col gap-4 sm:hidden">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden cursor-pointer relative group aspect-square"
        >
          <img
            src={items[0].src}
            alt={items[0].caption || "Gallery item 1"}
            loading="lazy"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden cursor-pointer relative group aspect-square"
        >
          <img
            src={items[2].src}
            alt={items[2].caption || "Gallery item 3"}
            loading="lazy"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden cursor-pointer relative group aspect-video"
        >
          <video
            src={items[1].src}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden cursor-pointer relative group aspect-square"
        >
          <img
            src={items[3].src}
            alt={items[3].caption || "Gallery item 2"}
            loading="lazy"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden cursor-pointer relative group aspect-square"
        >
          <img
            src={items[4].src}
            alt={items[4].caption || "Gallery item 4"}
            loading="lazy"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </motion.div>
      </div>

      {/* Small-Medium Screens - 2 column grid */}
      <div className="hidden sm:grid grid-cols-2 gap-4 md:hidden">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden cursor-pointer relative group aspect-square"
        >
          <img
            src={items[0].src}
            alt={items[0].caption || "Gallery item 1"}
            loading="lazy"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden cursor-pointer relative group aspect-square"
        >
          <img
            src={items[2].src}
            alt={items[2].caption || "Gallery item 3"}
            loading="lazy"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden cursor-pointer relative group col-span-2 aspect-video"
        >
          <video
            src={items[1].src}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden cursor-pointer relative group aspect-square"
        >
          <img
            src={items[3].src}
            alt={items[3].caption || "Gallery item 2"}
            loading="lazy"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden cursor-pointer relative group aspect-square"
        >
          <img
            src={items[4].src}
            alt={items[4].caption || "Gallery item 4"}
            loading="lazy"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </motion.div>
      </div>

      {/* Desktop Layout - Original 4 column grid with video center */}
      <div className="hidden md:grid md:grid-cols-4 gap-4 auto-rows-fr">
        {/* Image 1 - Top Left */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden cursor-pointer relative group aspect-square"
        >
          <img
            src={items[0].src}
            alt={items[0].caption || "Gallery item 1"}
            loading="lazy"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </motion.div>

        {/* Video - Center (2x2) */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden cursor-pointer relative group col-span-2 row-span-2 aspect-square"
        >
          <video
            src={items[1].src}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </motion.div>

        {/* Image 3 - Top Right */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden cursor-pointer relative group aspect-square"
        >
          <img
            src={items[2].src}
            alt={items[2].caption || "Gallery item 3"}
            loading="lazy"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </motion.div>

        {/* Image 2 - Bottom Left */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden cursor-pointer relative group aspect-square"
        >
          <img
            src={items[3].src}
            alt={items[3].caption || "Gallery item 2"}
            loading="lazy"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </motion.div>

        {/* Image 4 - Bottom Right */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="rounded-xl overflow-hidden cursor-pointer relative group aspect-square col-start-4"
        >
          <img
            src={items[4].src}
            alt={items[4].caption || "Gallery item 4"}
            loading="lazy"
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
        </motion.div>
      </div>
    </>
  );
}
