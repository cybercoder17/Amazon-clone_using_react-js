import React from 'react'
import './Footer.css'
import LanguageIcon from '@mui/icons-material/Language';
import UnfoldMoreSharpIcon from '@mui/icons-material/UnfoldMoreSharp';


const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className="footerContent">
        <div className="footerContent1">
            <div className="contentFootertitel">Get to Know us</div>
                <div className="contentfooterSubTitlediv">
                    <div className="contentfooterSubTitleCont">About Amazon</div>
                    <div className="contentfooterSubTitleCont">Careers</div>
                    <div className="contentfooterSubTitleCont">Press Releases</div>
                    <div className="contentfooterSubTitleCont">Amazon Science</div>
                </div>
        </div>


        <div className="footerContent1">
            <div className="contentFootertitel">Connect with Us</div>
                <div className="contentfooterSubTitlediv">
                    <div className="contentfooterSubTitleCont">Facebook</div>
                    <div className="contentfooterSubTitleCont">Twitter</div>
                    <div className="contentfooterSubTitleCont">Instagram</div>
                </div>
        </div>

        <div className="footerContent1">
            <div className="contentFootertitel">Make Money with Us</div>
            <div className="contentfooterSubTitlediv">
                <div className="contentfooterSubTitleCont">Sell on Amazon</div>
                <div className="contentfooterSubTitleCont">Sell under Amazon Accelerator</div>
                <div className="contentfooterSubTitleCont">Protect and Build Your Brand</div>
                <div className="contentfooterSubTitleCont">Amazon Global Selling</div>
                <div className="contentfooterSubTitleCont">Supply to Amazon</div>
                <div className="contentfooterSubTitleCont">Become an Affiliate</div>
                <div className="contentfooterSubTitleCont">Fulfilment by Amazon</div>
                <div className="contentfooterSubTitleCont">Advertise Your Products</div>
                <div className="contentfooterSubTitleCont">Amazon Pay on Merchants</div>
            </div>
        </div>

        <div className="footerContent2">
            <div className="contentFootertitel">Let Us Help You</div>
            <div className="contentfooterSubTitlediv">
                <div className="contentfooterSubTitleCont">Your Account</div>
                <div className="contentfooterSubTitleCont">Returns Centre</div>
                <div className="contentfooterSubTitleCont">Recalls and Product Safety Alerts</div>
                <div className="contentfooterSubTitleCont">100% Purchase Protection</div>
                <div className="contentfooterSubTitleCont">Amazon App Download</div>
                <div className="contentfooterSubTitleCont">Help</div>
            </div>
    </div>

    </div>
        <div className='hrTop'></div>
        <div className="amazonImg">
            <img className='amazonImgFooter' src="src\assets\amazonLogo.png" alt="" />
            <div className="langlogo">
                <div className='lang'> <LanguageIcon  sx={{ fontSize:"15px"}}/>  English <UnfoldMoreSharpIcon  className='unfold' sx={{ fontSize:"15px"}}/> </div>
                <div className='indainName'><img className='indainLOgo' src="src\assets\india.png" alt="" /> India</div>
            </div>
        </div>

    

    </div>

            
    <div className="footerLast">
        <div className="footerLast1">

            <div className="footerContentlast">
                <div className="contentFootertitel1">AbeBooks</div>
                <div className="contentfooterSubTitlediv1">
                    <div className="contentfooterSubTitleCont1">Books, art</div>
                    <div className="contentfooterSubTitleCont1">& collectibles</div>
                </div>
            </div>

            <div className="footerContentlast">
                <div className="contentFootertitel1">Amazon Web Services</div>
                <div className="contentfooterSubTitlediv1">
                    <div className="contentfooterSubTitleCont1">Scalable Cloud</div>
                    <div className="contentfooterSubTitleCont1">Computing Services</div>
                </div>
            </div>

            <div className="footerContentlast">
                <div className="contentFootertitel1">Audible</div>
                <div className="contentfooterSubTitlediv1">
                    <div className="contentfooterSubTitleCont1">Download</div>
                    <div className="contentfooterSubTitleCont1">Audio Books</div>
                </div>
            </div>

            <div className="footerContentlast">
                <div className="contentFootertitel1">IMDb</div>
                <div className="contentfooterSubTitlediv1">
                    <div className="contentfooterSubTitleCont1">Movies, TV</div>
                    <div className="contentfooterSubTitleCont1">& Celebrities</div>
                </div>
            </div>





        </div>

        <div className="footerLast2">
            <div className="footerContentlast">
                <div className="contentFootertitel1">Shopbop</div>
                <div className="contentfooterSubTitlediv1">
                    <div className="contentfooterSubTitleCont1">Designer</div>
                    <div className="contentfooterSubTitleCont1">Fashion Brands</div>
                </div>
            </div>

            <div className="footerContentlast">
                <div className="contentFootertitel1">Amazon Business</div>
                <div className="contentfooterSubTitlediv1">
                    <div className="contentfooterSubTitleCont1">Everything For</div>
                    <div className="contentfooterSubTitleCont1">Your Business</div>
                </div>
            </div>

            <div className="footerContentlast">
                <div className="contentFootertitel1">Prime Now</div>
                <div className="contentfooterSubTitlediv1">
                    <div className="contentfooterSubTitleCont1">2-Hour Delivery</div>
                    <div className="contentfooterSubTitleCont1">on Everyday Items</div>
                </div>
            </div>

            <div className="footerContentlast">
                <div className="contentFootertitel1">Amazon Prime Music</div>
                <div className="contentfooterSubTitlediv1">
                    <div className="contentfooterSubTitleCont1">100 million songs, ad-free</div>
                    <div className="contentfooterSubTitleCont1">Over 15 million podcast episodes</div>
                </div>
            </div>

        </div>

        <div className="footerfinal">
            <div className="footer1">
                <div className="note">Conditions of Use & Sale</div>
                <div className="note">Privacy Notice</div>
                <div className="note">Interest-Based Ads</div>

            </div>
            <div className="footer2">© 1996-2025, Amazon.com, Inc. or its affiliates</div>
        </div>
    </div>
    </>


  )
}

export default Footer
