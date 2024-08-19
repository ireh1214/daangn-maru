import { Route, Routes } from "react-router-dom";
import "./scss/common.scss";

import Home from "./views/Home";
import Fleamarket from "./views/Fleamarket";
import NearbyStores from "./views/NearbyStores";
import Jobs from "./views/Jobs";
import Realty from "./views/Realty";
import Car from "./views/Car";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fleamarket" element={<Fleamarket />} />
      <Route path="/nearbyStores" element={<NearbyStores />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/realty" element={<Realty />} />
      <Route path="/car" element={<Car />} />
    </Routes>
  );
}

export default App;
