import Sidebar from "../components/sidebar/Sidebar";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./Team";
import SharedLayout from "./SharedLayout";
import Login from "./Login";
function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
