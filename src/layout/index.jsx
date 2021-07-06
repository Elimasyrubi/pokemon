import Navbar from '../components/navbar/index';

function Layout(props) {
    return (
        <>
           <Navbar/>
            {props.children}
        </>
    );
}

export default Layout;