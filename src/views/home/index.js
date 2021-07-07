import HomeView from "./presentational";
import { useState, useEffect } from "react";

const Home = () => {
  //state
  const [{ pokemonList,  totalPages, loading }, setstate] = useState({
    pokemonList: [],
    totalPages: 0,
    loading: true,
  });
 const [page, setPage] = useState(0)
 const [searchText, setSearchText] = useState('')

  const getPokemonList = async () =>{
    const limit = 21;
    const offset = 21 * page;
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;
    try {
      setstate({ loading: true });
      //fetch pokemon list
      const response = await fetch(url);
      const data = await response.json();
      ////get al pokemons data
      const promises = data.results.map(async (pokemon) => {
        try {
          const response = await fetch(pokemon.url);
          const data = await response.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      });
      const results = await Promise.all(promises);
      setstate({
        pokemonList: results,
        loading: false,
        totalPages: Math.floor(data.count / 21),
      });
    } catch (error) {
      console.log(error);
      setstate({
        loading: false,
      });
    }
  }

  //Didmount
  useEffect(() => {
    getPokemonList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  //Next Page
  const nextPageFn = () => {
    console.log(page);
    setPage(page+1);
  };

  //  Previus Page
  const previusPageFn = () => {
    console.log(page);
    setPage(page-1);
  };

  //Get informations from input
  const getTextFn = (e) =>{
    setSearchText(e.target.value)
  }
  //get Single Pokemon
  const getSinglePokemonFn = (e) =>{
    if (e.key === 'Enter') {
     getsinglePokemon();
    }
  }

const getsinglePokemon = async () =>{
 const url = `https://pokeapi.co/api/v2/pokemon/${searchText}`;
    try{
      const response = await fetch(url);
          const data = await response.json();
          console.log(data)
          setstate({
            pokemonList: [data],
            loading: false,
          });

    }catch(error){
    }
  }

  return (
    <HomeView
      pokemonList={pokemonList}
      loading={loading}
      nextPageFn={nextPageFn}
      previusPageFn={previusPageFn}
      totalPages={totalPages}
      page={page}
      getTextFn={getTextFn}
      getSinglePokemonFn={getSinglePokemonFn}
      
    />
  );
};

export default Home;
