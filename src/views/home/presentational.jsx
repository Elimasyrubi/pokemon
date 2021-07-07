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
    errorResponse,
    nextPageFn,
    previusPageFn,
    totalPages,
    page,
    getTextFn,
    getSinglePokemonFn,
    searchText,
    cleanSearchInputFn,

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
                    value={searchText}
                />
                <button onClick={cleanSearchInputFn} type='button' className={css.cleanIcon}>
                    {searchText.length > 0 ? <i className="fas fa-times"></i> : null}
                </button>


            </div>
            <Pagination
                nextPageFn={nextPageFn}
                previusPageFn={previusPageFn}
                totalPages={totalPages}
                page={page}
            />
            {loading === true ? <Loading /> : (
                <>
                    {errorResponse === true ? <p>Pokemon not found, please try again</p> : (
                        <div className={css.cardContainer}>
                            {pokemonList.map((pokemon) => (
                                <PokemonCard
                                    key={pokemon.name}
                                    pokemon={pokemon}
                                />
                            ))}
                        </div>
                    )}

                </>
            )}


        </div>
    );
}
HomeView.defaultProps = {
    pokemonList: [],
    loading: false,
    errorResponse: false,
    cleanSearchInputFn: () => { },
    getSinglePokemonFn: () => { },
    getTextFn: () => { },
    nextPageFn: () => { },
    previusPageFn: () => { },
    totalPages: 0,
    page: 0,
    searchText: '',
}

HomeView.propTypes = {
    pokemonList: PropTypes.array,
    loading: PropTypes.bool,
    errorResponse: PropTypes.bool,
    cleanSearchInputFn: PropTypes.func,
    getSinglePokemonFn: PropTypes.func,
    getTextFn: PropTypes.func,
    nextPageFn: PropTypes.func,
    previusPageFn: PropTypes.func,
    totalPages: PropTypes.number,
    page: PropTypes.number,
    searchText: PropTypes.string,
}
export default HomeView;