import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="card-columns animate__animated animate__fadeInLeft">
           {
               heroes.map(heroe => {
                 return <HeroCard 
                 key={heroe.id}
                 {...heroe}
                 />
                      
               })
           } 
        </div>
    );
}
