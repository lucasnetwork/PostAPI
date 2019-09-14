module.exports = app =>{
    const {existsOrError} = app.api.validation
    const save = async (req,res) => {
        const post = {...req.body}
        try{
            existsOrError(post.name,'Nome não informado')
        }catch(msg){
            return res.status(400).send(msg)
        }
        app.db('posts')
            .insert(post)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }
    const getPosts  = (req,res) =>{
        app.db('posts')
            .select('id','name')
            .then(posts => res.json(posts))
            .catch(err => res.status(500).send(err))
    }
    const getPost = (req,res) =>{
        app.db('posts')
            .select('id','name')
            .where({id: req.params.id})
            .then(post => res.json(post))
            .catch(err => res.status(500).send(err))
    }
    return {save,getPosts,getPost}
}