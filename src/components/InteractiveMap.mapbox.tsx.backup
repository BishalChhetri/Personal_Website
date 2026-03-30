import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { mapLocations } from "@/data/siteData";
import { MapPin } from "lucide-react";

// Public Mapbox access token - this is a publishable key safe for client-side use
// You can replace this with your own Mapbox public token from https://account.mapbox.com/
const MAPBOX_TOKEN = "pk.eyJ1IjoibG92YWJsZS1kZW1vIiwiYSI6ImNsd3F4N3BnZjAyYWcyanF6M3V5OHU2YzMifQ.GkTwjnJPgVXgdWn_bGBivQ";

export function InteractiveMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !MAPBOX_TOKEN) return;

    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [-20, 30],
      zoom: 1.5,
      projection: "globe",
    });

    map.current.addControl(new mapboxgl.NavigationControl(), "top-left");

    // Add markers for each location
    mapLocations.forEach((location) => {
      const marker = document.createElement("div");
      marker.className = "custom-marker";
      marker.innerHTML = `
        <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary-foreground">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
        </div>
      `;

      new mapboxgl.Marker(marker)
        .setLngLat(location.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(`
            <div class="p-2">
              <h4 class="font-semibold text-sm">${location.name}</h4>
              <p class="text-xs text-muted-foreground">${location.description}</p>
            </div>
          `)
        )
        .addTo(map.current!);
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  const flyToLocation = (location: (typeof mapLocations)[0]) => {
    if (!map.current) return;
    setActiveLocation(location.name);
    map.current.flyTo({
      center: location.coordinates,
      zoom: 8,
      duration: 2000,
      essential: true,
    });
  };

  if (!MAPBOX_TOKEN) {
    return (
      <div className="w-full h-[400px] rounded-xl bg-secondary flex items-center justify-center">
        <p className="text-muted-foreground">Map requires Mapbox API token</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {mapLocations.map((location) => (
          <button
            key={location.name}
            onClick={() => flyToLocation(location)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeLocation === location.name
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            <MapPin className="w-4 h-4" />
            {location.name}
          </button>
        ))}
      </div>
      <div
        ref={mapContainer}
        className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg"
      />
    </div>
  );
}
