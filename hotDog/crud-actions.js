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
        console.log(error)
    }
};
exports.get = async (req, res) =>{
    try{
        const model = await schema
        .find({});
    if (!model.length){

    }
        res
            .status(200)
            .contentType("text/plain")
            .send(model)

    }catch(error){
        console.log(error)
    }
};
exports.put = async (req, res) =>{
    try{
        await schema.findByIdAndUpdate({_id:req.body.data.id}, {
            title: req.body.data.title
        }, (err) =>{
            if(err) {
                return  res
                    .status(400)
                    .contentType("text/plain")
                    .end('something wrong')
            }
            return res
                    .status(200)
                    .contentType("text/plain")
                    .end('delete success')
        });
    }catch(error){
        // console.log(error)
    }
};
exports.delete = async (req, res) =>{
    try{
        await schema.findByIdAndDelete({_id: req.body.id}, (err) =>{
            if(err){
            return  res
                        .status(400)
                        .contentType("text/plain")
                        .end('something wrong')
                }
        })
        res
            .status(200)
            .contentType("text/plain")
            .end('delete success')
    }catch(error){
        console.log(error)
    }
};