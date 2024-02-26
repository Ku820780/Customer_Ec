const express = require('express')
const router = express.Router()
const Razorpay = require('razorpay')
const crypto = require('crypto')


router.post('/orders', async(req, res)=>{
    try{
        const instance = new Razorpay({
            key_id:process.env.ROZARPAY_API_KEY,
            key_secret:process.env.ROZARPAY_API_SECORET
        });
        const options = {
            amount:req.body.amount*100,
            currency:'INR',
            receipt:crypto.randomBytes(10).toString('hex'),
        }
        instance.orders.create(options,(error, order)=>{
            if(error){
                console.log(error)
                return res.status(500).json({message:"Something Went Wrong!"});
            }
            res.status(200).json({data:order})
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Internal Server Error"});
    }
})

//payment verify

router.post('/verify', async(req, res)=>{
    try{
        const{ razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto.createHmac("sha256", process.env.ROZARPAY_API_SECORET).update(sign.toString()).digest("hex")
        if( razorpay_signature === expectedSign){
            res.status(200).json({message:"Payment verifyed Successfully"})
        }else{
            res.status(400).json({message:"Invalid signature sent!..."})
        }
    }catch(error){
        console.log(error)
        return res.status(500).json({message:"Internal Server Error"});
    }
})

module.exports = router