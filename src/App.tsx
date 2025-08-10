import llaLogo from "./assets/lla-aguila.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={llaLogo} className="logo" alt="LLA logo" />
        </a>
      </div>
      <h1>Alianza La Libertad Avanza</h1>
      <div className="card"></div>
      <p className="read-the-docs"></p>
    </>
  );
}

export default App;
