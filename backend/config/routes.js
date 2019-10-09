module.exports = app =>{
	app.route('/post')
		.post(app.api.post.save)
		.get(app.api.post.getPosts)
	app.route('/post/:id')
		.put(app.api.post.save)
		.get(app.api.post.getPost)
		.delete(app.api.post.remove)
}