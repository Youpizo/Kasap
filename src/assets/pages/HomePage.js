import { HeaderBanner1 } from "../components/Banner/Banner";
import { useEffect, useState } from "react";
import { fetchApi } from "../Service/fetchApi";
import LogementsCard from "../components/Card/Card";


const HomePage = () => {
  const [data, setData] = useState(null); // État pour stocker les données API
  const [loading, setLoading] = useState(false); // État pour le chargement
  const [error, setError] = useState(null); // État pour les erreurs éventuelles

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchApi(); // Appel à la fonction fetchApi pour récupérer les données
        setData(result); // Stockage des données dans l'état
      } catch (error) {
        setError(error.message); // Stockage de l'erreur dans l'état
      } finally {
        setLoading(false); // Arrêt du chargement
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <HeaderBanner1 />
      <div className="logements-menu">
      <div className="grid-container">
        {data && data.map((logement) => (
          <LogementsCard
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
      </div>
    </>
  );
};

export default HomePage;