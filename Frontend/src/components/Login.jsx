import { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import { userContext } from '../context/context';
import { useNavigate } from 'react-router';

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const { setUserData } = useContext(userContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e) => {
    const emailRegex = /[a-zA-Z0-9+-_.%]+@[^\s@]+\.[a-z]{2,}$/;
    const { email, password } = formData;

    e.preventDefault();
    setFormData({
      ...formData,
      email: email?.trim(),
      password: password?.trim()
    });

    if (!email) return toast.warning("Enter email!!")
    if (!emailRegex.test(email)) return toast.warning("Invalid email!!")
    if (email.includes(" ")) return toast.warning("Email should not contain whitespace!!")
    if (!password) return toast.warning("Enter password!!")
    if (password.includes(" ")) return toast.warning("Password should not contain whitespace!!")
    if (password.length < 6) return toast.warning("Password must be atleast 6 characters long!!")

    fetch("https://propx-assignment.onrender.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          if (res.status === 404) {
            toast.error("User does not exist, please signup instead");
          } else if (res.status === 401) {
            toast.error("Incorrect password");
          } else {
            toast.error(data.message || "Something went wrong");
          }
          throw new Error("Login failed");
        }
        return data;
      })
      .then(data => {
        setUserData({ name: data.name, email });
        if (!data.name) {
          return toast.error("Something went wrong, try again")
        }
        setFormData({});
        toast.success("Login successful.")
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
          Signin to your <br />
          PopX account
        </h2>

        <div className="flex flex-col ">
          <label htmlFor="email" className="w-fit bg-zinc-100 px-2 text-sm font-medium text-purple-700 relative top-3 left-2">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
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

        <button className="bg-purple-800 text-zinc-100 rounded-md py-2 font-bold text-center" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
