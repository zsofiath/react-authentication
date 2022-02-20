import { Switch, Route, Redirect } from 'react-router-dom';
import {useContext} from 'react'
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext)
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        {!authCtx.isLogedIn && (<Route path='/auth'>
          <AuthPage />
        </Route>)}
        <Route path='/profile'>
        {authCtx.isLogedIn &&<UserProfile />}
        {!authCtx.isLogedIn && <Redirect to='/auth'></Redirect>}
        </Route>
        <Route path="*">
          <Redirect to='/'></Redirect>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
