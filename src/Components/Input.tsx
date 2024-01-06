import { ReactNode } from "react";
interface ButtonProperties {
  type: "text" | "password";
  children?: ReactNode;
}

function CustomInput({}: ButtonProperties) {
  return <input></input>;
}
export default CustomInput;
