import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeSingleIteams, removeToCart } from "./redux/features/cartSlice";
import Navbar from './Navbar'



function AddCart() {
  const [countitem, setCountItem] = useState(0);
  const [totalamount, setTotalAmount] = useState(0);
  const [discountTotalPrice, setDiscountTotalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  const { carts } = useSelector((state) => state.allCart);
  console.log(carts);

  const dispatch = useDispatch();

  //add to cart
  const handleIncrement = (e) => {
    dispatch(addToCart(e));
  };

  //remove to cart delete cart
  const handleDeleteCart = (e) => {
    dispatch(removeToCart(e));
    toast.success("Remove Cart SuccessFully...")
    // toast.success("Item Remove From Your Cart")
  };

  //Remove Single Element
  const handleSingleCart = (e) => {
    dispatch(removeSingleIteams(e));
  };

  //count total quantity

  const countquantity = () => {
    let totalquantity = 0;
    carts.map((ele, ind) => {
      totalquantity = ele.quantity + totalquantity;
    });
    setCountItem(totalquantity);
  };

  // Count Total Amount
  const total = () => {
    let totalprice = 0;
    carts.map((ele, ind) => {
      totalprice = ele.price * ele.quantity + totalprice;
    });
    setTotalAmount(totalprice);
  };

  //Calculate Discount

  const calculateDiscountedPrice = () => {
    let totaldiscount = 0
    let totadisc = 0
    let totadisc1 =0
    carts.map((ele, ind) => {
      totaldiscount = (ele.quantity * ele.price) - (ele.quantity * ele.price * ele.discount / 100)
      totadisc =  ele.price * ele.quantity + totadisc;
      totadisc1 = totadisc - totaldiscount
    })
    setDiscountedPrice(totadisc1)
  }

  // calculte total Price
  const discountPrice = () =>{
    let totaldiscountprice = 0

    carts.map((ele, index) => {
      totaldiscountprice = (ele.price * ele.quantity) * (1 - ele.discount / 100) + totaldiscountprice
    })
    setDiscountTotalPrice(totaldiscountprice)
  }

  useEffect(()=>{
    total();
    discountPrice()
    calculateDiscountedPrice()
    countquantity();
  }, [total, discountPrice, calculateDiscountedPrice, countquantity])
  

  return (
    <>
      <Navbar />
    <div style={{ display: "flex" }}>
     
      <div
        style={{
          width: "800px",
          height: "",
          marginLeft: "100px",
          marginTop: "70px",
        }}
        className="shadow-lg p-3 mb-5 bg-white rounded"
      >
         
        {carts.map((item, index) => {
          return (
            <>
              <Card key={index}>
                <div style={{ display: "flex" }}>
                  <div>
                    <img
                      src={item.photo}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />

                    <div
                      className="prdct-qty-container"
                      style={{ marginTop: "10px" }}
                    >
                      <button
                        className="prdct-qty-btn"
                        type="button"
                        onClick={
                          item.quantity <= 1
                            ? () => handleDeleteCart(item.pid)
                            : () => handleSingleCart(item)
                        }
                        // onClick={()=>handleSingleCart(item)}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        className="qty-input-box"
                        value={item.quantity}
                        disabled
                        name=""
                        id=""
                      />
                      <button
                        className="prdct-qty-btn"
                        type="button"
                        onClick={() => handleIncrement(item)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    className="ml-5"
                    style={{ marginLeft: "30px", marginTop: "10px" }}
                  >
                    <h6>Product Name:- {item.pname }</h6>
                    <p>Brand Name: {item.brandname }</p>
                    <h6>₹ {item.price * item.quantity}</h6>
                    <h6 >Discount <span style={{color:"#388e3c"}}>{item.discount}%</span></h6>
                    <div style={{ display: "flex", marginTop: "20px" }}>
                      <div>
                        <h6>SAVE FOR LATER</h6>
                      </div>
                      <div style={{ marginLeft: "20px" }}>
                        <button
                          style={{ border: "none", backgroundColor: "white" }}
                          onClick={() => handleDeleteCart(item.pid)}
                        >
                          <h6>REMOVE</h6>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </>
          );
        })}
        <Button variant="primary" style={{ marginLeft: "620px" }}>
          PLACE ORDER
        </Button>
      </div>
      <div
        style={{ marginTop: "70px", marginLeft: "40px", height: "300px" }}
        className="shadow-lg p-3 mb-5 bg-white rounded"
      >
        <Card style={{ width: "18rem" }}>
          <Card.Header>PRICE DETAILS</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              Price({countitem} items){" "}
              <span style={{ marginLeft: "70px" }}>₹ {totalamount}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Discount <span style={{ marginLeft: "100px" ,color:"#388e3c"}}>₹{discountedPrice}</span>
            </ListGroup.Item>
            <ListGroup.Item>
              Delivery Charges<span style={{ marginLeft: "80px", color:"#388e3c" }}>Free</span>
            </ListGroup.Item>
            <h5 style={{ marginTop: "20px" , marginLeft:"10px"}}>
              Total Amount
              <span style={{ marginLeft: "50px" }}>₹ {discountTotalPrice}</span>
            </h5>
          </ListGroup>
        </Card>
      </div>
    </div>
    </>
  );
}

export default AddCart;
