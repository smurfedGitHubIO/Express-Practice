const express = require('express');
const app = express();

// Check body-parser module for JSON parsing
app.use(express.json());

const PORT = process.env.port || 5000;

// Logger function - takes in request object, response object, and next middleware to be run
const logger = (req, res, next) => {
	console.log(req.url);
	next();
}

// Middleware - used to meddle with req and res objects
app.use(logger);

// Sample GET request
app.get('/', (req, res) => {
	console.log(req.url);
	res.send(`<h1>Hello World</h1>`);
});

// Sample POST request - run this using POSTMAN
app.post('/', (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

// Start server
app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`));