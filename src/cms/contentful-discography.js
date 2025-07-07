import express from 'express';
import 'dotenv/config'; // Load environment variables from .env file
import * as contentful from 'contentful';
import readRichText from './contentful-utilities.js'; // Import the utility function to read rich text

const router = express.Router();

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
  environment: process.env.CONTENTFUL_ENVIRONMENT_ID || 'master',
  // Uncomment the following line if you want to use the preview API
  //accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
});
let albums = [];
let all_tags = [];
let arr_albms = [];
let audioLinks = [];

function retrieveAlbums(){
  // Retrieve the albums and tags from Contentful
  client.getTags().then(function (tags) {
    all_tags = tags.items.map(tag => tag.name);
  }).catch(function (error) {
    console.error("Error retrieving tags:", error);
  });

  client.getEntries({
    content_type: 'album',
  }).then(function (response) {
    arr_albms = response.items.map(item => ({
      albumTitle: item.fields.albumTitle,
      albumId: item.fields.albumId,
      albumDescription: readRichText(item.fields.albumDescription), // richtext field
      albumLinks: item.fields.albumLinks.fields, 
      lyricists: item.fields.lyricists ? item.fields.lyricists.map(lyricist => lyricist.fields.lyricistName) : [], 
      songs: item.fields.songs.map(song => {
        return {
          songTitle: song.fields.songTitle,
          songId: song.fields.songId,
          length: song.fields.length,
          lyricists: song.fields.lyricists ? song.fields.lyricists.map(lyricist => lyricist.fields.lyricistName) : [],
          //singers: song.fields.singers ? song.fields.singers.map(singer => singer.fields.singerName) : [],
          audioLink: song.fields.audioLinks? song.fields.audioLinks.sys.id: ''
        };  
      }), 
      language: item.fields.language,
      yearReleased: item.fields.yearReleased,
      albumLabel: item.fields.albumLabel.fields,
      leadActors: readRichText(item.fields.leadActors), // richtext field
      awards: readRichText(item.fields.awards),
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



function retrieveAudioLinks() {
 client.getEntries({
    content_type: 'referenceLinks',
  }).then(function (response) {
    if (response.items.length > 0) {
      audioLinks = [];
      response.items.forEach(item => {
        audioLinks.push({
          refId: item.sys.id,
          refLink: item.fields,
        });
      });
      console.log("Retrieved audio links:", audioLinks);
    } else {
      console.warn("No audio links found");
      return null;
    }
  }).catch(function (error) {
    console.error("Error retrieving audio link:", error);
    return null;
  });
}

retrieveAlbums();
retrieveAudioLinks();

export { albums, arr_albms, all_tags, audioLinks };
export { retrieveAlbums, retrieveAudioLinks };