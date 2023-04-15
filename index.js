var express=require('express')
var router =express.Router();
var database=require('../database')
router.get('/',function(req,res,next){
    res.render('index',{title : 'Express'});
});
module.exports=router;