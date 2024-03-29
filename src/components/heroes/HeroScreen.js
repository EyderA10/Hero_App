import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroeById } from '../../selectors/getHeroeById';

export const HeroScreen = ({history}) => {

    const { heroeId } = useParams();

    const hero = useMemo(() => getHeroeById(heroeId), [heroeId]);

    if (!hero) {
        return <Redirect to="/" />;
    }

    const handleReturn = () => {

        if(history.length <= 2){
            history.push('/');
        }else{
            
            history.goBack();

        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-md-4 animate__animated animate__fadeIn">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    className="img-thumbnail"
                    alt={superhero}
                />

            </div>

            <div className="col-md-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter ego:</b> {alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"> <b>First appearance:</b> {first_appearance}</li>
                </ul>

                <div className="mt-3">
                    <h5> Character: </h5>
                    <p>{characters}</p>

                    <button 
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                    >
                        Return
                </button>
                </div>
            </div>
        </div>
    )
}
