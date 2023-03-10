import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import env from '@/config/env';
import postsRoutes from '@/routes/posts-routes';
import { pageNotFound } from '@/middleware/pageNotFound';
import { errorHandler } from '@/middleware/error-handler';

const app: Application = express();

app.set('port', process.env.PORT || env.appPort || 8080);

app.use(express.json());
app.use(
  cors({
    origin: env.clientAppUrl,
  })
);
app.use(morgan('dev'));

app.use('/api/v1/posts', postsRoutes);

app.use('*', pageNotFound);
app.use(errorHandler);

export default { app };
