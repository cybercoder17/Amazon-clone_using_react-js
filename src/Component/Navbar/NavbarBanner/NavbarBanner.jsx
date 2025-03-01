import React from 'react'
import './NavbarBanner.css'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Link} from 'react-router-dom'

const NavbarBanner = () => {
  const options = [
    { name: "Fresh" },
    { name: "MX Player" },
    { name: "Sell" },
    { name: "Amazon Pay" },
    { name: "Today's Deals" },
    { name: "Mobiles" },
    { name: "Best Sellers" },
    { name: "Electronics" },
    { name: "Prime" },
    { name: "New Releases" },
    { name: "Customer Service" },
    { name: "Gift Cards" },
    { name: "New Releases" },
    { name: "Home & Kitchen" }
  ]
  
  
  return (
    <div className='navbarBanner'>
      <div className="navbarBanneroptionsLeft">

          <div className="OptionsNavbarBanner">
            <MenuIcon sx={{fontSize:"24px"}}/>
            <div className="allOptionsNavbarBanner">All</div>
          </div>
          {
            options.map((item,ind) =>{
                return (
                  <Link to={'/Products'} className="OptionsNavbarBanner" key={ind}>
                    <div className="allOptionsNavbarBanner">{item.name}</div>
                  </Link>
      
                );
            })
          }

          {/* <div>
          <div className="OptionsNavbarBanner">
            <div className="allOptionsNavbarBanner">Fresh</div>
            <ArrowDropDownIcon  sx={{ fontSize:19 , marginTop:0.3,marginLeft:0}} />
          </div>

          <div className="OptionsNavbarBanner">
            <div className="allOptionsNavbarBanner">MX Player</div>
          </div>

          <div className="OptionsNavbarBanner">
            <div className="allOptionsNavbarBanner">sell</div>
          </div>

          <div className="OptionsNavbarBanner">
            <div className="allOptionsNavbarBanner">Amazon Pay</div>
          </div>

          <div className="OptionsNavbarBanner">
            <div className="allOptionsNavbarBanner">Today's Deals</div>
          </div>

          <div className="OptionsNavbarBanner">
            <div className="allOptionsNavbarBanner">Keep Shopping for</div>
          </div>

          <div className="OptionsNavbarBanner">
            <div className="allOptionsNavbarBanner">Best Sellers</div>
          </div>

          <div className="OptionsNavbarBanner">
            <div className="allOptionsNavbarBanner">Buy Again</div>
          </div>

          <div className="OptionsNavbarBanner">
            <div className="allOptionsNavbarBanner">Prime</div>
            <ArrowDropDownIcon  sx={{ fontSize:19 , marginTop:0.3,marginLeft:0}} />
          </div>

          <div className="OptionsNavbarBanner">
            <div className="allOptionsNavbarBanner">Customer Service</div>
          </div>
        
          <div className="OptionsNavbarBanner">
            <div className="allOptionsNavbarBanner">Mobiles</div>
          </div>

          <div className="OptionsNavbarBanner">
            <div className="allOptionsNavbarBanner">Gift Cards</div>
          </div>

          <div className="OptionsNavbarBanner">
            <div className="allOptionsNavbarBanner">Electronics</div>
          </div>

          <div className="OptionsNavbarBanner">
            <div className="allOptionsNavbarBanner">New Releases</div>
          </div>

          <div className="OptionsNavbarBanner">
            <div className="allOptionsNavbarBanner">Home & Kitchen</div>
          </div>
          </div> */}

      </div>

    </div>
  )
}

export default NavbarBanner
