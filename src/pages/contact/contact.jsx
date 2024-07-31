import React from 'react';

const Contact = () => {
  return (
    <div className="text-left pt-10 h-full sm:mt-0">
      <h1 className="text-[2.8rem] sm:text-[3.8rem] font-bold relative">
        <span className="text-[3rem] sm:text-[4.2rem] text-orange-500">C</span>
        ONTACT
        <div className="absolute bottom-0 left-0 pl-10 w-[120%] sm:w-[50%] h-1 bg-orange-500 transform -translate-x-[50%]"></div>
      </h1>

      <div className="flex flex-col h-full gap-10 p-4 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:gap-20">
          <div className="flex-1">
            <h2 className="text-[2.4rem] sm:text-[2.8rem] font-bold mb-4">
              <span className="text-[3rem] sm:text-[4.2rem] text-orange-500">
                G
              </span>
              ET IN TOUCH
            </h2>
            <p className="text-[1.2rem] sm:text-[1.4rem] mb-4">
              Feel free to reach out to me for any inquiries, collaborations, or
              just to say hello!
            </p>
            <p className="text-[1rem] sm:text-[1.2rem]">
              <span className="font-bold">Email:</span> 224abhishekjha@gmail.com
            </p>
            <p className="text-[1rem] sm:text-[1.2rem]">
              <span className="font-bold">Phone:</span> +919958329820
            </p>
          </div>
          <div className="flex-1 mt-8 sm:mt-0">
            <form className="flex flex-col gap-4">
              <div>
                <label className="text-[1rem] sm:text-[1.2rem] font-bold">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-orange-500 rounded-md"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="text-[1rem] sm:text-[1.2rem] font-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-orange-500 rounded-md"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="text-[1rem] sm:text-[1.2rem] font-bold">
                  Message
                </label>
                <textarea
                  className="w-full p-2 border border-orange-500 rounded-md"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-orange-500 text-white font-bold rounded-md hover:bg-orange-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
