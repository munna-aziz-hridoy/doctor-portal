import React from "react";

const HomeContact = () => {
  return (
    <div className="bg-appointment-bg bg-no-repeat bg-cover flex justify-center items-center flex-col gap-10 py-10">
      <div>
        <h3 className="text-primary text-center  uppercase font-semibold traking-wider text-lg my-8">
          contact us
        </h3>
        <h1 className="text-3xl md:text-5xl font-bold text-white capitalize text-center">
          stay connected with us
        </h1>
      </div>
      <form className="flex flex-col justify-center items-center gap-4 w-full p-5">
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered input-primary w-full max-w-xl"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-primary w-full max-w-xl"
        />
        <textarea
          className="textarea textarea-primary w-full max-w-xl"
          placeholder="Message"
        ></textarea>
        <input
          className="btn btn-primary hover:bg-accent bg-gradient-to-r from-secondary to-primary text-white font-semibold uppercase tracking-wider w-40"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default HomeContact;
