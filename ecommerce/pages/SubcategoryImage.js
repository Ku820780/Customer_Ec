import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function SubcategoryImage() {

    const [showdata, setShowData] = useState([])

  const showSubcategoryData = (Pcategoryid) =>{
    
    axios.get(`http://localhost:5500/api/customer/SubcategoryidData/${Pcategoryid}`)
    .then((res)=>{
      console.log(res)
      setShowData(res.data)
      console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    showSubcategoryData()
  },[])


  return (
    <div style={{}}>
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body style={{marginLeft:"100px" }}>
                {
                    showdata.map((item)=>
                    <Card.Title>{item.photo}</Card.Title>
                    )
                }
                
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
  )
}
