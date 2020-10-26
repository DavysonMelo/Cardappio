import express from 'express';

const app = express();

app.listen(3333);
app.get('/', (req, res) => {
  return res.json({message: 'teste'});
});