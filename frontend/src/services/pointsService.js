const API_URL = "http://localhost:4000";

// Obtener todos los puntos
export async function getPoints() {
  const res = await fetch(`${API_URL}/points`);
  if (!res.ok) throw new Error("Error obteniendo puntos");
  return await res.json(); // JSON directo
}

// Crear un punto
export async function createPoint(newPoint) {
  const res = await fetch(`${API_URL}/points`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPoint),
  });

  if (!res.ok) throw new Error("Error creando punto");
  return await res.json();
}

// Eliminar un punto
export async function deletePoint(id) {
  const res = await fetch(`${API_URL}/points/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Error eliminando punto");
  return true;
}
