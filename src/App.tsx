import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {/* Tempo routes need to come before other routes to work properly */}
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add this to allow Tempo routes to work */}
        {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      </Routes>
    </Suspense>
  );
}

export default App;
