import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../api/userapi"

export default function UserList(){
    const {data,isLoading} = useQuery({
        queryKey:['users'],
        queryFn:fetchUsers
    })

    if (isLoading) return <p>Loading....</p>

    return   (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">User List</h2>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((user) => (
              <h3 key={user?.id}>
                {user.name}
              </h3>
            ))}
          </div>
        </div>
      )
    }
    