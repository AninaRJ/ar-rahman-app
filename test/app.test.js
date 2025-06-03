const assert = require('assert');
const request = require('supertest');
const express = require('express');
const app = require('../src/app'); // Adjust path if needed

describe('A R Rahman App', function () {
  it('should load the home page', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .expect(/\//i, done); // Adjust regex to match your home page
  });

  it('should load the discography page', function (done) {
    request(app)
      .get('/discography')
      .expect(200)
      .expect(/discography/i, done); // Adjust regex to match your discography page
  });

  it('should fetch all albums and each has required fields', function () {
    const { albums } = require('../src/routes/discography');
    Object.values(albums).forEach(group => {
      group.forEach(album => {
        assert.ok(album.title, 'Album missing title');
        assert.ok(album.url, 'Album missing Spotify url');
        assert.ok(album.youtube, 'Album missing YouTube url');
        assert.ok(album.appleMusic, 'Album missing Apple Music url');
        assert.ok(album.wikipedia, 'Album missing Wikipedia url');
        assert.ok(Array.isArray(album.awards), 'Album awards should be an array');
      });
    });
  });
});