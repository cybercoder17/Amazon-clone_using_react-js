import React from 'react'
import "./homeBanner1.css";
import HomeBannerItemProduct from "../../../../homeproduct.json";

const HomeBanner1 = () => {
  return (
    <div className='homeBanner'>
      <div className="grayBackgroundHomeBanner"></div>

        <div className="homeBannerItemDiv1">

        {
        HomeBannerItemProduct.product1.map((item, ind) => {
            return (

            <div className="homeBannerItemDivCard">
                <div className="homeBannerItemDivcardTitle">{item.itemTitle}</div>
                <div className="imgHomeBannerItemDivCard">
                {
                    item.imgs.map((it,ind)=>{
                        return(
                            <div className="imgBannerHomeDiv">
                            <img src={it} alt="" className="imgBannerHomeDivImg"/>
                            <div className="imgBannerImgName">Air conditioners</div>
                            </div>
                        );
                    })
                }
       

        </div>

        <div className="seeMoreHomeBanner">See More</div>
      </div>
    );
  })}
</div>
    </div>
  )
}

export default HomeBanner1
