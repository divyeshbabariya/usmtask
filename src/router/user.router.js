const router = require("express").Router();
const {UserAdd,
    userViewById,
    userDeleteById} = require('../controller/user.controller');



router.post("/add",UserAdd);
router.get("/view-by-id/:id",userViewById);
router.delete("/delete/:id",userDeleteById)


module.exports=router