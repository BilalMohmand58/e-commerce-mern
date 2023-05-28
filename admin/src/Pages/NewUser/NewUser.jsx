import React from "react";
import "./NewUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="bilalmohmand58" />
        </div>

        <div className="newUserItem">
          <label>Name</label>
          <input type="text" placeholder="bilal" />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="bilal@gmail.com" />
        </div>

        <div className="newUserItem">
          <label>Password</label>
          <input type="password" />
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Islamabad, Pakistan" />
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input type="number" placeholder="bilal" />
        </div>

        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
