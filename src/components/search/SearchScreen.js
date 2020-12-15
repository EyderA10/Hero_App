import React, { useMemo } from 'react';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    // console.log(queryString.parse(location.search));
    // console.log(q);
    
    const location = useLocation();
    const { q = '' } =  useMemo(() => queryString.parse(location.search), [location.search]);
    
    const { value, handleInputChange} = useForm({
        hero: q
    });

    const { hero } = value;

    const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${hero}`);   
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-md-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="hero"
                            autoComplete="off"
                            autoFocus="autofocus"
                            value={hero}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn mt-1 btn-block btn-outline-success"
                        >
                            Search
                    </button>

                    </form>
                </div>

                <div className="col-md-7">
                    <h4>Results</h4>
                    <hr />

                    {(q === '')

                        &&

                        <div className="alert alert-info">
                            Search a Hero
                    </div>
                    }

                    {(q !== '' && heroesFilter.length === 0)

                        &&

                        <div className="alert alert-danger">
                            There are not exist hero with {q}
                    </div>
                    }

                    {
                        heroesFilter.map(heroe => {
                            return <HeroCard
                                key={heroe.id}
                                {...heroe}
                            />
                        })
                    }
                </div>

            </div>
        </div>
    )
}
