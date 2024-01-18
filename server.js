import express from 'express';

const app = express();
const PORT = 3000;

// Set static folder
app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true}));

// Handle GET request to fetch users

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Start the server
app.listen(3000, () => {
console.log(`Server listening successfully on port ${PORT}`)
});