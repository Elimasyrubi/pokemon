import css from './css.module.scss';
import Logo from '../../assets/pokemonLogo.png';

const Navbar = () => {
    return ( 
   <div className={css.container}>
     <img 
     className={css.logo} 
     src={Logo} 
     alt=" Pokemon Logo" />
   </div>
 );
}
 
export default Navbar;