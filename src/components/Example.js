import React from "react"
import "./Example.css"
import { UserProvider } from "./user/UserProvider"
import { UserList } from "./user/UserList"

export const Example = () => (
  <>
    <div className="Title">Test</div>
    <UserProvider>
      <UserList />
    </UserProvider>
  </>
)