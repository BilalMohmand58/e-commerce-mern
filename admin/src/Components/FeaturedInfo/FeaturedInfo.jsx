import React, { useEffect, useState } from "react";
import { useRequest } from "../../requestMethods";
import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await useRequest.get("orders/income");
        setIncome(res.data);
        setPercentage((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);
  console.log(income);
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">💰{income[1]?.total}</span>
          <span className="featuredMoneyRate">
            {Math.floor(percentage)} %
            {percentage < 0 ? (
              <ArrowDownward style={{ color: "red" }} />
            ) : (
              <ArrowUpward style={{ color: "green" }} />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ 23000</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward style={{ color: "red" }} />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ 23000</span>
          <span className="featuredMoneyRate">
            11.4 <ArrowUpward style={{ color: "green" }} />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
