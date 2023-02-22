const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use('/static', express.static("public"))

app.get('/test', (req, res) => {
    res.send('Test successfully worked')
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})