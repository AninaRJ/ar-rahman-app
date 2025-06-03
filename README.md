# A R Rahman App

This is a simple Node.js application that showcases the life and work of the renowned composer A R Rahman. The application features three main pages: Home, Discography, and About.

## Project Structure

```
ar-rahman-app
├── src
│   ├── app.js             # Entry point of the application
│   ├── routes             # Contains route definitions
│   │   ├── home.js        # Route for the home page
│   │   ├── discography.js  # Route for the discography page
│   │   └── about.js       # Route for the about page
│   ├── views              # Contains EJS templates for rendering
│   │   ├── home.ejs       # Home page template
│   │   ├── discography.ejs # Discography page template
│   │   └── about.ejs      # About page template
│   └── public             # Contains static files
│       └── styles.css     # CSS styles for the application
├── package.json           # NPM configuration file
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
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run the following command:
```
npm start
```

The application will be available at `http://localhost:3000`.

## Features

- Home page with an introduction to A R Rahman.
- Discography page showcasing A R Rahman's musical works.
- About page providing detailed information about A R Rahman's life and achievements.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.