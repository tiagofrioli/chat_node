import express from 'express';

const app = express();

app.get('/', (request, response) => {
	return response.send('Ola mundo !!');
})


app.listen(3333, () => console.log("Server is running on port 3333"));