import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    const userInfo={
      name:data.name,
      email:data.email,
      message:data.message,

    };
    try{
      await axios.post("https://getform.io/f/avrrjowa",userInfo);
      toast.success("your message has been sent")
    }
    catch(error){
      console.log(error);
      toast.error("somthing went wrong");
    }
  }
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container md:px-20 md:mt-10 "
      >
        <h1 className="text-3xl font-semibold">Contact me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5 my-5">
          <form 
          // action="https://getform.io/f/avrrjowa" 
          //  method="POST" 
           onSubmit={handleSubmit(onSubmit)}
           
            className="bg-slate-200  w-96 px-8 py-6 rounded-xl">
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div  className=" flex flex-col mb-4 ">
              <label htmlFor="" className="blcok text-gray-700">
                FullName
              </label>
              <br />
              <input
              name="name"
                type="text"
                placeholder="Enter your full name"
                className="shadow-lg px-2 py-3 rounded-lg "
                {...register("name", { required: true })}
              />
               {errors.name && <span>This field is required</span>}
            </div>
            <div className=" flex flex-col mb-2 ">
              <label htmlFor="" className="blcok text-gray-700">
                Email
              </label>
              <br />
              <input
              name="email"
                type="email"
                placeholder="Enter your Eamil"
                className="shadow-lg px-2 py-3 rounded-lg "
                {...register("email", { required: true })}
              />
               {errors.email && <span>This field is required</span>}
            </div>
            <div className=" flex flex-col mb-4 ">
              <label htmlFor="" className="blcok text-gray-700">
                Message
              </label>
              <br />
              <textarea
               name="message"
                type="text"
                placeholder="Enter your Message"
                className="shadow-lg px-2 py-3 rounded-lg "
                {...register("message", { required: true })}
              />
               {errors.message && <span>This field is required</span>}
            </div>
            <button type="submit" className="text-lg font-semibold bg-black hover:bg-gray-700 text-white px-2 py-1 rounded-lg">
              {" "}
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
