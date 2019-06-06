const mongoose = require('../connection');
const VoucherSchema = mongoose.Schema;
const voucher = new VoucherSchema({
    allVouchers = [{
    voucherId:{type:String},
    voucherCode:{type:String},
    voucherDiscount:{type:String},
    voucherStatement:{type:String},
    expiryDate:{type:Date},
    templateId:{type:String},
    termsAndCondition:{type:String}
    }]
});
const Voucher = mongoose.model('vouchers',voucher);
module.exports=Voucher;