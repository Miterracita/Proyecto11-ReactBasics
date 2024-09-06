import "./box-list.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const BoxList = ({ apiInfo, type }) => {

    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
    };

    return (
        <li className="box-element">
            <Link to={`/${type}/${apiInfo.id}`}>
                <h2>{apiInfo.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500${apiInfo.poster_path}`} alt={apiInfo.title} />
            </Link>
            <div className="btn-ver-descripcion" onClick={toggleDescription}>
                <p>VER DESCRIPCIÓN</p>
            </div>              
            {showDescription && (
                <div className="ver-descripcion">
                    {apiInfo.overview ? (
                        <>
                            <p>{apiInfo.overview}</p>
                            <div className="btn-cerrar" onClick={toggleDescription}>
                                <p>CERRAR</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <p><strong>No hay descripción disponible</strong></p>
                            <div className="btn-cerrar" onClick={toggleDescription}>
                                <p>CERRAR</p>
                            </div>
                        </>
                    )}
                </div>
            )}                    
        </li>
    );
};


export default BoxList;
