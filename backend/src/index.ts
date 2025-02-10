import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 3000;

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});