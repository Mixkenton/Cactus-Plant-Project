"use client";
import Logo from "../../images/logo.png";
import Coin from "../../images/Coin.png";
import Greenhouse from "../../images/Greenhouse_.png";
import Image from "next/image";

export default function Dashboard() {
  const today = new Date();
  const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

  return (
    <div className="bg-[#3F4F44] min-h-screen w-full ">
      <nav className="bg-[#796440] mx-auto flex max-w-full items-center justify-between p-6 lg:px-8 h-20 shadow-md">
        {/* Logo Section */}
        <div>
          <Image src={Logo} width={60} height={60} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-row justify-between gap-x-10 p-4">
          <div className="text-[#FFB22C] bg-[#3F4F44] rounded-xl shadow-sm p-4">
            Greenhouse
          </div>
          <div className="text-[#FFB22C] p-4 hover:bg-[#3F4F44] rounded-xl shadow-sm cursor-pointer">
            Shop
          </div>
          <div className="text-[#FFB22C] p-4 hover:bg-[#3F4F44] rounded-xl shadow-sm cursor-pointer">
            Inventory
          </div>
        </div>

        {/* Coin & Date Section */}
        <div className="flex flex-col items-end">
          <div className="bg-[#F7F7F7] py-1 px-4 flex items-center gap-2 min-w-[100px] rounded-md shadow-inner">
            0.00 <Image className="shadow-sm" src={Coin} width={25} height={25} alt="Coin" />
          </div>
          <div className="pt-2 ">
            {formattedDate}
          </div>
        </div>
      </nav>
      <div className="m-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <div className="bg-[#DCD7C9] flex flex-col p-3 pb-4 sm:w-60 m-4 gap-3 items-center justify-center relative rounded-xl shadow-sm cursor-pointer">
          {/* Top-right corner */}
          <div className="absolute top-2 right-2 text-base ">
            0/30
          </div>

          {/* Centered Image */}
          <Image className="" src={Greenhouse} width={150} height={150} alt="Greenhouse" />
          <div>
            Name Greenhouse
          </div>
        </div>
        <div className="bg-[#DCD7C9] flex flex-col p-3 pb-4 sm:w-60 m-4 gap-3 items-center justify-center relative rounded-xl shadow-sm cursor-pointer">
          {/* Top-right corner */}
          <div className="absolute top-2 right-2 text-base ">
            0/30
          </div>

          {/* Centered Image */}
          <Image className="" src={Greenhouse} width={150} height={150} alt="Greenhouse" />
          <div>
            Name Greenhouse
          </div>
        </div>
        <div className="bg-[#DCD7C9] flex flex-col p-3 pb-4 sm:w-60 m-4 gap-3 items-center justify-center relative rounded-xl shadow-sm cursor-pointer">
          {/* Top-right corner */}
          <div className="absolute top-2 right-2 text-base ">
            0/30
          </div>

          {/* Centered Image */}
          <Image className="" src={Greenhouse} width={150} height={150} alt="Greenhouse" />
          <div>
            Name Greenhouse
          </div>
        </div>
        <div className="bg-[#DCD7C9] flex flex-col p-3 pb-4 sm:w-60 m-4 gap-3 items-center justify-center relative rounded-xl shadow-sm cursor-pointer">
          {/* Top-right corner */}
          <div className="absolute top-2 right-2 text-base ">
            0/30
          </div>

          {/* Centered Image */}
          <Image className="" src={Greenhouse} width={150} height={150} alt="Greenhouse" />
          <div>
            Name Greenhouse
          </div>
        </div>
        <div className="bg-[#DCD7C9] flex flex-col p-3 pb-4 sm:w-60 m-4 gap-3 items-center justify-center relative rounded-xl shadow-sm cursor-pointer">
          {/* Top-right corner */}
          <div className="absolute top-2 right-2 text-base ">
            0/30
          </div>

          {/* Centered Image */}
          <Image className="" src={Greenhouse} width={150} height={150} alt="Greenhouse" />
          <div>
            Name Greenhouse
          </div>
        </div>
        <div className="bg-[#DCD7C9] flex flex-col p-3 pb-4 sm:w-60 m-4 gap-3 items-center justify-center relative rounded-xl shadow-sm cursor-pointer">
          {/* Top-right corner */}
          <div className="absolute top-2 right-2 text-base ">
            0/30
          </div>

          {/* Centered Image */}
          <Image className="" src={Greenhouse} width={150} height={150} alt="Greenhouse" />
          <div>
            Name Greenhouse
          </div>
        </div>
        <div className="bg-[#DCD7C9] flex flex-col p-3 pb-4 sm:w-60 m-4 gap-3 items-center justify-center relative rounded-xl shadow-sm cursor-pointer">
          {/* Top-right corner */}
          <div className="absolute top-2 right-2 text-base ">
            0/30
          </div>

          {/* Centered Image */}
          <Image className="" src={Greenhouse} width={150} height={150} alt="Greenhouse" />
          <div>
            Name Greenhouse
          </div>
        </div>
        

      </div>
    </div>
  )
}