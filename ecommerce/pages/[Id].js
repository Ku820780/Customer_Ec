import { useRouter } from 'next/router'
import React, { use } from 'react'
import SubcatWiseProduct from './SubcatWiseProduct'
import Navbar from './Navbar'
import ProductFullDetails from './ProductFullDetails'

const Id = () =>{

    const router = useRouter()
    const {Id} = router.query
    console.log(Id);

    if(Id.startsWith('E') || Id.startsWith('M')) {
        return(
            <>
             <SubcatWiseProduct Subcategoryid={Id} />
            </>
        )
       }else{
        return(
        
             <ProductFullDetails pid={Id}/>
    
        )
    }

   
}

export default Id