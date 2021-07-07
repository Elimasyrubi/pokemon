import SinglePokemonView from "./presentational";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

const SinglePokemon = () => {
  //state
  const [{loading, data, evolutions}, setstate] = useState({
    loading: true,
    data: {},
    evolutions:[]
  });

  //get name from url
  let { name } = useParams();

  const getsinglePokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    try {
      //get pokemon data
      const response = await fetch(url);
      const data = await response.json();

      //get pokemon evolutions
      const evolutionResponse = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${data.id}/`)
      const dataEvolutions = await evolutionResponse.json();
      const evolutions = dataEvolutions.chain.evolves_to;
      
      //evolutions in console because the API return wrong data
      /* evolutions.forEach(element => {
        console.log('this pokemon Evolve to', element.species.name)
      }); */
      setstate({
        data: data,
        loading: false,
        evolutions: evolutions
      });
    } catch (error) {
      console.log(error);
      setstate({
        loading: false,
      });
    }
  };

  useEffect(() => {
    getsinglePokemon();
  }, []);

  return (
    <>
      <SinglePokemonView
      pokemon={data}
      loading={loading}
      evolutions = {evolutions}
      
      />
    </>
  );
};

export default SinglePokemon;
