"use client";
import { useState } from "react";
import { registerUser } from "../../service/service-login";  // Import function
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";  // Import useRouter

export default function Register() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();  // Initialize useRouter

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await registerUser(formData);

    if (result.success) {
      alert("Registration successful!");
      router.push("/login");
    } 
  };

  return (
    <div className="h-full w-full relative">
      <div className="flex flex-col justify-center items-center px-6 py-8 mx-auto h-full">
        <div className="relative w-full rounded-3xl shadow border border-border md:mt-0 sm:max-w-md xl:p-0 bg-[#DCD7C9]">
          <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
            <div className="font-extrabold text-5xl text-[#854836] pt-10 pb-10">
              Register
            </div>

            <div className="pt-4 w-full px-12 flex flex-col">
              <label className="block text-sm font-medium text-gray-900">Username</label>
              <input type="text" name="username" value={formData.username} onChange={handleChange} className="h-12 border border-gray-400 px-4 rounded-2xl text-gray-900 font-mono" required />
            </div>

            <div className="pt-4 w-full px-12 flex flex-col">
              <label className="block text-sm font-medium text-gray-900">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="h-12 border border-gray-400 px-4 rounded-2xl text-gray-900 font-mono" required />
            </div>

            <div className="pt-4 w-full px-12 flex flex-col">
              <label className="block text-sm font-medium text-gray-900">Password</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} className="h-12 w-full border border-gray-400 px-4 rounded-2xl text-gray-900 font-mono pr-10" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-500">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="w-full flex px-12 pt-12">
              <button type="submit" className="flex-grow text-white bg-[#3F4F44] hover:bg-[#2C3930] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-xl text-base h-16 text-center">
                Sign up
              </button>
            </div>

            <div className="pt-4 pb-10">
              <p className="text-base font-light text-neutral-900">
                Already have an account?{" "}
                <a href="/login" className="font-medium text-[#FFB22C] hover:underline">
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
