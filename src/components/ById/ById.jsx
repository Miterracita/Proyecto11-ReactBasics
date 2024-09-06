import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import "./ById.css";

const ById = () => {

    const { type, id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const apiKey = '3fa07ecbd10ee9a37782c735f321f3cb';

    useEffect(() => {
        setLoading(true); // Muestra el loading mientras recibe la respuesta de la API

        fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=es-ES`)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(`Error al recuperar las ${type}s:`, error);
                setLoading(false);
            });
    }, [id, type]);

    return (
        <div>
            {loading && <Loading />}
            {data && (
                <div className="box-detail">
                    <h1>{data.title || data.name}</h1>
                    <div className="box-info">
                        <div className="box-img">
                            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title || data.name} />
                        </div>
                        <div className="box-txt">
                            <p>{data.overview}</p>
                            <p><strong>Fecha de lanzamiento:</strong> {data.release_date || data.first_air_date}</p>
                            <p><strong>Puntuación:</strong>{data .vote_average}</p>
                            <p><strong>Duración:</strong> {data.runtime || `${data.number_of_episodes} episodios en ${data.number_of_seasons} temporadas`}</p>
                            <p><strong>Productores:</strong> {data.production_companies.map(company => company.name).join(', ')}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ById;