'use client'
import { useEffect, useRef } from "react";
 
const loadGoogleMapsScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_KEY_GOOGLE_MAPS}&libraries=places`;
      script.defer = true;
      script.async = true;
      script.onload = () => {
        resolve();
      };
      script.onerror = (error) => {
        reject(error);
      };
      document.head.appendChild(script);
    });
  };

const GoogleMaps = () => {
    const mapRef = useRef(null);

    useEffect(() => {
      // Cargar el script de Google Maps de forma asíncrona
      loadGoogleMapsScript()
        .then(() => {
          // La API de Google Maps se ha cargado correctamente
          const google = window.google;
  
          // Configura las opciones del mapa
          const mapOptions = {
            center: { lat: -12.055441249924554, lng: -77.03845047140406 },
            zoom: 15,
          };
  
          // Crea el mapa en el nodo del mapa
          const map = new google.maps.Map(mapRef.current, mapOptions);
  
          // Crea un marcador en el mapa
          const marker = new google.maps.Marker({
            position: { lat: -12.055441249924554, lng: -77.03845047140406 },
            map: map,
            title: "Ubicación",
          });
        })
        .catch((error) => {
          console.error("Error al cargar la API de Google Maps:", error);
        });
    }, []);
  
    return (
      <div className="p-30 mb-30" style={{ width: "100%", height: "250px" }}>
        <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
      </div>
    );
  };
  

export default GoogleMaps;