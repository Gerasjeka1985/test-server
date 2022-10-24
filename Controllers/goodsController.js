class goodController{
    async getAll(req, res){
        res.json("get goods");
    }
    async create(req, res){
        res.json("good created");
    }
    async getOne(req, res){
        res.json("one good get");
    }
}

module.exports = new goodController();