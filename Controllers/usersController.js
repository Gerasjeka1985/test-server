class userController{
    async registration(req, res){
        res.json("user registrated");
    }
    async login(req, res){
        res.json("user log in ...");
    }
    async auth(req, res){
        //реструктаризация  строки запроса по параметрам
        //http://localhost:9100/api/users/auth?id=5&name=jeka
        const {id} = req.query
        res.json(id)
    }
}

module.exports = new userController();