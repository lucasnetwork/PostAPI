module.exports = app =>{
	const {existsOrError} = app.api.validation
	const save = async (req,res) => {
		const post = {...req.body}
		if(req.params.id) post.id = req.params.id
		try{
			existsOrError(post.title,'Titulo não informado')
			existsOrError(post.name,'Nome não informado')
			existsOrError(post.description,'Nome não informado')
			existsOrError(post.content,'Nome não informado')
		}catch(msg){
			return res.status(400).send(msg)
		}
		if(!post.id){
			app.db('posts')
				.insert(post)
				.then(() => res.status(204).send())
				.catch(err => res.status(500).send(err))
		}else{
			app.db('posts')
				.update(post)
				.where({id: post.id})
				.then(() => res.status(204).send())
				.catch(err => res.status(500).send(err))
		}
	}
	const limit = 2
	const getPosts  = (req,res) =>{
		app.db('posts')
			.select('id','name','title','description','content','imageUrl')
			.then(posts => {
				const post = posts.map(post=>{
					post.content = post.content.toString()
					return {...post}
				})
				return res.json({data:post,limit})
			})
			.catch(err => res.status(500).send(err))
	}
	const getPost = (req,res) =>{
		app.db('posts')
			.select('id','name')
			.where({id: req.params.id})
			.then(post => res.json(post))
			.catch(err => res.status(500).send(err))
	}
	const remove =  async (req,res) =>{
		try{
			const rowDeleted = await app.db('posts').where({id:req.params.id}).del()
			existsOrError(rowDeleted,'Post não cadastrado')
			res.status(204).send()
		}catch(msg){
			res.status(500).send(msg)
		}
	}
	return {save,getPosts,getPost,remove}
}