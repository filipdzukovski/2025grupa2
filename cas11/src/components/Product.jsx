import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {fetchProductRequest} from './../actions/ProductActions';

export const Product = () => {

    const dispatch = useDispatch();
    const products = useSelector(state=>state.ProductReducer.products);
    const greska = useSelector(state=>state.ProductReducer.error);


    useEffect(()=>{
        dispatch(fetchProductRequest(6,10))
    },[dispatch])

    return(
        <div id='product'>
            <div>
            {products.map(product=>(
              
                    <p key={product.id}>{product.title} - ${product.price}</p>
                
            ))}
            </div>
        </div>
    )
}

