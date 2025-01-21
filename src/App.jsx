import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Clock from "./components/clock";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Carrousel from "./components/Carrousel";
import Carta from "./components/Card";

const keyWords = ["soccer", "futbol", "uefa", "conmebol", "fifa"];
const RandomKeyWord = keyWords[Math.floor(Math.random() * keyWords.length)];
const news_api_key = import.meta.env.VITE_NEWS_API_KEY;
const url = `https://newsapi.org/v2/everything?q=${RandomKeyWord}&apiKey=${news_api_key}`;

function App() {
  const [articles, setArticles] = useState([]); // Maneja los datos de la API

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
    <>
      <NavBar />
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
          <p>Cargando noticias...</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
