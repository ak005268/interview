import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const navigate=useNavigate();

    const [loginData, setLoginData] = useState({ username: "", password: "" });

    const [error,setError]=useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;

        setLoginData({ ...loginData, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginData)
        if (loginData?.username === "admin" && loginData?.password ==="admin"){
            localStorage.setItem("authentication", JSON.stringify(true));
            navigate('/dashboard')
        }
        else{
            setError("wrong credentials ")
        }

    };

    const authentication = localStorage.getItem("authentication");

    useEffect(() => {
        if (authentication) {
            navigate("/dashboard");
        }
    }, [authentication, navigate]);




    return (<div>

        <div className="bg-blue-200 h-screen flex justify-center items-center">


            <div className="shadow-2xs px-20 py-8 bg-amber-50 w-max flex flex-col justify-center items-center  rounded-2xl ">
                <div className="text-center">
                    Sign In
                </div>

                <div className="flex flex-row">
                    <form onSubmit={handleSubmit}>
                        <div className="">


                            <label className="mt-10">Username</label>
                            <div>

                                <input required className="border border-black" type="text" name="username" onChange={handleChange} placeholder="Enter your user name" />
                            </div>

                            <label>password</label>
                            <div>

                                <input required className="border border-black" type="password" name="password" onChange={handleChange} placeholder="Enter your password" />
                            </div>

                        </div>

                        <button className="bg-blue-700 py-2 w-full  mt-5 cursor-pointer" type="submit">Sign In</button>
{error&& (<div className="text-red-500">{error}</div>)}
                  
                    </form>
                </div>

            </div>
        </div>

    </div>)
}

export default Login;