import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import {  googleAuthProvider, auth } from './firebase'
import { useRouter } from 'next/router'
import Navbar from '../Navbar';


function Login() {

    const router = useRouter()
    // const Navigate = useNavigate()
    const handleSignInWithGoogle = async () =>{
        try{
            const result = await signInWithPopup(auth, googleAuthProvider);
            console.log(result)
            localStorage.setItem("token", result.user.accessToken)
            localStorage.setItem("user", JSON.stringify(result.user))
            router.push('/Dashboard')
        }catch(error){
            console.error(error)
        }
    }
  return (
    <>
    <Navbar />
    <div style={{marginLeft:"500px", marginTop:"80px", width:"330px"}} className="shadow-lg p-3 mb-5 bg-white rounded">
        <h4>Login</h4>
        <div style={{width:"300px"}}>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" style={{width:"100%"}}>
                    Submit
                </Button>
            </Form>
        </div>
        <GoogleButton  className='App' style={{marginTop:"20px", width:"300px"}}
        onClick= {handleSignInWithGoogle }/>
    </div>
      
    </>
   
  )
}

export default Login