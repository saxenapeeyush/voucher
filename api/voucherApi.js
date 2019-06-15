const voucherRoutes=require('express').Router();
const voucherObject=require('../models/vouchermodel').AllVoucher;
const voucherConstructor=require('../models/vouchermodel').voucher;
const voucherOperations = require('../db/helpers/voucherOperations');
voucherRoutes.post('/addvoucher',(req,res)=> {
    var allVouchers=[];
    var count=0;
    var voucherDetails = req.body.voucherDetails;
    for(let vouchers of voucherDetails) {
            let mainTempId=parseInt(vouchers.templateId);
            let template=voucherOperations.findTemplateData(mainTempId);
                template.then((data)=> {
                    ++count;
                    let newVoucherObject=new voucherConstructor(vouchers.voucherStatement,vouchers.expiryDate,vouchers.voucherDiscount,data.templateId,data.templateData)
                    if(voucherDetails.length == count) {
                        allVouchers.push(newVoucherObject);
                        let newObject = new voucherObject(allVouchers);
                        voucherOperations.uploadDatavouch(newObject,res);
                    }
                    else {
                    allVouchers.push(newVoucherObject);
                    }
                }).catch((err)=> {
                    res.status(500).json({"message":"Error while finding the document in template","Status":config.ERROR,"Error":err});
                }); 
    }
});
voucherRoutes.get('/getvoucherdata',(req,res)=> {
    voucherOperations.getVoucherData(res);
});
module.exports=voucherRoutes;