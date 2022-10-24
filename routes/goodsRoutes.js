const Router = require("express");
const router = new Router();
const goodController = require("../Controllers/goodsController");

router.get('/', goodController.getAll)
router.post('/', goodController.create)
router.get('/:id', goodController.getOne)

module.exports = router;