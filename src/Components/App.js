import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HomePage />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
