import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './src/movies';
import createMoviesRouter from './src/movies/routes';
import createAccountsRouter from './src/accounts/routes';
import dependencies from './src/config/dependencies';
import errorHandler from './src/utils/ErrorHandler';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use('/api/movies', createMoviesRouter(dependencies()));
app.use(errorHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});