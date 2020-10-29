import React from "react"
import "./User.css"

export const User = ({ user }) => (
  <div className="singleUserCont">
    <div className="userFirstName">First Name: {user.firstName}</div>
    <div className="userLastName">Last Name: {user.lastName}</div>
    <div className="userAddress">Address: {user.address}</div>
  </div>
)