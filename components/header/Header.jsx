import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Header = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(""); // For backend error

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setEmailError(""); // Reset error on new submit

    try {
      const formData = new FormData();
      formData.append("email", email);

      const res = await axios.post("/api/email", formData);

      if (res.data.success) {
        toast.success(res.data.msg);
        setEmail("");
      } else {
        setEmailError(res.data.msg || "Something went wrong");
      }
    } catch (error) {
      const msg = error?.response?.data?.msg || "Something went wrong";
      setEmailError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quo quos, neque delectus voluptatibus inventore sed repudiandae earum voluptatem doloribus impedit consequuntur,
        </p>

        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000] p-2"
        >
          <div className="w-full flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="pl-4 outline-none w-full"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {loading ? (
              <button
                type="submit"
                className="border-l border-black p-4 sm:px-8 active:bg-gray-600 active:text-white flex gap-2"
              >
                <Loader2 className="animate-spin" /> Please wait
              </button>
            ) : (
              <button
                type="submit"
                className="border-l border-black p-4 sm:px-8 active:bg-gray-600 active:text-white"
              >
                Subscribe
              </button>
            )}
          </div>
        </form>
        {emailError && (
            <p className="text-red-500 text-lg mt-1 w-full text-left pl-2 flex justify-center">
              {emailError}
            </p>
          )}
      </div>
    </div>
  );
};

export default Header;
