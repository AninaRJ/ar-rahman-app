import express from 'express';
import * as contentful from 'contentful';

const router = express.Router();

const client = contentful.createClient({
  space: 'h4hrqjr8n9ag',
  accessToken: 'NOy4RuBq4VeIOY3bl373dxxFm5aSDY5-76d5WDMSNAg'
  //accessToken: 'fZL_p_wr4TjAvFFatluhpRxaFBIhjrkT3Ik3UqJv3Bc',
});
let albums = [];

async function retrieveAlbums(){
  await client.getEntry('4ASZuIiquygVOnVuOsM7VB').then(function (entry) {
    albums = entry.fields.albums ? entry.fields.albums : [];
    console.log(albums)
  });
}

router.get('/', (req, res) => {
  retrieveAlbums().then(() => {
    res.render('discography', {albums});
  }).catch((error) => {
    console.error("Error retrieving albums:", error);
    res.status(500).send("Internal Server Error");
  });
});

export { albums };