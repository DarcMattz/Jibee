import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import CustomCursor from "./components/CustomCursor";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <>
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
