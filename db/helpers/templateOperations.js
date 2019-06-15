const templateSchema=require('../models/templateSchema');
const config = require('../../utils/config');
const templateOperations = {
    addTemplateData(templateObject,res) {
        templateSchema.create(templateObject,(err)=> {
            if(err) {
                res.status(500).json({"status":config.ERROR,"message":"Error while adding to database"});
            }
            else {
                res.status(200).json({"status":config.SUCCESS,"message":"Succesfully added to database"});
            }
        });
    },
    findTemplateData(res) {
        templateSchema.find({},(err,data)=> {
            if(err) {
                res.status(500).json({"status":config.ERROR,"message":"Error while findind template in database."});
            }
            else{
                res.status(200).json({"status":config.SUCCESS,"message":"Successfully find templates",data:data});
            }
        })
    }
}
module.exports=templateOperations;