import axios from "axios";
import Clock from "../clock";
import Footer from "../Footer";
import Carrousel from "../Carrousel";
import Carta from "../Card";
import Loading from "../Spinner";
import { useState, useEffect } from "react";


const keyWords = ["soccer", "futbol", "uefa", "conmebol", "fifa"];
const news_api_key = import.meta.env.VITE_NEWS_API_KEY;



export default function News({len}) {
    const [articles, setArticles] = useState([]); // Maneja los datos de la API
    const [loading, setLoading] = useState(true); // Manejar estado de carga

    const fetchNews = (selectedLanguage) => {
      
      if(selectedLanguage==='./espana.png'){
        selectedLanguage='es';
      }else{
        selectedLanguage='en';
      }

      setLoading(true); // Activa el spinner
      const RandomKeyWord = keyWords[Math.floor(Math.random() * keyWords.length)];
      const url = `https://newsapi.org/v2/everything?q=${RandomKeyWord}&apiKey=${news_api_key}&language=${selectedLanguage}`;
  
      axios
        .get(url)
        .then((res) => {
          const shuffled = res.data.articles.sort(() => Math.random() - 0.5);
          const selected = shuffled.slice(0, 6);
          setArticles(selected); // Actualiza las noticias
          setLoading(false); // Detén el spinner
        })
        .catch((error) => {
          console.error("Error al cargar los datos:", error);
          setLoading(false); // Asegura que el spinner se detenga en caso de error
        });
    };
  
    // Llamada inicial para cargar noticias
    useEffect(() => {
      fetchNews(len);
    }, [len]); // Se ejecuta cada vez que cambia el idioma

    return(
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
        </>
    )
}