import express from 'express';
import { albums } from '../cms/contentful-discography.js'; // Import the albums data

const router = express.Router();

router.get('/', (req, res) => {
  console.log("Rendering discography page with albums:", albums);
  res.render('discography', { albums });
});

export default router;
export {albums};