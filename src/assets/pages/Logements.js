import { useEffect, useState } from "react";
import { fetchApiLogement } from "../Service/fetchApi";
import { useParams } from "react-router-dom";
import DetailLogement from "../components/DetailLogement/DetailLogement";
import Erreur from "../components/Erreur/Erreur";

const Logements = () => {
  const [data, setData] = useState(null); // État pour stocker les données API
  const [loading, setLoading] = useState(false); // État pour le chargement
  const [error, setError] = useState(null); // État pour les erreurs éventuelles

  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await fetchApiLogement(id); // Appel à la fonction fetchApi pour récupérer les données
        //console.log(result);

        if (Array.isArray(result)) {
          setData(result); // Stockage des données dans l'état
        } else {
          setData([result]); // Si ce n'est pas un tableau, enveloppez-le dans un tableau
        }
      } catch (error) {
        setError(error.message); // Stockage de l'erreur dans l'état
      } finally {
        setLoading(false); // Arrêt du chargement
      }
    };

    fetchData();
  },[id]);

  if (loading) return <div>Loading...</div>;
  if (error || !data) {
    return <Erreur />; // Retourner la page d'erreur si l'ID n'existe pas ou en cas d'erreur
  }

  return (
    <>
        <div>
          {data && data.map((logement) => (
          <DetailLogement 
            logement={logement}
          />
        ))}
        </div>
    </>
  );
};

export default Logements;