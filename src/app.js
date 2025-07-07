import dotenv from 'dotenv'; // Load environment variables from .env file
import express from 'express';
import path from 'path';
import homeRoute from './routes/home.js';
import discographyRoute from './routes/discography.js';
import aboutRoute from './routes/about.js';
import albumDetailRoute from './routes/albumDetail.js';
import morgan from 'morgan'; // HTTP request logger middleware
import helmet from 'helmet';

app.use(helmet());
app.use(morgan('dev'));

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

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', { url: req.originalUrl });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', { error: err });
});