import express from 'express';
import routes from './routes/index.js';
// import unleash from './services/unleash.js';

const app = express();
app.use(express.json());
routes(app);

/* Testando Unleash */
// setInterval(() => {
//   if (unleash.isEnabled('eventos')) {
//     console.log('eventos habilitado');
//   } else {
//     console.log('eventos dasabilitado');
//   }
// }, 1000);

export default app;
