import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin } from "lucide-react";

// Cookeville, Tennessee, USA coordinates
// const COOKEVILLE_COORDS: [number, number] = [36.1628, -85.5016];
const DALLAS_COORDS: [number, number] = [32.779167, -96.808891];

export function InteractiveMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const [isDark, setIsDark] = useState(false);

  // Detect theme changes
  useEffect(() => {
    const checkTheme = () => {
      const root = document.documentElement;
      setIsDark(root.classList.contains("dark"));
    };

    // Initial check
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Initialize map
  useEffect(() => {
    // Only initialize once
    if (!mapContainer.current || mapInstance.current) return;

    // Create map instance
    const map = L.map(mapContainer.current, {
      attributionControl: false, // Remove attribution watermark
    }).setView(DALLAS_COORDS, 13);

    // Add OpenStreetMap tiles (will be updated based on theme)
    const tileLayer = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "", // Remove attribution text
      }
    ).addTo(map);

    tileLayerRef.current = tileLayer;

    // Create custom marker icon
    const customIcon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });

    // Add marker
    L.marker(DALLAS_COORDS, { icon: customIcon })
      .addTo(map)
      .bindPopup(
        '<div style="padding: 8px;"><h4 style="font-weight: 600; margin-bottom: 4px;">Cookeville, Tennessee</h4><p style="font-size: 12px; color: #666;">USA</p></div>'
      );

    mapInstance.current = map;

    // Cleanup on unmount
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  // Update map tiles based on theme
  useEffect(() => {
    if (!mapInstance.current || !tileLayerRef.current) return;

    // Remove old tile layer
    tileLayerRef.current.remove();

    // Add new tile layer based on theme
    const tileUrl = isDark
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" // Dark mode tiles
      : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"; // Light mode tiles

    const newTileLayer = L.tileLayer(tileUrl, {
      attribution: "",
    }).addTo(mapInstance.current);

    tileLayerRef.current = newTileLayer;
  }, [isDark]);

  return (
    <div className="w-full h-[300px] rounded-xl overflow-hidden border border-border/40 shadow-lg relative z-0">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}
