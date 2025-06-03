require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const path = require('path');
const homeRoute = require('./routes/home');
const discographyRoute = require('./routes/discography');
//const discographyRoute = require('./routes/discography-search'); // Use the search route for dynamic fetching
const aboutRoute = require('./routes/about');
const albumDetailRoute = require('./routes/albumDetail');

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.use('/', homeRoute);
app.use('/discography', discographyRoute);
app.use('/about', aboutRoute);
app.use('/album', albumDetailRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Start the server only if not required by another module (like tests)
// if (require.main === module) {
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
// }

// module.exports = app; // <-- Export the app for testing