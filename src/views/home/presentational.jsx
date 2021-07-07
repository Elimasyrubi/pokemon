// PropTypes
import PropTypes from 'prop-types';
//components
import PokemonCard from '../../components/pokemonCard/index';
import Loading from '../../components/loading/index';
import Pagination from '../../components/pagination/index';
//Styles
import css from './css.module.scss';

const HomeView = ({
    pokemonList,
    loading,
    nextPageFn,
    previusPageFn,
    totalPages,
    page,
    getTextFn,
    getSinglePokemonFn,
 }) => {
    return (
        <div className={css.container}>
             <div className={css.inputContainer}>
                        <input
                            onChange={getTextFn}
                            onKeyPress={(e) => getSinglePokemonFn(e)}
                            type="text"
                            className={css.search}
                            placeholder='Search you favorite Pokemon...'
                        />
                        <Pagination
                            nextPageFn={nextPageFn}
                            previusPageFn={previusPageFn}
                            totalPages={totalPages}
                            page={page}
                        />
                    </div>
            {loading === true ? <Loading /> : (
                <>
                   
                    <div className={css.cardContainer}>
                        {pokemonList.map((pokemon) => (
                            <PokemonCard
                                key={pokemon.name}
                                pokemon={pokemon}

                            />
                        ))}
                    </div>
                </>
            )}


        </div>
    );
}
HomeView.defaultProps = {
    pokemonList: [],
    loading: false,
    getSinglePokemonFn: () => { },
    getTextFn: () => { },
    nextPageFn: () => { },
    previusPageFn: () => { },
    totalPages: 0,
    page: 0,
}

HomeView.propTypes = {
    pokemonList: PropTypes.array,
    loading: PropTypes.bool,
    getSinglePokemonFn: PropTypes.func,
    getTextFn: PropTypes.func,
    nextPageFn: PropTypes.func,
    previusPageFn: PropTypes.func,
    totalPages: PropTypes.number,
    page: PropTypes.number,
}
export default HomeView;