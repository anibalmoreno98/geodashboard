import { updatePoint } from "../services/pointsService";

export default function EditPoint({ point }) {
  function handleUpdate() {
    updatePoint(point.id, {
      name: "Actualizado",
      lat: 28.6,
      lng: -13.7
    }).then(() => alert("Punto actualizado"));
  }

  return <button onClick={handleUpdate}>Actualizar</button>;
}
