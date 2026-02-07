import { useEffect, useState } from "react";
import {
  getPoints,
  createPoint as createPointService,
  deletePoint as deletePointService,
} from "../services/pointsService";

export function usePoints() {
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar puntos al inicio
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPoints(); // JSON directo
        setPoints(data);
      } catch (err) {
        console.error("Error cargando puntos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Crear punto
  const createPoint = async (newPoint) => {
    try {
      const created = await createPointService(newPoint);
      setPoints((prev) => [...prev, created]);
    } catch (err) {
      console.error("Error creando punto:", err);
    }
  };

  // Eliminar punto
  const deletePoint = async (id) => {
    try {
      await deletePointService(id);
      setPoints((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Error eliminando punto:", err);
    }
  };

  return { points, loading, createPoint, deletePoint };
  
}
