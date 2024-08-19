import { Route, Routes } from "react-router-dom";
import "./scss/common.scss";

import Home from "./page/Home";
import Fleamarket from "./page/Fleamarket";
import NearbyStores from "./page/NearbyStores";
import Jobs from "./page/Jobs";
import Realty from "./page/Realty";
import Car from "./page/Car";

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
