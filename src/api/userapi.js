export const fetchUsers=async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    return await res.json()
}


export const fetchUsersById=async(id)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    if (!res.ok) throw new Error("Failed to fetch user")
    return await res.json()
}