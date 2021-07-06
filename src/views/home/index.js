import HomeView from './presentational';
import { useState } from 'react';

const Home = () => {
    const [{pokemonList}, setstate] = useState({
        pokemonList: []
    })
    return ( 
    <HomeView
    pokemonList={pokemonList}
    /> );
}
 
export default Home;