
// PropTypes
import PropTypes from 'prop-types';
//Dependence
import { Link } from 'react-router-dom';
//Components
import Loading from '../../components/loading/index';
//Styles
import css from './css.module.scss';

const singlePokemonView = ({ pokemon, loading, evolutions }) => {
    return (
        <div>
            {loading ? <Loading /> : (
                <div className={css.container}>
                   <button className={css.back} type='button'> <Link to='/'> <i className="fas fa-chevron-circle-left"></i></Link></button>
                    <div className={css.cardContainer}>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                        <p>Name: <span>{pokemon.name}</span></p>
                        <p>types:
                            {pokemon.types.map((item) => (
                                <span key={item.type.name}>{item.type.name}</span>
                            ))}
                        </p>
                        <p>Evolution:
                            {evolutions.map((item) => (
                                <span key={item.species.name}>{item.species.name}</span>
                            ))}
                        </p>
                    </div>
                </div>
            )}

        </div>
    );
}
singlePokemonView.defaultProps = {
    pokemon: {},
    loading: false,
    evolutions: [],
}

singlePokemonView.propTypes = {
    pokemon: PropTypes.object,
    loading: PropTypes.bool,
    evolutions: PropTypes.array,
}
export default singlePokemonView;