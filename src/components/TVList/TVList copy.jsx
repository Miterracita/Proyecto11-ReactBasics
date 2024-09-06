import BoxList from "../box-list/box-list";
import Loading from "../Loading/Loading";
import "./TVList.css";
import { useState, useEffect } from "react";

const TVList = () => {

    const [tvs, setTvs] = useState([]);
    const [loading, setLoading] = useState(false);

    const apiKey = '3fa07ecbd10ee9a37782c735f321f3cb';

    useEffect(() => {
        
        setLoading(true);//mientras recibe la respuesta de la api muestra el loading

          fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=es-ES&page=1`)
            .then(response => response.json())
            .then(data => {
                setTvs(data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al recuperar las movies:', error);
                setLoading(false);
            });

    }, []);

    return (
        <div>
            {loading && <Loading />}
            <ul className="list">
                {tvs.map(tv => (
                    <BoxList key={tv.id} apiInfo={tv}/>
                ))}
            </ul>
        </div>
    );
};

export default TVList;
