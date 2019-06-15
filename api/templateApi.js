const templateRoutes=require('express').Router();
const templateObj = require('../models/templatemodel');
const templateOperations = require("../db/helpers/templateOperations");
templateRoutes.post('/savetemplate',(req,res)=> {
    let templateObject = req.body.template;
    for(let key in templateObject){
        templateObj[key]=templateObject[key];
    } 
    templateOperations.addTemplateData(templateObj,res);
});
templateRoutes.get('/gettemplatedata',(req,res)=> {
    templateOperations.findTemplateData(res);
})
module.exports=templateRoutes;