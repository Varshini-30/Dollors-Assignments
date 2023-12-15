import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Electronics from "./components/Electronics";
import Fashion from "./components/Fashion";
import Jewellers from "./components/Jewellers";
import Cloths from "./components/Cloths";
import Login from "./components/Login";
import Phones1 from "./components/Phones1";
import Bangle from "./components/Bangle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="fashion" element={<Fashion />} />
          <Route path="jewellers" element={<Jewellers />} />
          <Route path="cloths" element={<Cloths />} />
          <Route path="phones1" element={<Phones1 />} />
          <Route path="login" element={<Login />} />
          <Route path="bangle" element={<Bangle/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
