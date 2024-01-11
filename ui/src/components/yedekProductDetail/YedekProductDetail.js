import React, { useState } from "react";
import "./YedekProductDetail.css";
import { AiFillCloseCircle } from "react-icons/ai";
import ProductData from "../../common/ProductData";

const ProductDetail = () => {
  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false);

  const detailPage = (ProductDetail) => {
    setDetail([{ ...ProductDetail }]);
    setClose(true);
  };

  return (
    <>
      {close ? (
        <div className="detail_container">
          <div className="detail_content">
            <button className="close" onClick={() => setClose(false)}>
              <AiFillCloseCircle />
            </button>
            {detail?.map((x) => {
              return (
                <>
                  <div className="detail_info">
                    <div className="img_box">
                      <img src={x.img} alt={x.title} />
                    </div>
                    <div className="product_detail">
                      <h2>{x.title}</h2>
                      <h3>{x.price}</h3>
                      <p>{x.des}</p>
                      <p>{x.cat}</p>
                      <button>Add to Basket</button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="container">
        {ProductData?.map((pro) => {
          return (
            <div>
              <div className="box">
                <div className="content">
                  <div className="img-box">
                    <img src={pro.img} alt={pro.title} />
                  </div>
                  <div className="detail">
                    <div className="info">
                      <h3>{pro.title}</h3>
                      <p>{pro.price}</p>
                    </div>
                    <button onClick={() => detailPage(pro)}>View</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductDetail;
