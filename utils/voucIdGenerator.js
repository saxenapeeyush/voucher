const shortId=require('shortid');
const voucIdGenerator = {
    generateId(){
        return shortId.generate();
    },
    generateCode() {
        let smallCode=shortId.generate();
        return "JMN" + smallCode;
    }
}
module.exports=voucIdGenerator;