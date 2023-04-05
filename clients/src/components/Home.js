import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
	//* inicializar enrutamiento a la api
	const urlApi = 'http://www.raydelto.org/agenda.php';
	const [data, setData] = useState([]);

	const loadData = async () => {
		const response = await axios.get(urlApi);
		setData(response.data);
		console.log(response.data);
	};

	useEffect(() => {
		loadData();
	}, []);

	return (
		<div style={{ marginTop: '9.375rem' }}>
			<Link to="/AddContact">
				<button className="btn btn_contact">Agregar Contacto</button>
			</Link>
			<table className="table_cont">
				<thead>
					<tr>
						<th style={{ textAlign: 'center' }}>Nombre</th>
						<th style={{ textAlign: 'center' }}>Apellidos</th>
						<th style={{ textAlign: 'center' }}>Teléfono</th>
					</tr>
				</thead>

				<tbody>
					{data.map((items, index) => {
						return (
							<tr key={index}>
								<td>{items.nombre}</td>
								<td>{items.apellido}</td>
								<td>{items.telefono}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Home;
