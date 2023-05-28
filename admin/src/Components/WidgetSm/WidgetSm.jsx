import React, { useEffect, useState } from "react";
import { useRequest } from "../../requestMethods";
import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";

const WidgetSm = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await useRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Users</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li className="widgetSmListItem" key={user?._id}>
            <img
              src={
                user?.image ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
              alt="img"
              className="widgetSmImage"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user?.username}</span>
              <span className="widgetSmUserTitle">Software Engineering</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
