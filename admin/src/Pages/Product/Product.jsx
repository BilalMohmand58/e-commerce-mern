import React, { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../Components/Chart/Chart";
import { productData } from "../../chartData";
import "./Product.css";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useRequest } from "../../requestMethods";

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [productStats, setProductStats] = useState([]);
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await useRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setProductStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);
  console.log(productStats);
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productStats} dataKey="Sales" title="Monthly Sales" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.image} alt="" className="productImage" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue">{product._id}</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">sales: </span>
              <span className="productInfoValue">443423</span>
            </div>

            <div className="productInfoItem">
              <span className="productInfoKey">inStock: </span>
              <span className="productInfoValue">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product.title} />

            <label>Product Description</label>
            <input type="text" placeholder={product.description} />

            <label>Product Price</label>
            <input type="number" placeholder={product.price} />

            <label>InStock</label>
            <select name="instock" id="instock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.image} className="productUploadImage" alt="" />
              <label htmlFor="file">
                <Publish style={{ marginTop: "10", marginRight: "10" }} />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton"> Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
