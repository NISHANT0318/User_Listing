import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { fetchUsersById } from "../api/userapi"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function UserDetails(){
    const {id} =useParams()

    const addedUsers = useSelector((state) => state.users.addedUsers)
    const localUser = addedUsers.find((u) => u.id.toString() === id)


    const {data:apiUser,isLoading}=useQuery({
        queryKey:["users",id],
        queryFn:()=> fetchUsersById(id),
        enabled:!localUser
    })

    const user = localUser || apiUser


    if (isLoading) return <p>Loading...</p>
    if(!user) return <p>No User Found</p>
    return (
        <div className="p-6">
          <Link to="/" className="text-blue-500  mb-4 block">
            ← Back to Users
          </Link>
    
          <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
    
          <div className="space-y-2 text-gray-700">
            <p><span className="font-semibold text-gray-800">Email:</span> {user.email}</p>
            <p><span className="font-semibold text-gray-800">Phone:</span> {user.phone || "NA"}</p>
            <p><span className="font-semibold text-gray-800">Website:</span> {user.website || "NA"}</p>
            <p><span className="font-semibold text-gray-800">Company:</span> {user.company?.name}</p>
            <p>
              <span className="font-semibold text-gray-800">Address:</span>{" "}
              {user.address?.suite || "NA"}, {user.address?.street || "NA"}, {user.address?.city}
            </p>
          </div>
        </div>
      )
}