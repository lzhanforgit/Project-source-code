var jwt=require('jwt-simple');
var util=require('../util/util');
exports.checkToken=function (req,res,next) {
    var token=req.header('token') || req.query.token || req.body.token;
    try {
        var decoded = jwt.decode(token, util.secret);

        if(decoded.exp>= new Date().valueOf()){
            next();
        }else {
            //鉴权失败
            res.json({stageCode:"9"});
        }
    }catch (e){
        console.log('HERE');
        res.json({stageCode:"9"});
    }

}