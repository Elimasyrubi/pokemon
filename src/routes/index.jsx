//Dependences
import { Switch, Route, BrowserRouter } from 'react-router-dom';
//Views
import Home from '../views/home/index';
import Layout from '../layout/index';
// import not found

const Routes = () => {
    return (
        <BrowserRouter>
            <Layout>
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
            </Layout>
        </BrowserRouter>
    )
};


export default Routes;