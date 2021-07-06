// PropTypes
import PropTypes from 'prop-types';
//Styles
import css from './css.module.scss';

const HomeView = ({pokemonList}) => {
    return (
       <div className={css.container}>
           <input 
           type="text"
           className={css.search}
           placeholder='Search you favorite Pokemon...' />
       </div>
    );
}
HomeView.defaultProps = {
    pokemonList: [],
}

HomeView.propTypes = {
    pokemonList: PropTypes.array,
}
export default HomeView;