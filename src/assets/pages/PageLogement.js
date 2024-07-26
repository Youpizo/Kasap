
import { useEffect, useState } from "react";
import { fetchApi } from "../Service/fetchApi";
import DetailLogement from "../components/DetailLogement/DetailLogement";



const PageLogement = () => {
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
      {data && data.map((logement) => (
      <DetailLogement 
      key={logement.id}
      id={logement.id}
      title={logement.title}
      cover={logement.cover}
      rating={logement.rating}
      />
  ))}
  </>
  );
};

export default PageLogement;