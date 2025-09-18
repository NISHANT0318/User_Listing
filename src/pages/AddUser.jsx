import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addUser } from "../features/userSlice"


export default function AddUser(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [form,setForm] = useState({
        name:"",
        email:"",
        company:"",
        city:"",
        phone:"",
        website:"",
        street:"",
        suite:""
    })

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:[e.target.value]})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(!form.name || !form.email || !form.company || !form.city){
            alert("Fill all the required field")
            return
        }

        const newUser={
            id:Date.now(),
            name:form.name,
            email:form.email,
            company:{name:form.company},
            address:{
                city:form.city,
                street:form.street || "NA",
                suite:form.suite || "NA"
            },
            phone:form.phone || "NA",
            website:form.website || "NA"
        }
        dispatch(addUser(newUser))
        navigate("/")


    }



    return(
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Add User</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg" required />

                <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg" required />

                <input type="text" name="company" placeholder="Company" value={form.company} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg" required />

                <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg" required />

                <input type="text" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"  />

                <input type="text" name="website" placeholder="Website" value={form.website} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"  />

                <input type="text" name="street" placeholder="Street" value={form.street} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"  />

                <input type="text" name="suite" placeholder="Suite" value={form.suite} onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"  />

                <button type="submit"  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Add User </button>
            </form>

        </div>

    )
}