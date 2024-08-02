import "./Tags.css"


const Tags = ({ tags }) => {
    return (
        <ul className="logement-tags-list">
            {tags.map((tag, index) => (
                <li key={index} className="logement-tags">{tag}</li> //Pour chaque Tag, on retourne un Li
            ))}
        </ul>
    );
};

export default Tags;
