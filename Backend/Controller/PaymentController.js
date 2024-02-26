const instance = require("../server.js")
const Razorpay = require('razorpay')

const checkout = async (req, res) => {
    try {
     
    const instance = new Razorpay({
        key_id: process.env.ROZARPAY_API_KEY,
        key_secret: process.env.ROZARPAY_API_SECORET,
    });
      
      const options = {
        amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
        currency: "INR",
      };
  
      const order = await instance.orders.create(options);
      console.log(order);
  
      res.status(200).json({
        success: true,
        order: order, // You may want to include the order information in the response
      });
    } catch (error) {
      console.error("Error during checkout:", error);
      res.status(500).json({
        success: false,
        error: "Internal server error",
      });
    }
  };

  const paymentverification = async (req, res) => {
    console.log(req.body)



      res.status(200).json({
    
    success:true
   })
  };
  
module.exports = { checkout, paymentverification };
  