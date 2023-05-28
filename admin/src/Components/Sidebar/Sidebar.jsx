import { Link } from "react-router-dom";
import {
  AttachMoney,
  ChatBubbleOutline,
  DynamicFeed,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
  Call,
  Home,
} from "@material-ui/icons";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active ">
                <Home style={{ marginRight: 5, fontSize: 25 }} />
                Home
              </li>
            </Link>
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <Timeline style={{ marginRight: 5, fontSize: 25 }} />
                Analytics
              </li>
            </Link>

            <li className="sidebarListItem">
              <TrendingUp style={{ marginRight: 5, fontSize: 25 }} />
              Sales
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutline style={{ marginRight: 5, fontSize: 25 }} />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed style={{ marginRight: 5, fontSize: 25 }} />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline style={{ marginRight: 5, fontSize: 25 }} />
              Message
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem ">
                <PermIdentity style={{ marginRight: 5, fontSize: 25 }} />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront style={{ marginRight: 5, fontSize: 25 }} />
                Products
              </li>
            </Link>

            <li className="sidebarListItem">
              <AttachMoney style={{ marginRight: 5, fontSize: 25 }} />
              Transaction
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Customer Care</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutline style={{ marginRight: 5, fontSize: 25 }} />
              Manage
            </li>
            <li className="sidebarListItem">
              <Call style={{ marginRight: 5, fontSize: 25 }} />
              Support
            </li>
            <li className="sidebarListItem">
              <Report style={{ marginRight: 5, fontSize: 25 }} />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
