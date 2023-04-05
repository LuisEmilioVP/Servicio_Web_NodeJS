import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './AddContacts.css';

const AddContacts = () => {
	const [formData, setFormData] = useState({
		nombre: '',
		apellido: '',
		telefono: '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		let error = {};
		if (formData.nombre.trim() === '') {
			error = toast.error('El nombre es obligatorio');
		}
		if (formData.apellido.trim() === '') {
			error = toast.error('El apellido es obligatorio');
		}
		if (formData.telefono.trim() === '') {
			error = toast.error('El telléfono es obligatorio');
		}
		if (Object.keys(error).length === 0) {
			axios
				.post('http://www.raydelto.org/agenda.php', formData)
				.then((response) => {
					toast.success('Contacto Guardado');
					console.log(response);
					setFormData({
						nombre: '',
						apellido: '',
						telefono: '',
					});
				})
				.catch((error) => {
					toast.error('Ha occurrido un error');
					console.log(error);
				});
		} else {
			error = 'Algo salio mal!';
		}
	};

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	return (
		<div style={{ marginTop: '6.25rem' }}>
			<h2 style={{ marginBotton: '0.5rem' }}>Añade un nuevo Contacto</h2>

			<form
				style={{
					margin: 'auto',
					padding: '1rem',
					maxWidth: '25rem',
					alignContent: 'center',
				}}
				onSubmit={handleSubmit}
			>
				<label htmlFor="nombre">Ingrece su Nombre</label>
				<input
					type="text"
					name="nombre"
					id="nombre"
					value={formData.nombre}
					onChange={handleChange}
				/>
				<label htmlFor="apellido">Ingrece su Apellido</label>
				<input
					type="text"
					name="apellido"
					id="apellido"
					value={formData.apellido}
					onChange={handleChange}
				/>
				<label htmlFor="telefono">Ingrece su Teléfono</label>
				<input
					type="text"
					name="telefono"
					id="telefono"
					value={formData.telefono}
					onChange={handleChange}
				/>
				<input type="submit" value="Guardar" />
				<Link to="/">
					<input type="button" value="Inicio" />
				</Link>
			</form>
		</div>
	);
};

export default AddContacts;
