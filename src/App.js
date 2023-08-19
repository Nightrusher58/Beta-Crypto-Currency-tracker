import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Details from "./pages/Details";
import Error from "./pages/Error";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/details/:coinId" element={<Details />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
