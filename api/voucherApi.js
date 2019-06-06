const voucherRoutes=require('express').Router();
const voucherObject=require('../models/vouchermodel');
const vouchIdGenerator=require('../utils/voucIdGenerator');
const voucherOperations = require('../db/helpers/voucherOperations');
voucherRoutes.post('/savevoucher',(req,res)=> {
    let voucherDetails=req.body.voucherDetails;
    let allVouchers=[];
    for(let voucherDescription of voucherDetails){
        voucherObject.voucherId=vouchIdGenerator.generateId();
        voucherObject.voucherCode=vouchIdGenerator.generateCode();
        for(let key in voucherDescription) {
            voucherObject[key]=voucherDescription[key];
            if(key=="templateId") {
                let templateData=await voucherOperations.findTemplateData(voucherDescription[key]);
                if(templateData) {
                    voucherObject[key]=templateData.templateId;
                    voucherObject.termsAndCondition=templateData.termsAndCondition;
                }
            }
        }
        allVouchers.push(voucherObject);
    }
    voucherOperations.uploadDatavouch(allVouchers,res);
});
voucherRoutes.get('/getvoucherdata',(req,res)=> {
    voucherOperations.getVoucherData(res);
});
module.exports=voucherRoutes;