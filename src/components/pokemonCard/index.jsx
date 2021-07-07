// PropTypes
import PropTypes from "prop-types";
//Styles
import css from './css.module.scss'
 import { Link } from "react-router-dom";

const PokemonCard = ({pokemon}) => {
  return (
    <Link to={`/${pokemon.name}`}>
    <div className={css.cardcontainer}>
     <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <p className={css.name}>{pokemon.name}</p> 
   </div>
    </Link>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

 
export default PokemonCard ;