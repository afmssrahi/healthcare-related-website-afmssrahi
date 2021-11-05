import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Registration/Register';
import Services from './Pages/Services/Services';
import Footer from './Pages/SharedComponents/Footer/Footer';
import Header from './Pages/SharedComponents/Header/Header';
import SingleService from './Pages/SingleService/SingleService';

function App() {
	return (
		<div>
			<AuthProvider>
				<Router>
					<Header></Header>
					<Switch>
						<Route exact path='/'>
							<Home></Home>
						</Route>
						<Route path='/home'>
							<Home></Home>
						</Route>
						<Route path='/services'>
							<Services></Services>
						</Route>
						<PrivateRoute path='/service/:serviceId'>
							<SingleService></SingleService>
						</PrivateRoute>
						<Route path='/about'>
							<About></About>
						</Route>
						<PrivateRoute path='/contact'>
							<Contact></Contact>
						</PrivateRoute>
						<Route path='/login'>
							<Login></Login>
						</Route>
						<Route path='/register'>
							<Register></Register>
						</Route>
						<Route path='*'>
							<NotFound></NotFound>
						</Route>
					</Switch>
					<Footer></Footer>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
