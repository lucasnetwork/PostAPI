module.exports = app =>{
    app.route('/post')
        .post(app.api.post.save)
        .get(app.api.post.getPosts)
    app.route('/post/:id')
        .get(app.api.post.getPost)
}