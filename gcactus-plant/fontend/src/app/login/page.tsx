"use client";
import { useState } from "react";
import Logo from "../../images/logo.png";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation"; // Import useRouter
import { loginUser } from "../../service/service-login"; ; // Assuming you have loginUser function in utils/auth

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter(); // useRouter hook for navigation

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call the login function with form data
    const result = await loginUser(formData);

    if (result.success) {
      alert("Login successful!");
      router.push("/dashboard"); // Redirect to dashboard or home page after successful login
    } else {
      alert("Login failed: " + result.message); // Show error message if login fails
    }
  };

  return (
    <div className="h-full w-full relative">
      <div className="flex flex-col justify-center items-center px-6 py-8 mx-auto h-full">
        <div className="relative w-full rounded-3xl shadow border border-border md:mt-0 sm:max-w-md xl:p-0 bg-[#DCD7C9]">
          <div className="flex flex-col justify-center items-center">
            <div className="pt-2">
              <Image src={Logo} width={150} height={150} alt="" />
            </div>
            <div className="font-extrabold text-5xl text-[#854836]">Login</div>
            <form onSubmit={handleSubmit} className="w-full px-12">
              <div className="pt-4 w-full flex flex-col">
                <label className="block text-sm font-medium text-gray-900">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 border border-gray-400 px-4 rounded-2xl text-gray-900 font-mono"
                  required
                />
              </div>
              <div className="pt-4 flex w-full flex-col">
                <label className="block text-sm font-medium text-gray-900">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="h-12 w-full border border-gray-400 px-4 rounded-2xl text-gray-900 font-mono pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
              <div className="w-full flex px-12 pt-12">
                <button
                  type="submit"
                  className="flex-grow text-white bg-[#3F4F44] hover:bg-[#2C3930] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-base h-16 text-center"
                >
                  Sign in
                </button>
              </div>
            </form>
            <div className="pt-4 pb-10">
              <p className="text-base font-light text-neutral-900">
                Don’t have an account?{" "}
                <a href="/register" className="font-medium text-[#FFB22C] hover:underline">
                  Get Started
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
