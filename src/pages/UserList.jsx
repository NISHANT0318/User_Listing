import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../api/userapi"
import UserCard from "../component/UserCard"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useMemo, useState } from "react"

export default function UserList() {
  const { data, isLoading,isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    retry: false, 
  })

  const [search, setSearch] = useState("")

  const addedUsers = useSelector((state) => state.users.addedUsers)

  const combinedUsers = data ? [...data, ...addedUsers] : [...addedUsers]


  const filteredUser = useMemo(() => {
    return combinedUsers.filter(
      (user) =>
     ( typeof user.name === "string" && user.name.toLowerCase().includes(search.toLowerCase())) ||
      (typeof user.email === "string" && user.email.toLowerCase().includes(search.toLowerCase())
    ))
  }, [search, combinedUsers])


  if (isLoading) return <p>Loading....</p>

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">User List</h2>
      <div className="flex justify-center items-center mb-6 relative">

        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
          placeholder="search by name or email"
          className="w-full sm:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Link
          to="/add"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ml-4"
        >
          Add New User
        </Link>
      </div>

      {isError && addedUsers.length === 0 && (
        <p className="text-center text-red-500 mb-4">
          Failed to load users from API.
        </p>
      )}


    {filteredUser.length > 0 ? (

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-6">
        {filteredUser.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    ):(
      <>
      {combinedUsers.length === 0 ? (
            <p className="text-center text-gray-500 mt-10 text-lg">
              No users exist. Please add new user.
            </p>
    ):(
      <p className="text-center text-gray-500 mt-10 text-lg">User Not Found </p>
    )}
    </>
    )}
    </div>
  )
}
