import Header from "./components/Header";
import MapView from "./components/MapView";
import PointItem from "./components/PointItem";
import { usePoints } from "./hooks/usePoints";
import "./styles/App.css";

function App() {
  const { points, createPoint, deletePoint } = usePoints();

  return (
    <>
      <Header title="GeoDashboard — Telepuertos" />

      <div className="app-layout">
        <div className="sidebar">
          <h3 className="sidebar-title">Telepuertos</h3>

          <button className="create-btn" onClick={createPoint}>
            Añadir telepuerto
          </button>

          <div className="sidebar-section">
            <h4>Acciones</h4>
            <button className="secondary-btn">Filtrar por estado</button>
            <button className="secondary-btn">Mostrar activos</button>
          </div>

          <div className="sidebar-section">
            <h4>Lista</h4>
            <ul className="station-list">
              {points.map((p) => (
                <PointItem
                  key={p.id}
                  point={p}
                  onDelete={() => deletePoint(p.id)}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="map-container">
          <MapView points={points} />
        </div>
      </div>
    </>
  );
}

export default App;
