import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../api/userapi"
import UserCard from "../component/UserCard"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function UserList() {
  const { data, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  })

  const addedUsers = useSelector((state)=>state.users.addedUsers)

  const combinedUsers = data ? [...data,...addedUsers] : [...addedUsers]

  if (isLoading) return <p>Loading....</p>

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold p-7">User List</h2>
      <Link to={"/add"} 
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >Add New User</Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-7">
        {combinedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}
