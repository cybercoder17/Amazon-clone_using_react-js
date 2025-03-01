import React from 'react'
import "./FooterSign.css"
const FooterSign = () => {
  return (
    <div className='footerSign'>
        <div className="hrtop"></div>
                <div className="footerSignbox">
                    <div className="footerSign1">See personalized recommendations</div>
                    <button className='FootersignButton' >Sign in</button>
                    <div className="footerSign2">New customer? <a href="#">Start here</a></div>
                </div>
        <div className="hrbottom"></div>
        <div  className="backToTop">Back to top</div>
    </div>
  )
}

export default FooterSign
