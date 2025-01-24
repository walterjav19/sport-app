import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Clock from "./components/clock";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Carrousel from "./components/Carrousel";
import Carta from "./components/Card";
import Loading from "./components/Spinner";

const keyWords = ["soccer", "futbol", "uefa", "conmebol", "fifa"];
const Languages=[  
  { code: "es", image: "./espana.png" },
  { code: "en", image: "./estados-unidos.png" }
];
const RandomLanguage = Languages[Math.floor(Math.random() * Languages.length)];
const RandomKeyWord = keyWords[Math.floor(Math.random() * keyWords.length)];
const news_api_key = import.meta.env.VITE_NEWS_API_KEY;
const url = `https://newsapi.org/v2/everything?q=${RandomKeyWord}&apiKey=${news_api_key}&language=${RandomLanguage.code}`;

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
  const [articles, setArticles] = useState([]); // Maneja los datos de la API
  const [Lenguage, setLenguage] = useState(RandomLanguage.image);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // Mezcla los artículos y selecciona 6 aleatorios
        const shuffled = res.data.articles.sort(() => Math.random() - 0.5);
        const selected = shuffled.slice(0, 6);
        setArticles(selected); // Actualiza el estado con las 6 noticias
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  }, []); // Solo se ejecuta una vez

  return (
    <Router>
      <NavBar Language={Lenguage} setLanguage={setLenguage}/>
      <Routes>
        {/* Ruta por defecto que redirige a /news */}
        <Route path="/" element={<Navigate to="/news" />} />
        <Route path="/news" element={
          <>
          <Carrousel images={["./pessi.jpeg", "./penaldo.jpg", "./vini.jpeg", "./jordan.jpg", "./brady.png"]} />
          <Clock />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <Carta
                  key={index}
                  image={article.urlToImage || "./placeholder.jpg"} // Si no hay imagen, usa un placeholder
                  title={article.title}
                  description={article.description}
                />
              ))
            ) : (
              <Loading />
            )}
          </div>
          <Footer />
        </>} />
        <Route path="/futbol" element={<SimpleTemplate title="Futbol" />} />
        <Route path="/nba" element={<SimpleTemplate title="NBA" />} />
        <Route path="/nfl" element={<SimpleTemplate title="NFL" />} />
      </Routes>
    </Router>
  );
}

export default App;
