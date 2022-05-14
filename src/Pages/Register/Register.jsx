import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <div className="w-[92%] max-w-[390px] mx-auto rounded-xl shadow-md px-4 py-10">
        <h2 className="text-xl font-semibold text-accent capitalize text-center mb-8">
          sign up
        </h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <label className="label">
            <span className="label-text text-gray-300 font-semibold">
              Email
            </span>
          </label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Your emal"
            className="input input-bordered input-accent w-full rounded-lg"
          />
          {errors.email ? (
            <p className="text-xs text-red-300">Please enter your email</p>
          ) : (
            ""
          )}
          <label className="label">
            <span className="label-text text-gray-300 font-semibold">
              Password
            </span>
          </label>
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Your password"
            className="input input-bordered input-accent w-full rounded-lg"
          />
          {errors.password ? (
            <p className="text-xs text-red-300">Please enter your password</p>
          ) : (
            ""
          )}
          <label className="label">
            <span className="label-text text-gray-300 font-semibold">
              Confirm Password
            </span>
          </label>
          <input
            {...register("confirmPassword", { required: true })}
            type="password"
            placeholder="confirm password"
            className="input input-bordered input-accent w-full rounded-lg"
          />
          {errors.confirmPassword ? (
            <p className="text-xs text-red-300">Please confirm your password</p>
          ) : (
            ""
          )}
          <p className="capitalize text-accent font-medium text-xs my-1 mt-5">
            forgot password?
          </p>
          <input
            type="submit"
            value="Login"
            className="text-white bg-accent w-full h-11 rounded-lg mt-6 cursor-pointer"
          />
          <p className="font-medium text-accent capitalize text-center my-2">
            already member?{" "}
            <Link to="/login" className="text-primary">
              login here
            </Link>
          </p>
        </form>
        <div className="divider mt-10">OR</div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
