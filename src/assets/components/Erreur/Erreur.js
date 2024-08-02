import "../Erreur/Erreur.css"; 
import { Link } from "react-router-dom";

export default function Error() {

  return (
    <div className="error-page-container">
      <h1>404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-redirect">Retourner sur la page d'accueil</Link>
    </div>
  );
}