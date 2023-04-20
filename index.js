import express from 'express';
import { students } from './dbAgenda.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Server in runnig');
});

app.get('/api/students', (req, res) => {
	res.send(students);
});

app.get('/api/students/:id', (req, res) => {
	const student = students.find((c) => c.id === parseInt(req.params.id));

	if (!student) return res.status(404).json('Estudiante no Encontrado');
	else res.send(student);
});

app.post('/api/students', (req, res) => {
	const student = {
		id: students.length + 1,
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		edad: parseInt(req.body.edad),
		email: req.body.email,
		telefono: req.body.telefono,
		carrera: req.body.carrera,
		enrol: req.body.enrol === 'true',
	};

	students.push(student);
	res.send(student);
});

app.listen(5000, () => {
	console.log('Server is runnig on port 5000');
});
