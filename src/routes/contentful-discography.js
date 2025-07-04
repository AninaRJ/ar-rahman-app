import express from 'express';
import * as contentful from 'contentful';
import readRichText from '../contentful-utilities.js'; // Import the utility function to read rich text

const router = express.Router();

const client = contentful.createClient({
  space: 'h4hrqjr8n9ag',
  accessToken: 'NOy4RuBq4VeIOY3bl373dxxFm5aSDY5-76d5WDMSNAg'
  //accessToken: 'fZL_p_wr4TjAvFFatluhpRxaFBIhjrkT3Ik3UqJv3Bc',
});
let albums = [];
let all_tags = [];


async function retrieveAlbums(){
  // Retrieve the albums and tags from Contentful
  await client.getTags().then(function (tags) {
    all_tags = tags.items.map(tag => tag.name);
  }).catch(function (error) {
    console.error("Error retrieving tags:", error);
  });

  client.getEntries({
    content_type: 'album'
  }).then(function (response) {
    const arr_albms = response.items.map(item => ({
      albumTitle: item.fields.albumTitle,
      albumId: item.fields.albumId,
      albumDescription: readRichText(item.fields.albumDescription), // richtext field
      albumLinks: item.fields.albumLinks.fields, 
      lyricists: item.fields.lyricists ? item.fields.lyricists.map(lyricist => lyricist.fields.lyricistName) : [], 
      songs: item.fields.songs, 
      language: item.fields.language,
      yearReleased: item.fields.yearReleased,
      albumLabel: item.fields.albumLabel.fields,
      leadActors: readRichText(item.fields.leadActors), // richtext field
      tags: item.metadata.tags.map(tag => tag.sys.id)
    }));

    // group albums by all_tags
    albums = all_tags.map(tag => ({
      tag: tag.toLowerCase(),
      albums: arr_albms.filter(album => album.tags.includes(tag.toLowerCase()))
    }));

    console.log("Retrieved albums:", arr_albms);
  }).catch(function (error) {
    console.error("Error retrieving albums:", error);
  });

}

retrieveAlbums().then(() => {
  console.log("Retrieved the albums successfully.");
}).catch((error) => {
  console.error("Error retrieving albums:", error);
  res.status(500).send("Internal Server Error");
});

export { albums };