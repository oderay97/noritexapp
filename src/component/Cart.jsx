import React from 'react';
import {useSelector} from 'react-dom';
// import Product from './Product';

const Cart = () => {
    return (
        <>
        <div>
          <div className="row">
            <div className="cold-md-4">
                <img src="{product.image}" alt="{product.title}" height="200px" width="180px" />
            </div>
            <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bold">
                 {product.qty} X ${product.price} = $
                 {product.qty * product.price}
                </p>
                <button className="btn btn-outline-dark me-4"
                onClick={()=>handleButto(product)}>
                    <i className="fa fa-minus"></i>
                </button>
                <button className="btn btn-outline-dark"
                onClick={()=>handleButto(product)}>
                    <i className="fa fa-plus"></i>
                </button>
            </div>
            <ShowProduct/>
          </div>
        </div>
        </>
    );
}


export default Cart;