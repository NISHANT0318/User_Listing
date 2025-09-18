import { Link } from "react-router-dom";

export default function UserCard({user}){
    return(
        <Link  to={`/users/${user.id}`} className="block">
        <div className="border rounded-xl p-4 shadow-md hover:shadow-lg transition cursor-pointer bg-white">
            <h3 className="text-lg font-semibold mb-1">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
            <div className="mt-3 text-sm space-y-1"> 
                <p> <span className="mt-3 text-sm space-y-1">
                   {user.company?.name} </span></p>
                <p><span className="mt-3 text-sm space-y-1">
                {user.address?.city}</span></p>
            </div>
        </div>
        </Link>
    )
}