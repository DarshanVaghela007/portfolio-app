import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(__dirname + '/dist/bootstrap-template-creation'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+ '/dist/bootstrap-tempate-creation/index.html'));
})

app.listen(process.env.PORT || 8000);
