# A R Rahman App

This is a Node.js/Express application that showcases the life and work of the renowned composer A R Rahman. The application features Home, Discography, and About pages, and integrates with Contentful for dynamic content.

## Project Structure

```
ar-rahman-app
├── src
│   ├── app.js             # Entry point of the application
│   ├── routes             # Route definitions (home, discography, about, albumDetail)
│   ├── views              # EJS templates for rendering
│   └── public             # Static files (CSS, images)
├── package.json           # NPM configuration file
├── Dockerfile             # Docker build instructions
├── docker-compose.yml     # Docker Compose configuration
├── .env                   # Environment variables (not committed)
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd ar-rahman-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the application locally:
```
npm start
```
The app will be available at `http://localhost:3000`.

## Docker

To run the app in Docker:
```
docker-compose up --build
```
Environment variables should be set in a `.env` file.

## Deployment

- For cloud deployment, you can use platforms like Vercel, Render, or Heroku.
- For production, use Nginx as a reverse proxy and set up SSL as needed.

## Features

- Home page with an introduction to A R Rahman.
- Discography page showcasing musical works (dynamic from Contentful).
- Album detail pages.