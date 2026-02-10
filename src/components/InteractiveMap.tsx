import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapPin } from "lucide-react";

// Cookeville, Tennessee, USA coordinates
const COOKEVILLE_COORDS: [number, number] = [36.1628, -85.5016];

export function InteractiveMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    // Only initialize once
    if (!mapContainer.current || mapInstance.current) return;

    // Create map instance
    const map = L.map(mapContainer.current, {
      attributionControl: false, // Remove attribution watermark
    }).setView(COOKEVILLE_COORDS, 13);

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "", // Remove attribution text
    }).addTo(map);

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
    L.marker(COOKEVILLE_COORDS, { icon: customIcon })
      .addTo(map)
      .bindPopup(
        '<div style="padding: 8px;"><h4 style="font-weight: 600; margin-bottom: 4px;">Cookeville, Tennessee</h4><p style="font-size: 12px; color: #666;">USA</p></div>',
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

  return (
    <div className="w-full h-[300px] rounded-xl overflow-hidden border border-border/40 shadow-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
}
