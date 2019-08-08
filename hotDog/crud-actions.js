const handle = require('../middleware/handle');
const schema = require('./model');

exports.add = async (req, res) =>{
    try{
        const hotDog = new schema({
            title: req.body.title
        });
        hotDog.save( err=>{
            if(err){
                return handle.errorSend( err, res, 400, 'Something bad with saving')
            }
            handle.messageSend(res, 200, 'model was saved successful')
        });
    }catch(error){
        handle.messageSend( error, res, 400, 'Something wrong')
    }
};
exports.get = async (req, res) =>{
    try{
        const model = await schema
        .find();
    if (!model.length){
        return handle.messageSend(error, res, 404, 'not found')
    }
    handle.objectSend(res, 200, model)
    }catch(error){
        handle.messageSend( error, res, 400, 'Something wrong')
    }
};
exports.put = async (req, res) =>{
    try{
        await schema.findByIdAndUpdate({_id: req.body.id}, {
            title: req.body.title
        }, (err) =>{
            if(err) {
                return handle.errorSend( error, res, 404, 'not found')
            }
            handle.messageSend(res, 200, 'update was successful')
        });
    }catch(error){
        handle.messageSend( error, res, 400, 'Something wrong')
    }
};
exports.delete = async (req, res) =>{
    try{
        await schema.findByIdAndDelete({_id: req.body.id}, (err) =>{
            if(err){
                return handle.errorSend(error, res, 500, 'Something wrong')
            }
            handle.messageSend(res, 200, 'delete was successful')
        })
    }catch(error){
        handle.messageSend( error, res, 400, 'Something wrong')
    }
};