import { useState } from "react";
import { useForm } from "react-hook-form";
import Logo from "../assests/Logo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavLink } from "react-router-dom";

function RegisterPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };
  if (isSubmitted) {
    return (
      <div>
        <div className="px-10 py-7 border-b-2 border-gray-600 flex flex-row items-center">
          <NavLink to="/">
            <ArrowBackIcon />
          </NavLink>
          <img className="w-32 ml-4" src={Logo} alt="Logo" />
        </div>
        <div class="flex flex-col items-center text-center justify-center pt-52">
          <h2 class="text-2xl font-bold mb-4">Registration successful!</h2>
          <p class="text-gray-700 text-lg mb-4">
            Enjoy browsing our library of books and discovering new titles.
          </p>
          <p class=" text-lg font-semibold">Happy reading!</p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="px-10 py-7 border-b-2 border-gray-600 flex flex-row items-center">
        <NavLink to="/">
          <ArrowBackIcon />
        </NavLink>
        <img className="w-32 ml-4" src={Logo} alt="Logo" />
      </div>
      <div className="pt-10 flex flex-col items-center gap-10">
        <strong>Create Your Account</strong>
        <form
          className="md:w-2/6 flex flex-col gap-10 px-5 box-border"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex justify-between">
            <div className="flex flex-col w-2/5">
              <input
                type="text"
                placeholder="First name"
                className="border border-gray-400 h-12 pl-2 outline-none w-full"
                {...register("firstName", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
              />
              {errors.firstName && errors.firstName.type === "required" && (
                <>
                  <span className="text-red-500">First name is required</span>
                  <br />
                </>
              )}
              {errors.firstName && errors.firstName.type === "minLength" && (
                <>
                  <span className="text-red-500">
                    First name should have a minimum of 3 characters
                  </span>
                  <br />
                </>
              )}
              {errors.firstName && errors.firstName.type === "maxLength" && (
                <>
                  <span className="text-red-500">
                    First name can only have maximum of 30 characters
                  </span>
                  <br />
                </>
              )}
            </div>
            <div className="flex flex-col w-2/5">
              <input
                type="text"
                placeholder="Last name"
                className="border border-gray-400 h-12 pl-2 outline-none w-full"
                {...register("lastName", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
              />
              {errors.lastName && errors.lastName.type === "required" && (
                <>
                  <span className="text-red-500">Last name is required</span>
                  <br />
                </>
              )}
              {errors.lastName && errors.lastName.type === "minLength" && (
                <>
                  <span className="text-red-500">
                    Last name should have a minimum of 3 characters
                  </span>
                  <br />
                </>
              )}
              {errors.lastName && errors.lastName.type === "maxLength" && (
                <>
                  <span className="text-red-500">
                    Last name can only have maximum of 30 characters
                  </span>
                  <br />
                </>
              )}
            </div>
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-400 h-12 pl-2 outline-none w-full"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && errors.email.type === "required" && (
              <>
                <span className="text-red-500">Email is required</span>
                <br />
              </>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <>
                <span className="text-red-500">Enter an valid email</span>
                <br />
              </>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-400 h-12 pl-2 outline-none w-full"
              {...register("password", {
                required: true,
                minLength: 10,
                pattern: /.*[\W]+.*/i,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <>
                <span className="text-red-500">Password is required</span>
                <br />
              </>
            )}
            {errors.password && errors.password.type === "minlength" && (
              <>
                <span className="text-red-500">
                  Password must be longer than 10 characters
                </span>
                <br />
              </>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <>
                <span className="text-red-500">
                  Password should contain a special symbol
                </span>
                <br />
              </>
            )}
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm password"
              className="border border-gray-400 h-12 pl-2 outline-none w-full"
              {...register("confirmPassword", {
                validate: (value) => value === watch("password"),
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">Passwords must match</span>
            )}
          </div>
          <div className="w-full flex justify-center">
            <button
              className="px-4 py-2 mb-10 h-10 bg-blue-500 rounded text-white font-semibold"
              type="submit"
              disabled={Object.keys(errors).length > 0}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
