import { useMap } from "react-leaflet";

export default function LocateButton() {
  const map = useMap();

  function handleLocate() {
    if (!navigator.geolocation) {
      alert("La geolocalización no está disponible en este navegador");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        map.setView([latitude, longitude], 13);
      },
      () => {
        alert("No se pudo obtener tu ubicación");
      }
    );
  }

  return (
    <button
      onClick={handleLocate} className="locate-button">
      Centrar en mi ubicación
    </button>
  );
}
