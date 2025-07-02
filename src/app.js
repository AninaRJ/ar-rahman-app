import dotenv from 'dotenv'; // Load environment variables from .env file
import express from 'express';
import path from 'path';
import homeRoute from './routes/home.js';
import discographyRoute from './routes/discography.js';
//import discographyRoute from './routes/discography-search.js'; // Use the search route for dynamic fetching
import aboutRoute from './routes/about.js';
import albumDetailRoute from './routes/albumDetail.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views'));

// Middleware to serve static files
app.use(express.static(path.join(path.resolve(), 'src', 'public')));

// Define routes
app.use('/', homeRoute);
app.use('/discography', discographyRoute);
app.use('/about', aboutRoute);
app.use('/album', albumDetailRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});