"use client";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const defaultFormState = {
  name: {
    value: "",
    error: "",
  },
  email: {
    value: "",
    error: "",
  },
  message: {
    value: "",
    error: "",
  },
};
 const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);
  const [loading,setLoading]=useState(false);

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if(response.status==200){
          toast.success("I will contact you soon");
        }else{
          toast.error("something went wrong");
        }
      
  
      } catch (error) {
        setLoading(false);
        console.error('Error:', error);
      }finally{
        setLoading(false);
      }

    
  };
  return (
    <div className="relative mx-4 px-4 sm:px-8 md:px-20 lg:px-60 flex flex-col justify-center items-start h-full ">
        <div className="flex flex-col items-start justify-start">
                <h1 className="text-2xl lg:text-3xl">✉️</h1>
                <h1 className="text-2xl lg:text-3xl text-[#515151] font-bold">Contact Me</h1>
                <p className="text-sm text-slate-500 pt-4">
                Reach out to me over email or fill up this contact form. I will get back to you ASAP - I promise.


                </p>
                </div>
<div className="pt-8 lg:pt-16">

    <form className="form pl-8 sm:pl-0" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.name.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
        <input
          type="email"
          placeholder="Your email address"
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.email.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <div>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
          value={formData.message.value}
          onChange={(e) => {
            setFormData({
              ...formData,
              message: {
                value: e.target.value,
                error: "",
              },
            });
          }}
        />
      </div>
      <button disabled={loading}
        className="w-full px-2 py-2 mt-4 bg-neutral-100 rounded-md font-bold text-neutral-500 mb-4"
        type="submit"
      >
        Submit{" "}
      </button>
    </form>
    {loading && (
      <div className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm z-10 flex items-center justify-center">
        <Loader2 className="animate-spin "/>

      </div>
    )}
</div>
    </div>

  );
};
export default Contact;