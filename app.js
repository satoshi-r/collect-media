const config = require('./config');
const parsePosts = require('./parser/parsePosts');
const express = require('express');
const path = require('path');

const app = express();

app.get('/api/posts', (req, res) => {
    const posts = [];
    (async () => {
        for (const key in config) {
            const data = await parsePosts(config[key].url, config[key]);
            posts.push(...data);
        }
        res.status(200).json(posts);
    })();
});

app.use(express.static(path.resolve(__dirname, 'client')));

// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
// });

app.listen(3000, () => console.log('Server has been started'));