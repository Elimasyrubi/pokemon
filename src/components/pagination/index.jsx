// PropTypes
import PropTypes from "prop-types";
//Styles
import css from './css.module.scss';

const Pagination = ({
     nextPageFn, 
     previusPageFn, 
     page, 
     totalPages
     }) => {
    return (
        <div className={css.container}>
            <button 
            onClick={() => previusPageFn()}
            type='button'>
                    <i className="fas fa-caret-left"></i>
            </button>
            <div> {page} / {totalPages} </div>
            <button
            onClick={() => nextPageFn()}
            type='button'>
                <i className="fas fa-caret-right"></i>
            </button>
        </div>
    );
};
Pagination.defaultProps = {
}
Pagination.propTypes = {
    nextPageFn:PropTypes.func.isRequired,
    previusPageFn:PropTypes.func.isRequired,
    page:PropTypes.number.isRequired,
    totalPages:PropTypes.number.isRequired
  };
export default Pagination;