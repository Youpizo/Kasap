
// Fonction asynchrone pour récupérer les données depuis l'API
export const fetchApi = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/properties');
    if (!response.ok) {
      throw new Error('Pas de réponse serveur');
    } 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur :', error);
    throw error;
  } 
};

export const fetchApiLogement = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/properties/${id}`);
    if (!response.ok) {
      throw new Error("Pas de réponse serveur");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur :", error);
    throw error;
  }
};
