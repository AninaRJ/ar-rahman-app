import express from 'express';
import { arr_albms } from './contentful-discography.js'; // Import the albums array

const router = express.Router();

// Helper to find album by id
function findAlbumById(id) {
  id = decodeURIComponent(id).toLowerCase();
  for (const album of arr_albms) {
    if (album.albumId.toLowerCase() === id) {
      return album;
    }
  }
  // If no album found, return null
  console.warn(`Album with id ${id} not found`);
  return null;  
}

router.get('/', (req, res) => {
  const albumId = req.query.id;
  if (!albumId) {
    return res.status(400).render('404', { message: 'No album id provided' });
  }
  const album = findAlbumById(albumId);
  if (!album) {
    return res.status(404).render('404', { message: 'Album not found' });
  }
  res.render('albumDetail', { album, active: 'albumDetail' }); // <-- add active
});

export default router;