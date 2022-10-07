import { EthProvider } from "./contexts/EthContext";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Banks/Home";
import Register from "./components/Banks/Register";

function App() {
  return (
    // background-color: "#";
    <div className="">
      <EthProvider>
        {/* <div className=""> */}
        {/* <Demo /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/donor/register" element={<Home />} />
          <Route exact path="/patient/register" element={<Home />} />
        </Routes>
        {/* </div> */}
      </EthProvider>
    </div>
  );
}

export default App;
