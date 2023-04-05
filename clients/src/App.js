import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Home from './components/Home';
import AddContacts from './components/AddContacts';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				{/* Aletrs Modal */}
				<ToastContainer position="top-center" />
				{/* Aletrs Modal */}

				{/* Components */}
				<Routes>
					<Route exact path="/" Component={Home} />
					<Route path="/AddContact" Component={AddContacts} />
				</Routes>
				{/* Components */}
			</div>
		</BrowserRouter>
	);
}

export default App;
