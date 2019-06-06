const voucherModel=require('../models/voucherSchema');
const templateSchema=require('../models/templateSchema');
const config = require('../../utils/config');
const voucherOperations = {
    findTemplateData(templateId) {
        templateSchema.findOne({"templateId":templateId},(err,data)=> {
            if(err) {
                return null;
            }
            else {
                return data;
            }
        });
    },
    uploadDatavouch(vouchArray,res) {
        voucherModel.create(vouchArray,(err)=> {
            if(err) {
                res.status(500).json({"status":config.ERROR,"message":"Error in adding voucher to database"});
            }
            else{
                res.status(200).json({"status":config.SUCCESS,"message":"Successfully added vouchers"});
            }
        });
    },
    getVoucherData(res) {
        voucherModel.find({},(err,data)=> {
            if(err) {
                res.status(500).json({"status":config.ERROR,"message":"Error while finding the data in the vouchers "});
            }
            else{
                res.status(200).json({"status":config.SUCCESS,"message":"Successfully find all the vouchers","data":data});
            }
        });
    }
}
module.exports=voucherOperations;