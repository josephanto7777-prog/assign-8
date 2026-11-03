# Joseph Anto — Dynamic Portfolio Website

A responsive, multi-page personal portfolio built by following the structure of the supplied reference project: **Node.js, Express, EJS and MongoDB (Mongoose)**.

## Project structure

```text
joseph-anto-dynamic-portfolio/
├── models/
│   └── Portfolio.js
├── routes/
│   └── portfolioRoutes.js
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── home.ejs
│   ├── about.ejs
│   ├── contact.ejs
│   └── error.ejs
├── public/
│   ├── style.css
│   └── script.js
├── .env.example
├── .gitignore
├── package.json
├── seed.js
└── server.js
```

## Requirements

- Node.js and npm
- MongoDB Community Server running locally, or a MongoDB Atlas database

## Setup and run

1. Open this project folder in VS Code.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy `.env.example` to a new file named `.env`.
4. Set `MONGO_URI` in `.env` to your MongoDB connection string. The default local value is:

   ```text
   mongodb://127.0.0.1:27017/josephAntoPortfolio
   ```

5. Insert Joseph's portfolio data:

   ```bash
   npm run seed
   ```

6. Start the website:

   ```bash
   npm run dev
   ```

7. Open `http://localhost:3000`.

For a normal start without nodemon, use `npm start`.

## Pages

- `/` — Home page and featured projects
- `/about` — About, education, experience, skills and certifications
- `/contact` — Email, phone and LinkedIn contact details

## Database

- Database: `josephAntoPortfolio`
- Collection: `portfolios`
- Model: `models/Portfolio.js`

The `seed.js` script inserts or updates Joseph's portfolio document. If you edit the portfolio details in `seed.js`, run `npm run seed` again to update the database.

## Important notes

- The portfolio content is based on the resume PDF supplied for this task. Where the resume did not provide a date, institution detail or public profile URL, the project does not invent one.
- The LinkedIn URL is included from the supplied resume. Review it before publishing.
- Do not upload your `.env` file or database credentials to GitHub.
- GitHub stores this source code, but GitHub Pages cannot run the Express server or MongoDB database. To publish the live dynamic website, deploy the Node.js application to a Node-compatible hosting service and use a hosted MongoDB database.
