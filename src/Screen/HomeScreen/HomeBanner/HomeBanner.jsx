import React from "react";
import "./homeBanner.css";
import HomeBannerItemProduct from "../../../../homeproduct.json";
const HomeBanner = () => {
  return (
    <div className="homeBanner">
      <img
        className="homeBannerimg"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Frame_4._CB551381047_.png"
        alt=""
      />
      <div className="grayBackgroundHomeBanner"></div>

      <div className="homeBannerItemDiv">

        {
        HomeBannerItemProduct.product.map((item, ind) => {
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
  );
};

export default HomeBanner;
