const mongoose = require('../connection');
const VoucherSchema = mongoose.Schema;
const voucherSch=mongoose.Schema;
const vouch=new voucherSch({
        voucherId:{type:String},
        voucherCode:{type:String},
        voucherDiscount:{type:String},
        voucherStatement:{type:String},
        expiryDate:{type:Date},
        templateId:{type:String},
        templateData:{type:String}
})
const voucher = new VoucherSchema({
    date:{type:String,default:new Date()},
    currentStatus:{type:Boolean,default:true},
    allVouchers :[vouch]
});
const Voucher = mongoose.model('vouchers',voucher);
module.exports=Voucher;