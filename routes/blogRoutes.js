const express = require('express');
const router = express.Router();

let posts = [];

router.get('/', (req, res) => {
    res.render('index', { posts });
});

//to add new post
router.get('/new', (req, res) => {
    res.render('new',{posts});
});

router.post('/posts', (req, res) => {
    const { title, content } = req.body;
    posts.push({ id: posts.length + 1, title, content });
    res.redirect('/');
});

//to edit posts
router.get('/posts/:id/edit', (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.render('edit', { post });
});


router.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    post.title = req.body.title;
    post.content = req.body.content;
    res.redirect('/');
});

//to delete posts
router.delete('/posts/:id', (req, res) => {
    posts = posts.filter(p => p.id != req.params.id);
    res.redirect('/');
});

module.exports = router;
