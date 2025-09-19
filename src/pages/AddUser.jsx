import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addUser } from "../features/userSlice"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Enter a valid email").required("Email is required"),
    company: yup.string().required("Company is required"),
    city: yup.string().required("City is required"),
    phone: yup.string().matches(/^[0-9]+$/, "Phone must be only digits"),
    website: yup.string().url("Enter a valid URL"),
    street: yup.string(),
    suite: yup.string(),
});


export default function AddUser() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode:"all"
    });

    const onSubmit = (data) => {
        const newUser = {
            id: Date.now(),
            name: data.name,
            email: data.email,
            company: { name: data.company },
            address: {
                city: data.city,
                street: data.street || "NA",
                suite: data.suite || "NA",
            },
            phone: data.phone || "NA",
            website: data.website || "NA",
        };

        dispatch(addUser(newUser));
        navigate("/");
    };
    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Add User</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <div className="flex items-center ">
                    <label htmlFor="name" className="w-24 font-medium">Name</label>
                    <div className="flex-1">
                        <input type="text" id="name" name="name" placeholder="Enter name"
                            className="w-full px-4 py-2 border rounded-lg"  {...register("name")} />
                        {errors.name && (<p className="text-red-500 text-sm">{errors.name.message}</p>)}
                    </div>
                </div>

                <div className="flex items-center ">
                    <label htmlFor="email" className="w-24 font-medium">Email</label>
                    <div className="flex-1">

                        <input type="email" id="email" name="email" placeholder="Enter email"
                            className="w-full px-4 py-2 border rounded-lg"  {...register("email")} />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>

                </div>

                <div className="flex items-center ">
                    <label htmlFor="company" className="w-24 font-medium">Company</label>
                    <div className="flex-1">

                        <input type="text" id="company" name="company" placeholder="Enter company name"
                            className="w-full px-4 py-2 border rounded-lg"  {...register("company")} />
                        {errors.company && <p className="text-red-500">{errors.company.message}</p>}
                    </div>


                </div>


                <div className="flex items-center ">
                    <label htmlFor="city" className="w-24 font-medium">City</label>

                    <div className="flex-1">

                        <input type="text" id="city" name="city" placeholder="Enter city"
                            className="w-full px-4 py-2 border rounded-lg"  {...register("city")} />
                        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                    </div>
                </div>

                <div className="flex items-center ">
                    <label htmlFor="phone" className="w-24 font-medium">Phone</label>
                    <div className="flex-1">
                        <input type="text" id="phone" name="phone" placeholder="Enter phone number"
                            className="w-full px-4 py-2 border rounded-lg"  {...register("phone")} />
                        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                    </div>

                </div>

                <div className="flex items-center ">

                    <label htmlFor="website" className="w-24 font-medium">Website</label>
                    <div className="flex-1">

                        <input type="text" id="website" name="website" placeholder="Enter website url"
                            className="w-full px-4 py-2 border rounded-lg"  {...register("website")} />
                        {errors.website && <p className="text-red-500">{errors.website.message}</p>}
                    </div>
                </div>



                <div className="flex items-center ">
                    <label htmlFor="street" className="w-24 font-medium">Street</label>

                    <div className="flex-1">

                        <input type="text" id="street" name="street" placeholder="Enter street"
                            className="w-full px-4 py-2 border rounded-lg"  {...register("street")} />

                    </div>

                </div>

                <div className="flex items-center ">
                    <label htmlFor="suite" className="w-24 font-medium">Suite</label>
                    <div className="flex-1">
                        <input type="text" id="suite" name="suite" placeholder="Enter suite"
                            className="w-full px-4 py-2 border rounded-lg"  {...register("suite")} />
                    </div>

                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Add User </button>
            </form>

        </div>

    )
}