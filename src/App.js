import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import VendorDashboard from "./components/VendorDashboard/VendorDashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <VendorDashboard />
    </div>
  );
}

export default App;
