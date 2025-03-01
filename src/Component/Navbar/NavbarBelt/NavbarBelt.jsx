import React from 'react'
import './NavbarBelt.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';

const NavbarBelt = () => {

  const cartItems = useSelector((state)=>state.cart.items);
  return (
    <div className="navbarBelt">
        <div className="leftNavBar">
            <Link to={'/'} className="leftNavbarBeltLogo">
              <img className="amazonLogoNavbar" src="src/assets/amazonLogo.png" alt="amazonLogo" />
              <span className='navbar_inLogo'>.in</span>
            </Link>

            <div className="navbarBeltLocation">
              <div className="navbarBeltLocationImg">
                  <LocationOnOutlinedIcon className='navbarBeltLocationImgIcon' sx={{ fontSize:"22px"}}/>
              </div>

              <div className='navbarBeltLocationPlace'>
                  <div className="navbarBeltLocationTop">Deliverying to thane 400606</div>
                  <div className="navbarBeltLocationBottom">Update Location</div>
              </div>
            </div>
        </div>
        <div className="navbarBeltSearchBox">
          <div className="navbarBeltsearchDiv">
            <div className="navbarBeltsearchBoxAll">
              <div className="navbarBeltsearchBoxAllText">All</div>
              <ArrowDropDownIcon  sx={{ fontSize:"20px"}}/>
            </div>
            
            <input type="text" className='navbarBeltInputSearchBox'placeholder='Search Amazon.in'/>

            <div className="searchIconNavbarBelt">
              <SearchIcon className='searchIconNavbarBeltIcon' sx={{ fontSize:"26px"}}/>
            </div>

          </div>
        </div>
        <div className="rightSideNavbarBelt">
            <div className="indianFlagCode">
              <img src="src\assets\india.png"  className="indiaFalg" alt="" />
              <div className="indiaCodeNavbarBelt">EN <ArrowDropDownIcon  sx={{ fontSize:16 , marginTop:1,marginLeft:-0.4}} className='indiaCodeNavbarBeltDrp'/></div>
            </div>

            <div className="helloSignInNavbarBelt">
              <div className="helloTopNavbarBelt">Hello , User</div>
              <div className="indiaCodeNavbarBelt">Accounts & Lists <ArrowDropDownIcon  sx={{ fontSize:16 , marginTop:0.5,marginLeft:0}} className='helloTopNavbarBeltDrp'/></div>            </div>

            <div className="helloSignInNavbarBelt">
              <div className="helloTopNavbarBelt">Returns</div>
              <div className="indiaCodeNavbarBelt">& Orders</div>
            </div>

            <Link to={'/cart'} className="helloSignInNavbarBelt">
              <span className="cartItemNumberInNavbarBelt">{cartItems.length}</span>
              <div className="helloTopNavbarBelt"><ShoppingCartOutlinedIcon/> <span className='cartTitle'>Cart</span></div>
            </Link>

        </div>
    </div>
  )
}

export default NavbarBelt
