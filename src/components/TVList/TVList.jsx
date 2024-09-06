import PeticionApi from "../PeticionApi/PeticionApi";
import BoxList from "../box-list/box-list";
import "./TVList.css";

const TVList = () => {

    return (
        <PeticionApi type="tv">
            {(tvs, type) => (
                <ul className="list">
                    {tvs.map(tv => (
                        <BoxList key={tv.id} apiInfo={tv} type={type}/>
                    ))}
                </ul>
            )}
        </PeticionApi>
    );
};

export default TVList;
