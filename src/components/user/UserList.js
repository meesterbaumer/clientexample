import React, { useContext, useEffect } from "react"
import { UserContext } from "./UserProvider"
import { User } from "./User"
import "./User.css"

export const UserList = () => {
  const { users, getUsers } = useContext(UserContext)

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
    {
      users.map(use => <User key={use.id} user={use} />)
    }
    </div>
  )
}