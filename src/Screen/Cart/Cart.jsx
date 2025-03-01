import React,{useState,useEffect} from 'react'
import './Cart.css'
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/actions/Actions';
import { removeFromCart } from '../../Redux/actions/Actions';
import { toast ,ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {

    const [cartItem,setCartItem] = useState([]);
    const dispatch = useDispatch();
    const cartItems = useSelector((state)=>state.cart.items);

    let a = 0;
    let cost = cartItems.map((item)=>{return a = a + item.price})

    useEffect(()=>{
        setCartItem(cartItems);
    },[cartItems]) 


    const handleAddToCart = (item) => {
        toast.success("Successfully Added in Cart",{
            position:"bottom-right"
        });
        dispatch(addToCart(item));
    }

    const handleRemoveFromCart = (index) =>{
        toast.error("Item Removed From Cart",{
            position:"bottom-right"
        });
        dispatch(removeFromCart(index));
    }

    const purchase = () => {
        if (cartItem.length !== 0) {
            alert("Purchase Successfully");
        }
    };
    


  return (
    <div className="cart">

        <div className="topLeftCart">
            <div className="topLeftcartTitle">Shopping Cart</div>
            <div className="desellectAllCart">Deselect all items</div>
            <div className="cartPriceTextDivider">Price</div>

            <div className="cartItemDiv">
                {
                    cartItems.map((item, index)=>{
                        return(
                            <div className="cartItemBlock">
                                <div className="cartItemLeftBlock">
                                    <div className="cartItemLeftBlockImge">
                                        <img className='cartItemLeftBlcokImg' src={item.imageUrl} alt="" />   
                                    </div>

                                    <div className="cartItemLeftBlockDetails">
                                        <div className="cartItemProductName">{item.name}</div>
                                        <div className="inStockCart">In stock</div>
                                        <div className="elgFreeshp">Eligible for FREE Shipping</div>
                                        <div className="amazonFullFillImage"><img className='fullFillImg' src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="" /></div>
                                        <div className='checkBox'><input className='inputBox' type="checkbox" />This will be a gift <span className='checkBoxSpan'>Learn more</span></div>
                                        <div className="removePart">
                                            <div class="counter">
                                                <button id="decrease" onClick={() => handleRemoveFromCart(index)}>-</button>
                                                <span id="count">1</span>
                                                <button id="increase" onClick={()=>{handleAddToCart(item)}}>+</button>
                                            </div>
                                            <div className="aftercart">
                                                <div className="removeSaveSeeSave" onClick={() => handleRemoveFromCart(index)}>Delete</div>
                                                <div className="removeSaveSeeSave">Save for later</div>
                                                <div className="removeSaveSeeSave">See more like this</div>
                                                <div className="removeSaveSeeSave">Share</div>
                                            </div>
                                        </div>
                                        <div className="removefromCart" onClick={() => handleRemoveFromCart(index)}>Remove From Basket</div>
                                    </div>
                                </div>

                                <div className="cartItemRightBlock">
                                    Rs {item.price}
                                </div>

                            </div>
                        );
                    })
                }
                

            </div>

            <div className="subTotal">
                <div className="subTotalItem">{`Subtotal (${cartItem.length} item) :`}</div>
                <div className="cartItemRightBlock">₹ {a}</div>
            </div>

        </div>

        <div className="topRightCart">
              <div className="subTotalTitle">subtotal ({cartItem.length} item) : <span className='subTotalTitlespan'>Rs {a}</span></div>  
              <div className="giftAddto">
                <input type="checkbox" />
                <div>This Order Contains a gift</div>
              </div>
              <div className="proceedToBuy" onClick={()=>{purchase()}}>Prodceed To Buy</div>

        </div>

        <ToastContainer/>
    </div>
  )
}

export default Cart
