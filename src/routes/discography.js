import express from 'express';
import { albums } from './contentful-discography.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('discography', { albums });
});

export default router;
export {albums};