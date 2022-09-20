function validateUser(req,res,next){
    const { email,password } = req.body;
    if(!email || email == ' '|| email == undefined){
        return res.status(400).send({ok:false,message:"Email is required"})
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        return res.status(400).send({ok:false,message:"Email format error"})
    }

    if(!password || password == ' '|| password == undefined){
        return res.status(400).send({ok:false,message:"Password is required"})
    }

    return next();
}

function validateCar(req,res,next){
    const { model, brand} = req.body;
    console.log(model);
    if(!model || model == ' '|| model == undefined){
        return res.status(400).send({ok:false,message:"Model is required"})
    }
    if(!brand || brand == ' '|| brand == undefined){
        return res.status(400).send({ok:false,message:"Brand is required"})
    }

    return next();
}

const validations = {
    validateCar,
    validateUser
}
module.exports = validations;