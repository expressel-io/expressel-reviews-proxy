const express = require('express')
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/item/:id', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`)
});
