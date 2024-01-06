import bgImage from "../Files/img/bg.jpg";
import Button from "../Components/Button";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

/* The reason why style={ backgroundImage: "../Files/img/bg.jpg" } doesn't work is because the value of the backgroundImage property in the style object should be a URL, not a file path. When using inline styles in React, you need to provide a valid URL for the background image.

In the working example provided, the backgroundImage property is set to url(${bgImage}), where bgImage is a variable that holds the imported image file. This allows React to correctly interpret it as a URL and apply it as the background image.

If you want to use a relative file path directly in the style object, you can do so by using the require() function like this:

style={{backgroundImage: url(${require("../Files/img/bg.jpg")})}}

This will correctly convert the file path into a URL that can be used as a background image. */
// طریقه اوردن عکس در تایپاسکریپت
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // const handleIconClick = () => {
  //   togglePasswordVisibility();
  // };
  return (
    <div
      className="bg-cover bg-center h-screen w-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="text-center rounded-lg h-96 w-[80%] max-w-96 flex flex-col
        items-center justify-evenly backdrop-filter backdrop-blur "
      >
        <h1 className=" animate-jump-in animate-delay-300 animate-once font-bold text-5xl ">
          Login
        </h1>
        <input
          type="text"
          placeholder="Email"
          className="px-2 rounded-lg w-[80%] h-[9%]  bg-gray-300"
        ></input>

        {/*-------------------------------------------- PASSWORD --------------------------------------------*/}
        <div className="grid grid-cols-[12fr_1fr] justify-center items-center ">
          {/* <div className="flex flex-row gap-x-2 items-center "> */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="px-2 ml-6 rounded-lg justify-self-center w-[85%] h-[165%] bg-gray-300 "
          ></input>
          <div onClick={togglePasswordVisibility} className="mr-5">
            <IoMdEye
              className={`scale-150 text-gray-700 ${
                showPassword ? "block" : "hidden"
              }`}
            />
            <IoMdEyeOff
              className={`scale-150 text-gray-700 ${
                showPassword ? "hidden" : "block"
              }`}
            />
          </div>
        </div>
        {/*-------------------------------------------- PASSWORD --------------------------------------------*/}

        <Button moreClass="w-[80%] h-[9%]">Login</Button>

        {/*-------------------------------------------- OR --------------------------------------------*/}
        <div className="grid grid-cols-3 items-center text-gray-500">
          <hr className="border-gray-500 " />
          <span className="text-center text-sm mx-7 -my-3 ">OR</span>
          <hr className="border-gray-500" />
        </div>
        {/*-------------------------------------------- OR --------------------------------------------*/}

        {/*-------------------------------------------- GOOGLE --------------------------------------------*/}
        <Button moreClass="flex flex-row bg-white w-[80%] h-[9%] rounded-xl justify-center items-center">
          <span className="mr-2">Login via</span>
          <FcGoogle className="size-6 animate-spin animate-once animate-duration-[2000ms] animate-delay-300 animate-ease-in-out" />
        </Button>
        {/*-------------------------------------------- GOOGLE --------------------------------------------*/}

        {/*-------------------------------------------- REGISTER --------------------------------------------*/}
        <div className="my-3">
          <span className="text-gray-500 text-sm">
            If you don't have an account:
          </span>
          <Button moreClass="w-[80%] h-[80%]">Register</Button>
        </div>
        {/*-------------------------------------------- REGISTER --------------------------------------------*/}
      </div>
    </div>
  );
};

export default LoginPage;

// const validateEmail = (email: string) => {
//   return email.match(
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   );
// };

// function onLoginButtonClicked(email: string, password: string) {
//   if (!validateEmail(email)) {
//     console.error("Please Enter a correct email");
//     return null;
//   }
// }
