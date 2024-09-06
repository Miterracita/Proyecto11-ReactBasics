import Loading from "../Loading/Loading";
import { useState, useEffect } from "react";

const PeticionApi = ({ type, children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const apiKey = '3fa07ecbd10ee9a37782c735f321f3cb';

    useEffect(() => {
        setLoading(true); // Muestra el loading mientras recibe la respuesta de la API

        fetch(`https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&language=es-ES&page=1`)
            .then(response => response.json())
            .then(data => {
                setData(data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error(`Error al recuperar las ${type}s:`, error);
                setLoading(false);
            });
    }, [type]);

    return (
        <div>
            {loading && <Loading />}
            {children(data, type)}
        </div>
    );
};

export default PeticionApi;
