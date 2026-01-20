import Header from "./components/Header";
import MapView from "./components/MapView";
import "./styles/App.css";

function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Header title="GeoDashboard - Mapa Interactivo" />
      <MapView />
    </div>
  );
}

export default App;
