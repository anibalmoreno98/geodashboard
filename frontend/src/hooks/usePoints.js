import { useEffect, useState } from "react";
import { getPoints, createPoint as createPointService, deletePoint as deletePointService } from "../services/pointsService";

export function usePoints() {
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar puntos al inicio
  useEffect(() => {
    getPoints()
      .then(res => {
        setPoints(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error cargando puntos:", err);
        setLoading(false);
      });
  }, []);

  // Crear punto
  const createPoint = async (newPoint) => {
    const res = await createPointService(newPoint);
    setPoints([...points, res.data]);
  };

  // Eliminar punto
  const deletePoint = async (id) => {
    await deletePointService(id);
    setPoints(points.filter(p => p.id !== id));
  };

  return { points, loading, createPoint, deletePoint };
}
