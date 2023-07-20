
import './cartcard.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removefromcart } from '../../redux/slices/cartSlice';
import { incrementQuantity } from '../../redux/slices/cartSlice';
import { decrementQuantity } from '../../redux/slices/cartSlice';
import { useSelector} from 'react-redux/es/hooks/useSelector';
import {BsTrash} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
function OptionCard(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let SubTotal=0;
    let SalesTax=0;
    const items = useSelector(state => state);
    const handleRemove = (itemname) => {
        dispatch(removefromcart({name:itemname}));
        // setCart(cart.filter((ele) => 
        // (ele.name.toLowerCase()  !== itemname.toLowerCase())
        // ));
    };

  return (
    <div className="cartCard">
        <div className="cart-card" >
           
                <h1 className='cart-head'>Cart</h1>
                
                
                <div className="cart-items">
                    {
                        items.cart.length===0 ? <h6 className="empty-cart">Cart is empty</h6> :    
                        items.cart.map((item, index) => {
                            return (
                                <div className="cart-item d-flex justify-content-evenly mb-1">
                                    <a type="button" className="trash btn" onClick={()=>(handleRemove(item.name))} ><BsTrash/></a>
                            
                                    <div className="cart-item-name">{item.name}</div>
                                    <button type="button" className="btn btn-sm" onClick={()=>(dispatch(decrementQuantity({name:item.name})))}>-</button>
                                    <div className="cart-item-quantity">{item.quantity}</div>
                                    <button type="button" className="btn btn-sm" onClick={()=>(dispatch(incrementQuantity({name:item.name})))}>+</button>
                                    <div className="cart-item-price">{item.price}</div>
                                </div>
                            )
                        })
                    }
                </div> 
                <div className='cart-total '>
                    <div className="d-flex justify-content-around ">
                        <h6>SubTotal</h6>
                        <h6>Rs. {SubTotal=items.cart.reduce((total, item) => total + item.price*item.quantity, 0)}</h6>
                    </div> 
                    <div className=" d-flex justify-content-around ">
                        <h6>Sales Tax</h6>
                        <h6>Rs. {SalesTax=0.15*items.cart.reduce((total, item) => total + item.price*item.quantity, 0)}</h6>
                    </div> 
                    <div className="cart-totalbill d-flex justify-content-around ">
                        <h5>Total</h5>
                        <h5>Rs. { SubTotal+SalesTax}</h5>
                    </div>
                </div>  
                <button type="button" className="receipt btn m-3" onClick={()=>(navigate('/receipt'))} >Proceed to Reciept</button>
                            
            </div>
        
    </div>
  );
}

export default OptionCard;
