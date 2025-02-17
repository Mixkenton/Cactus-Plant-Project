"use client";
import Logo from "../../images/logo.png"
import Image from 'next/image'
export default function Login() {
  
    return (
      <div className="h-full w-full  realative">
        <div  className="flex flex-col justify-center items-center p-5 mx-auto h-full ">
          <div className="relative w-full rounded-xl shadow border border-border md:mt-0 sm:max-w-md xl:p-0 bg-[#DCD7C9]">
              <div className="flex flex-col justify-center items-center">
                <div className="pt-2">
                <Image
                      src={Logo}
                      width={150}
                      height={150}
                      alt=""
                    />
                </div>
                <div className="pt-4" >
                   Hello 
                </div>
                <div>
                   Hello 
                </div>
                
              </div>
              
            </div>

           
        </div>
           
      </div>
    );
};