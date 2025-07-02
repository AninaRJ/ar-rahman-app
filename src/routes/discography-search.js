import axios from 'axios';
import cheerio from 'cheerio';
import express from 'express';

const router = express.Router();
/**
 * Fetches AR Rahman albums from Google Search and returns an array of albumDetail objects.
 * @returns {Promise<Array<{ title: string }>>}
 */

async function fetchARRahmanAlbums() {
  const url = 'https://www.google.com/search?q=ar+rahman+albums';
  const headers = {
    'User-Agent': 'Mozilla/5.0 (compatible; CopilotBot/1.0)',
  };

  try {
    const { data } = await axios.get(url, { headers });
    const $ = cheerio.load(data);

    // Try to extract album titles from the Google Knowledge Panel
    $('div[role="list"] div[role="listitem"]').each((i, el) => {
      const title = $(el).find('div[role="heading"]').text().trim();
      if (title) {
        albums.push({ title });
      }
    });

    // Fallback: Try to extract from other selectors if above fails
    if (albums.length === 0) {
      $('div.BNeawe.deIvCb.AP7Wnd').each((i, el) => {
        const title = $(el).text().trim();
        if (title) {
          albums.push({ title });
        }
      });
    }

    return albums;
  } catch (error) {
    console.error('Error fetching albums:', error.message);
    return [];
  }
}

let albums = [];

router.get('/', async (req, res) => {
  albums = await fetchARRahmanAlbums();
  console.log(albums)
  res.render('discography', { albums });
});

export default router;
export { albums}