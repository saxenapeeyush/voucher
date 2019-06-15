const vouchIdGenerator=require('../utils/voucIdGenerator');
class voucher {
    constructor(voucherStatement,expiryDate,voucherDiscount,templateId,templateData) {
        this.voucherId=vouchIdGenerator.generateId();
        this.voucherCode=vouchIdGenerator.generateCode();
        this.voucherDiscount=voucherDiscount;
        this.voucherStatement=voucherStatement;
        this.expiryDate=expiryDate;
        this.templateId=templateId;
        this.templateData=templateData;
    }
}
const voucherModel ={
    voucherStatement:null,
    expiryDate:null,
    voucherDiscount:null,
    templateId:null,
}
class AllVoucher {
    constructor(allVouchers) {
        this.allVouchers=allVouchers;
    }
}
module.exports={
    voucher:voucher,
    voucherModel:voucherModel,
    AllVoucher:AllVoucher
};