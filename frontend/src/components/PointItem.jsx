export default function PointItem({ point, onDelete }) {
  return (
    <li className="point-card">
      <span>{point.name}</span>
      <button className="delete-btn" onClick={onDelete}>Eliminar</button>
    </li>
  );
}
