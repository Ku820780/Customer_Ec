import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import NextLink from 'next/link'
import Navbar from './Navbar';

function SubcatWiseProduct(props) {
    const [product, setProduct] = useState([])
    // const subCatId = props.Subcategoryid;

    
    console.log(props.Subcategoryid)
    useEffect(()=>{
        if(props.Subcategoryid !== null){
            axios.get(`http://localhost:5500/api/details/get/${props.Subcategoryid}`)
            .then((res)=>{
                console.log(res)
                setProduct(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
    },[props.Subcategoryid])
  return (
    <>
    <Navbar />
    <div style={{marginLeft:'100px',marginTop:'30px', display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
       
        {
             product.map((item)=>
             <NextLink href={"/[Id]"} as={`${item.pid}`} style={{style:'none', textDecoration:'none'}}>
             <Card style={{ width: '300px' }}  className='shadow-lg p-3 mb-5 bg-white rounded'>
             <Card.Img variant="top" src={item.photo} style={{width:"100%", height:"250px"}}/>
             <Card.Body>
            
             <Card.Title>
                {item.pname}
             </Card.Title>
                 <Card.Text>
                 <p style={{fontSize:"large"}}>&#8377; {item.price}</p>
                 <p>Discount {item.discount}%</p>
                 </Card.Text>
             </Card.Body>
             </Card>
             </NextLink>
             )
        }
        
    </div>
    </>
  )
}

export default SubcatWiseProduct