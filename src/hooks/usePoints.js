import { useEffect, useState } from "react";
import axios from "axios";

export function usePoints() {
  const [points, setPoints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/points")
      .then(res => {
        setPoints(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error cargando puntos:", err);
        setLoading(false);
      });
  }, []);

  return { points, loading };
}
