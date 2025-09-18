import { useContext, useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { userContext } from '../context/context';
function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        company: "",
        agency: ""
    });
    const { setUserData } = useContext(userContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        const emailRegex = /[a-zA-Z0-9+-_.%]+@[^\s@]+\.[a-z]{2,}$/;
        const nameRegex = /[a-zA-Z\s']+$/;
        const { name, email, password, phone, company, agency } = formData;

        e.preventDefault();

        setFormData({
            ...formData,
            name: name.trim(),
            email: email.trim(),
            password: password.trim()
        })

        if (!name) return toast.warning("Enter name!!")
        if (!nameRegex.test(name)) return toast.warning("Invalid name!!")
        if (name.length < 5) return toast.warning("Name must be atleast 5 characters long!!")
        if (!email) return toast.warning("Enter email!!")
        if (!emailRegex.test(email)) return toast.warning("Invalid email!!")
        if (email.includes(" ")) return toast.warning("Email should not contain whitespace!!")
        if (!password) return toast.warning("Enter password!!")
        if (password.includes(" ")) return toast.warning("Password should not contain whitespace!!")
        if (password.length < 6) return toast.warning("Password must be atleast 6 characters long!!")
        if (!company) return toast.warning("Enter company!!")
        if (!phone) return toast.warning("Enter phone number!!")
        if (phone.length < 10) return toast.warning("Invalid phone number!!")
        if (!agency) return toast.warning("Select are you agency, yes or not!!")

        fetch("https://propx-assignment.onrender.com/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        })
            .then(async (res) => {
                const data = await res.json();
                if (!res.ok) {
                    if (res.status === 409) {
                        toast.error("User already exist, please login instead");
                     } else {
                        toast.error(data.message || "Something went wrong");
                    }
                    throw new Error("Login failed");
                }
                return data;
            })
            .then(() => {
                setUserData({ name, email });
                setFormData({});
                toast.success("Signup successful.")
                setTimeout(() => {
                    navigate("/account")
                }, 500);
            })
            .catch(err => console.error(err));


    }


    return (
        <div className='h-screen w-full flex justify-center'>
            <form className='h-full w-full sm:w-sm bg-zinc-100 shadow-md p-4 flex flex-col gap-2' onSubmit={handleSubmit}>
                <h2 className='text-2xl font-bold'>
                    Create your <br />
                    PopX account
                </h2>
                <div className="flex flex-col ">
                    <label htmlFor="name" className="w-fit bg-zinc-100 px-2 text-sm font-medium text-purple-700 relative top-3 left-2">
                        Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        placeholder="Enter name"
                        onChange={handleChange}
                        className="border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="phone" className="w-fit bg-zinc-100 px-2 text-sm font-medium text-purple-700 relative top-3 left-2">
                        Phone number<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        placeholder="Enter phone number"
                        onChange={handleChange}
                        className="border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="email" className="w-fit bg-zinc-100 px-2 text-sm font-medium text-purple-700 relative top-3 left-2">
                        Email address<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="emai"
                        name="email"
                        value={formData.email}
                        placeholder="Enter email address"
                        onChange={handleChange}
                        className="border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="password" className="w-fit bg-zinc-100 px-2 text-sm font-medium text-purple-700 relative top-3 left-2">
                        Password<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        placeholder="Enter password"
                        onChange={handleChange}
                        className="border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="company" className="w-fit bg-zinc-100 px-2 text-sm font-medium text-purple-700 relative top-3 left-2">
                        Company Name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        placeholder="Marry Doe"
                        onChange={handleChange}
                        className="border border-gray-500 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className='mt-2'>
                    <p>Are you an Agency?<span className="text-red-500">*</span></p>
                    <div className='flex gap-2'>
                        <input
                            id='yes'
                            type="radio"
                            value="Yes"
                            name="agency"
                            onChange={handleChange}

                        />
                        <label htmlFor='yes'>yes</label>
                        <input
                            id='no'
                            type="radio"
                            value="no"
                            name="agency"
                            onChange={handleChange}
                            className='ml-4'
                        />
                        <label htmlFor='no'>no</label>
                    </div>
                </div>
                <button className="bg-purple-800 mt-auto mb-4 text-zinc-100 rounded-md py-2 font-bold text-center" type="submit">Create Account</button>
            </form>
        </div>
    )
}

export default Signup;