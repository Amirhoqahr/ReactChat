import { ReactNode } from "react";
interface ButtonProperties {
  //علامت سوال یعنی پارامتر اختیاری است
  moreClass?: string;
  children?: ReactNode; // damit man schreiben kann: <Button> test1 <span>test2</span> </Button>  ansonstens soll es nur ein einfacher string sein
}

function Button({ children, moreClass = "" }: ButtonProperties) {
  const transtision = "transition ease-in-out duration-300";
  const color = "bg-blue-500 hover:bg-indigo-500";
  const scaleOnHover = "hover:scale-105";
  const border = "hover:border";
  const roundness = "rounded-lg ";
  // const translateOnHover = "hover:-translate-y-1";
  return (
    <button
      className={`${moreClass} ${transtision} ${color} ${scaleOnHover} ${border} ${roundness}`}
    >
      {children}
    </button>
  );
}
export default Button;
