const voucherModel=require('../models/voucherSchema');
const templateSchema=require('../models/templateSchema');
const config = require('../../utils/config');
const voucherOperations = {
    findTemplateData(templateId) {
        return new Promise((resolve,reject)=> { 
        templateSchema.findOne({templateId:templateId},(err,data)=> {
            if(err) {
                reject(null);
            }
            else {
                resolve(data);
            }
        });
        });
    },
    uploadDatavouch(allVouchers,res) {
        voucherModel.findOne({},(err,docs)=> {
            if(err){
                res.status(500).json({"message":"Error while finding the document in Voucher CRUD","Status":config.ERROR});
            }
            else if(!docs) {
                voucherModel.create(allVouchers,(err)=> {
                    if(err) {
                        res.status(500).json({"message":"Unable to add to the database ","Status":config.ERROR});
                            }
                    else{
                        res.status(200).json({"message":"Added to database Successfully","Status":config.SUCCESS,"data":allVouchers});
                        allVouchers.length=0;
                            }
            });
            }
            else {
                voucherModel.findOneAndUpdate({"currentStatus":true},{"currentStatus":false},(err,docs)=> {
                    if(err) {
                        res.status(500).json({"message":"Can't find and update in the voucher CRUD","Status":config.ERROR});
                    }
                    else {
                        voucherModel.create(allVouchers,(err)=> {
                            if(err) {
                                res.status(500).json({"message":"Unable to add to the database ","Status":config.ERROR});
                                    }
                            else{
                                res.status(200).json({"message":"Added to database Successfully","Status":config.SUCCESS,"data":allVouchers});
                                allVouchers.length=0;
                                    }
                    });
                    }
                })
            }
        })
    },
    getVoucherData(res) {
        voucherModel.find({currentStatus:true},(err,data)=> {
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