import React,{useEffect,useState} from 'react';
import {Products} from './Products';
import axios from 'axios';
import {API_URL} from './../utils/constants';
import { ProductContext } from '../utils/ProductContext';


export const Home = () =>{

    const [products,setProducts] = useState([]);
    const [selectedProduct,setSelectedProduct] = useState({});
    console.log(selectedProduct)
    useEffect(()=>{
        axios.get(`${API_URL}/products`)
                .then(res=>{
                   setProducts(res.data.products)
                    
            })
                .catch(err=>{alert(err)})
    },[])

    return(
        <div id='home'>
            <ProductContext.Provider value={{selectedProduct,setSelectedProduct}}>
            <Products
                listOfProducts = {products}
                // izberiProduct = {(product)=>{setSelectedProduct(product)}} 
                // izbranProduct={selectedProduct}
                // closeProduct={()=>{setSelectedProduct({})}}
           />
           </ProductContext.Provider>
        </div>
    )

}