import React from "react";
import Image from "next/image";
import foodSpread from "../../public/rumman-amin-nKs-oXRGGEg-unsplash.jpg";
import HeaderCartButton from "./HeaderCartButton";

interface AppProps {
  onShowCart: () => void;
}

const Header = (props: AppProps) => {
  return (
    <React.Fragment>
      <header className="fixed top-0 left-0 w-full h-20 text-white flex justify-between items-center py-0 px-4 shadow-sm z-10 bg-yellow-700">
        <h1 className="font-bold px-4 text-xl">OrderMealsFromUs</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="w-full h-96 z-0 overflow-hidden">
        <Image
          src={foodSpread}
          alt="Picture of a table with a spread covering all major food groups"
          className="w-full h-full object-cover"
          width={3500}
        ></Image>
      </div>
    </React.Fragment>
  );
};

export default Header;
