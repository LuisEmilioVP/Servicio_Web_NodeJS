import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
	res.send('Server in runnig');
});

app.listen(5000, () => {
	console.log('Server is runnig on port 5000');
});
