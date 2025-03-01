import React from 'react'
import './Products.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import productDeatils from './Products.json'
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/actions/Actions';
import { toast ,ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Products = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state)=>state.cart.items);
    const handleAddToCart = (item) => {
        toast.success("Successfully Added in Cart",{
            position:"bottom-right"
        });
        dispatch(addToCart(item));
    }
  return (
    <div className="productPage">
        <div className="productTopBanner">
            <div className="productTopBannerItem">
                Electronics
            </div>
            <div className="productTopBannerItemSubMenu">Mobiles & Accessories</div>
            <div className="productTopBannerItemSubMenu">Laptops & Accessories</div>
            <div className="productTopBannerItemSubMenu">TV & Home Entertainment</div>
            <div className="productTopBannerItemSubMenu">Audio</div>
            <div className="productTopBannerItemSubMenu">Cameras</div>
            <div className="productTopBannerItemSubMenu">Computer Peripherals</div>
            <div className="productTopBannerItemSubMenu">Smart Technology</div>
            <div className="productTopBannerItemSubMenu">Musical Instruments</div>
            <div className="productTopBannerItemSubMenu">Office & Stationary</div>
        </div>

        <div className="productsPageMain">
            <div className="productsPageMainLeftCategory">
                <div className="productsPageMainLeftCategoryTitle">Category</div>
                    <div className="productsPageMainLeftCategoryContent">
                        <div className="productsPageMainLeftCategoryTitleContent">Computers & Accessories</div>
                        <div className="productsPageMainLeftCategoryContentSub">Macbooks</div>
                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />

                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />

                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />

                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="ratingLeftBox">
                            <StarRateIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <StarOutlineIcon sx={{ fontSize: "20px", color: "#febd69" }} />
                            <div className="andUp"> & Up</div>
                        </div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                        <div className="productsPageMainLeftCategoryContentSub">Amazon Prime</div>
                        <div className="productsPageMainLeftCategoryContentSub">Average Customer Review</div>

                    </div>
            </div>

            <div className="productsPageRgiht">
                <div className="productsPageMainRightTopBanner">
                    1-5 of 5 results for <span className='productsPageMainRightTopBannerSpan'>Macbooks</span>
                </div>

                <div className="itemsImgProductPage">

                    {
                        productDeatils.product.map((item,index)=>{
                            return (
                                <div className="itemIMgProductPageOne " key={index}>
                                <div className="ImgBlockitemImgeProductPageOne">
                                    <img src={item.imageUrl} className='productImgeProduct' alt="" />
                                </div>
                                <div className="productNameProduct">
                                    <div>{item.name}</div>
                                    <div className="productNameProductRating">
                                        <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                        <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
        
                                        <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                        <StarRateIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                        <StarOutlineIcon sx={{ fontSize: "16px", color: "#febd69" }} />
                                    </div>
                                    <div className="priceProductDetailPage">
                                        <div className="currencyText">₹</div>
                                        <div className="rateHomeDetail">
                                            <div className="rateHomeDetailsPrice">{item.price}</div>
                                            <div className="addtobasketbtn" onClick={()=>{handleAddToCart(item)}}>Add To Cart</div>
                                        </div>
        
                                    </div>
                                    <div className="ofProductPage">Upto 10% off on select cards</div>
                                    <div className="freeDeliveryHomePage">Free Delivery By Amazon</div>
                                </div>
                                </div>
                            );

                        })
                    }  

                   
                    
                </div>

            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Products
