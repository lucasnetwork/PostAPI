module.exports = app =>{
    const {existsOrError} = app.api.validation
    const save = async (req,res) => {
        const post = {...req.body}
        if(req.params.id) post.id = req.params.id
        try{
            existsOrError(post.name,'Nome não informado')
        }catch(msg){
            return res.status(400).send(msg)
        }
        if(!post.id){
            app.db('posts')
            .insert(post)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
        }else{
            app.db('posts')
            .update(post)
            .where({id: post.id})
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
        }
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
    const remove =  async (req,res) =>{
        try{
            const rowDeleted = await app.db('posts').where({id:req.params.id}).del()
            console.log(rowDeleted)
            existsOrError(rowDeleted,'Post não cadastrado')
            res.status(204).send()
        }catch(msg){
            res.status(500).send(msg)
        }
    }
    return {save,getPosts,getPost,remove}
}