import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import './Anupam.module.css'
import * as Style from './Anupa.module.css'


function Anupam() {
  return (
    <div style={{display:'flex', marginLeft:"100px"}}>
        <div style={{width:"500px", height:"500px", marginTop:"70px", marginLeft:"50px"}} className={Style.anu}>
            
        </div>
        <div style={{marginLeft:"100px", marginTop:"10px", height:"300px"}} >
            <h3 style={{marginLeft:"150px"}}>Sign up</h3>
            <Form>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" style={{backgroundColor:"#ececec"}}/>
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Email Id</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" style={{backgroundColor:"#ececec"}}/>
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone" style={{backgroundColor:"#ececec"}}/>
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" style={{backgroundColor:"#ececec"}}/>
                </Form.Group>
                <div style={{display:'flex'}}>
                    <div>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Pin</Form.Label>
                    <Form.Control type="number" placeholder="Enter Pin" style={{backgroundColor:"#ececec"}}/>
                    </Form.Group>
                    </div>
                    <div style={{marginLeft:"20px"}}>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter City" style={{backgroundColor:"#ececec"}}/>
                    </Form.Group>
                    </div>
                </div>
                    <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Password" style={{backgroundColor:"#ececec"}}/>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
              
                <Button variant="secondary" type="submit" style={{width:"100%"}}>
                Signup
                </Button>
            </Form>
        </div>
    </div>
  )
}

export default Anupam