export default function CreatePoint({ onCreate }) {
  return (
    <button className="create-btn" onClick={onCreate}>
      Crear punto
    </button>
  );
}
