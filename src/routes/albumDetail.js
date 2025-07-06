import express from 'express';
import { arr_albms, audioLinks } from './contentful-discography.js'; // Import the albums array

const router = express.Router();

// Helper to find album by id
function findAlbumById(id) {
  id = decodeURIComponent(id).toLowerCase();
  for (const album of arr_albms) {
    if (album.albumId.toLowerCase() === id) {
      // If the album is found, fetch the audio links for each song
      album.songs = fetchAlbumSongDetails(album);
      return album;
    }
  }
  // If no album found, return null
  console.warn(`Album with id ${id} not found`);
  return null;  
}

function fetchAlbumSongDetails(album){
  // This function is not used in the current implementation, but can be used to fetch song details if needed
  const songsWithAudioLinks = album.songs.map(song => {
    if(typeof(song.audioLink) === 'string' && song.audioLink !== ''){
      const audioLink = audioLinks.find(link => link.refId === song.audioLink);
      if(audioLink !== null){
        return {
          ...song,
          audioLink: audioLink ? audioLink.refLink : null // Add the audio link to the song
        };
      }
    }
    else{
      return song;
    }
  });
  return songsWithAudioLinks;
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