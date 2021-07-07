import HomeView from "./presentational";
import { useState, useEffect } from "react";

const Home = () => {

  //state
  const [{ pokemonList, totalPages, loading }, setstate] = useState({
    pokemonList: [],
    totalPages: 0,
    loading: true,
  });
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [errorResponse, setErrorResponse] = useState(false);


  //get pokemon list Funtoins
  const getPokemonList = async () => {
    const limit = 21;
    const offset = 21 * page;
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`;

    try {
      setstate({ loading: true });

      //fetch pokemon list
      const response = await fetch(url);
      const data = await response.json();

      ////get all pokemons data
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
        totalPages: Math.floor(data.count / limit),
      });
      setErrorResponse(false);
    } catch (error) {
      //here we can handle the error response
      console.log(error);
      setstate({loading: false,});
    }
  };

  //Didmount
  useEffect(() => {
    getPokemonList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  //Next Page Funtions
  const nextPageFn = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  //  Previus Page Funtions
  const previusPageFn = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  //Get informations from search input
  const getTextFn = (e) => {
    setSearchText(e.target.value);
    //do this when delete all text from input
    if (e.target.value === "") {
      getPokemonList();
    }
  };

  //get Single Pokemon function
  const getSinglePokemonFn = (e) => {
    if (e.key === "Enter") {
      getsinglePokemon();
    }
  };

  //clean search input 
  const cleanSearchInputFn = (e) => {
    setSearchText("");
    getPokemonList();
  };

  //fetch single pokemon 
  const getsinglePokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${searchText}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setstate({
        pokemonList: [data],
        loading: false,
      });
      setErrorResponse(false);
    } catch (error) {
      setErrorResponse(true);
    }
  };

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
      searchText={searchText}
      cleanSearchInputFn={cleanSearchInputFn}
      errorResponse={errorResponse}
    />
  );
};

export default Home;
