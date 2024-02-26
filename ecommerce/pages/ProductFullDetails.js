import React from 'react'
// import { Box, Stack } from '@chakra-ui/react'
import Navbar from './Navbar'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './redux/features/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ErrorOutlineOutlined } from '@mui/icons-material';


function ProductFullDetails(props) {
  const { carts } = useSelector((state) => state.allCart);
  console.log(carts);

  const dispatch = useDispatch();
    //add to cart
    const send = (e) => {
      dispatch(addToCart(e));
      toast.success("Item Added in Cart")
    };

    const [product, setProduct] = useState([])


    console.log(props.pid)
    useEffect(()=>{
        if(props.pid !== null){
            axios.get(`http://localhost:5500/api/details/${props.pid}`)
            .then((res)=>{
                console.log(res)
                setProduct(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    },[])

    console.log(props.pid)

    //PaymetGetWay
    const [amount, setAmount] = useState()
    const [orderId, setOrderId] = useState()

    const handlePayment = async(price) =>{
      console.log(price)
      const productdata = {
        amount: price,
        currency:'INR',
        receipt:'9c1a0cc2a5108c168b96',
        partial_payment: true

      }
      try{
        const orderUrl = "http://localhost:5500/api/payment/orders";
        const {data} = await axios.post(orderUrl, {amount:price})
        console.log(data)
      }catch(error){
        console.log(error)
      }


     

      // axios.post(`http://localhost:5500/api/payment/orders`, productdata)
      // .then((res) => {
      //   console.log(res);
      //   setOrderId(res.data.id);
      //   setAmount(res.data.amount + '00');
      // }).catch((err) => {
      //   console.log(err);
      // });
        //  axios.post(`http://localhost:5500/api/payment/orders`, productdata)
        // // const {data} = await axios.post(orderUrl,{})
        // .then((res)=>{
        //   console.log(res)
        //   setOrderId(res.data.id)
        //   setAmount(res.data.amount + '00')
        // }).catch((err)=>{
        //   console.log(err)
        // })  
    }
   
  return (
    <div style={{marginTop:"3px", marginLeft:"100px"}} >
      <Navbar />
      <div style={{marginLeft:"400px", width:"320px"}} className='shadow p-3 mb-5 bg-white rounded'>
        {
          product.map((item)=>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.photo} />
          <Card.Body>
            <Card.Title>{item.pname}</Card.Title>
           <div style={{display:"flex"}}>
            <div>
            <Button variant="" style={{backgroundColor:"#ff9f00"}} onClick={()=>send(item)}>ADD TO CART</Button>
            </div>
            <div style={{marginLeft:"10px"}}>
            <Button variant="" style={{backgroundColor:"#fb641b"}} onClick={()=>handlePayment(item.price)}>BUY NOW</Button>
            </div>
           </div>
            {/* <Button variant="primary" onClick={()=>send(item)}>Add To Cart</Button> */}
          </Card.Body>
        </Card>
          )
        }
      </div>          
    </div>
  )
}

export default ProductFullDetails