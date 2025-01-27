import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/routes/News";


const Languages=[  
  { code: "es", image: "./espana.png" },
  { code: "en", image: "./estados-unidos.png" }
];
const RandomLanguage = Languages[Math.floor(Math.random() * Languages.length)];


// Plantilla simple para las secciones Futbol, NBA y NFL
function SimpleTemplate({ title }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg mt-4">Contenido en desarrollo...</p>
    </div>
  );
}


function App() {
  const [Lenguage, setLenguage] = useState(RandomLanguage.image);

  return (
    <Router>
      <NavBar Language={Lenguage} setLanguage={setLenguage}/>
      <Routes>
        {/* Ruta por defecto que redirige a /news */}
        <Route path="/" element={<Navigate to="/news" />} />
        <Route path="/news" element={<News len={Lenguage}/>} />
        <Route path="/futbol" element={<SimpleTemplate title="Futbol" />} />
        <Route path="/nba" element={<SimpleTemplate title="NBA" />} />
        <Route path="/nfl" element={<SimpleTemplate title="NFL" />} />
      </Routes>
    </Router>
  );
}

export default App;
